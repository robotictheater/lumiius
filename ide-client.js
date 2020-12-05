const PIXEL=require("neopixel"),
      WIFI = require("Wifi"),
      BUZZER=require('https://raw.githubusercontent.com/lumiius/device/master/libs/buzzer.js');
      BUZZER.port=A0;

var CONATMP=0;

var ws=null;

function xym(x,y){ return (((x%2===0) ? (16*(x))+(y) : (16*(x+1))-(y+1)))*3; }

/************************************************
  CONNECT - To lumiius Servers
************************************************/
function connect(p, cb){
  connectToWifi(p,(connected)=>{
    LED2.write(true);
    LED1.write(!connected);
    if(cb){ cb(connected); }
  });

}

/*******************************************
  * WIFI related logic
*******************************************/
  function connectToWifi(p, cb){
    WIFI.connect(((p && p[0]) ? p[0] : SSID), { password : ((p && p[1]) ? p[1] : WPWD) }, function(err) {
      if (err) {
        console.log("WIFI ERR",err);
        cb(false);
        return;
      }
      console.log("Connected to wifi", process.memory().free);
      connectToWebsocket(cb);
    });
  }
    
  WIFI.on('disconnected', function(details) {
    setTimeout( ()=>{ 
      console.log("Reconnecting to wifi");
      connectToWifi(p, cb);
    } ,5000 );
  });


/************************************************
  AP -- Create an accesspoint to accept wifi creds
************************************************/
function ap(){
  WIFI.startAP("lumiius", { password: "000ii000", authMode: 'open' }, (err)=>{

    require("http").createServer((req, res)=>{ 
      let rURL=url.parse(req.url,true);
        
      if(rURL.pathname!=="/" || !rURL.query.s || !rURL.query.p){
        res.writeHead(400, {"Access-Control-Allow-Origin":"*",'Content-Type': 'text/plain'});             
        res.end('400');
      }else{            
        res.writeHead(200, {"Access-Control-Allow-Origin":"*",'Content-Type': 'text/html'});             
        res.end(`200`);
        
        setTimeout(()=>{
          connect([rURL.query.s,rURL.query.p],(connected)=>{
            if(connected){
              require("Storage").write(".boot0", `const SSID="${rURL.query.s}", WPWD="${rURL.query.p}";`);
              E.reboot();
            }
          });
        },1000);
                  
      }

    }).listen(80);

  });
}

  /*******************************************
  * WEBSOCKET STUFF
*******************************************/
function connectToWebsocket(cb){
  CONATMP++;
  
  if(CONATMP>10){ E.reboot(); }
  
  ws = new require("ws")("api.lumiius.com",{
      path: '/',
      origin: 'Espruino',      
      headers:{ "device":getSerial() }
  });

  ws.on('open', function() {
    CONATMP=0;
    console.log("Connected to lumiius", process.memory().free);
    cb(true);
  });

  ws.on('error', function(d) {
    console.log("WS ERR",d);
    setTimeout( ()=>{ connectToWebsocket(cb); }, 5000 );
    cb(false);
  });
  
  ws.on('close', function() {
    console.log("WS closed");
    setTimeout( ()=>{ connectToWebsocket(cb); }, 5000 );
    cb(false);   
  });

  ws.on('message', function(msg) {                
    let m=JSON.parse(msg);
    switch(m[0]){
      case "#": //Just update the screen
        PIXEL.write(B15,Uint8ClampedArray(m[1]));
      break;
      case "!#": // Stop app and show new screen
        if(typeof STOPAPP!=="undefined"){ STOPAPP(); }
        PIXEL.write(B15,Uint8ClampedArray(m[1]));
      break;
      case "!": // New Program
        getNewApp(m[1]);
      break;
      case ">": //Just execute
        try{
          eval(m[1]);
          ws.send(JSON.stringify([ ">", true, null ]));
        }catch(e){
          ws.send(JSON.stringify([ ">", null, e.toString() ]));
        }
      break;
      case "_":
        require("Storage").erase(".boot1");
        BUZZER.play(["A5","E5"]);
        ws.send(JSON.stringify([ "_", true, null ]));
        E.reboot();
      break;
      default:
        if(typeof APPMSG!=="undefined"){ APPMSG(m[1]); }
      break;
    }

  });
}

function getNewApp(deviceAppId){
  function _getNewApp(deviceAppId){
    //HTTPS is available but for some reason calling https servers will sometimes result in memory errors. So for now, just using http.    
    require("http").get(`http://api.lumiius.com/espruino/${deviceAppId}`, function(res) {
    let newProgram="";
    
      res.on('data', function(data) {  newProgram+=data;  });
          
      res.on('close', function(data) {                                              
        if(Number(res.statusCode)===200){
          console.log("GOT DATA", res.statusCode);  
          
            try{
              if(newProgram.length>0){
                require("Storage").write(".boot1", newProgram); //Store the new one to disk
                ws.send(JSON.stringify([ "!", deviceAppId, true])); //Let the server know success
                BUZZER.play(["E5","A5"]);
                setTimeout(()=>{ E.reboot(); }, 1000);
              }
            }catch(e){
              console.log("catch",e);
              BUZZER.play(["E5","","","E5"]);
              console.log("Could not store program",e);
              ws.send(JSON.stringify([ "!", deviceAppId, e.toString() ]));
              if(typeof STARTAPP!=="undefined"){STARTAPP();}
            }

          }else{
            BUZZER.play(["E5","","","E5","","","E5"]);
            console.log("Bad HTTP responses",res.statusCode);
            ws.send(JSON.stringify([ "!", deviceAppId, "App contains errors." ]));
            if(typeof STARTAPP!=="undefined"){STARTAPP();}
          }
        });


      }).on('error', function(e) {
        console.log("http error",e);
        BUZZER.play(["E5","","","E5","","","E5","","","E5"]);
        ws.send(JSON.stringify([ "!", deviceAppId, e.toString() ]));
        if(typeof STARTAPP!=="undefined"){STARTAPP();}
      });
  }

  if(typeof STOPAPP!=="undefined"){
    STOPAPP(function(){ _getNewApp(deviceAppId); });
  }else{
    _getNewApp(deviceAppId);
  }
  
  
}


process.on('uncaughtException', function(exception) { 
  BUZZER.play(["E5","A5","E5","A5","E5","A5"]);
  console.log(exception);
  if(ws && ws.send){
    ws.send(JSON.stringify([ "E", getSerial(), JSON.stringify(exception) ]));
  }else{
    BUZZER.play(["E5","","","E5","","","E5","","","E5","","","E5"],function(){
      require("Storage").erase(".boot1");
      E.reboot();
    });
  }
});


setWatch(function() {
  require("Storage").erase(".boot1");
  E.reboot();
}, BTN1);

/************************************************
  ON BOOT 
   - Check if we have WFC stored
     - YES - then connect to wifi
     - NO  - open AP so we can collect them
************************************************/
E.on('init', function(){
  let firstRun=true;
  
  if(typeof SSID==="undefined"){
    ap();
    LED2.write(false);
    LED1.write(true);
  }else{
    connect(false,(connected)=>{
      if(connected){
        if(firstRun){

          firstRun=false;

          try{
            if(typeof STARTAPP!=="undefined"){ 
              STARTAPP(function(){
                BUZZER.play(["A5","E5"]);
                ws.send(JSON.stringify([ "I", getSerial(), {"memory":process.memory().free} ]));
              }); }
          }catch(e){
            console.log(e.toString());
          }
          
        }
      }          
    });
  }
});
