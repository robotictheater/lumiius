let arr = null,
    lastDraw="",
    color="030", 
    minuteZoomColor="333";

let digits={
  "0":[
    [1,1,1],
    [1,0,1],
    [1,0,1],
    [1,0,1],
    [1,0,1],
    [1,0,1],
    [1,0,1],
    [1,1,1]
  ],
  "1":[
    [0,1,0],
    [0,1,0],
    [0,1,0],
    [0,1,0],
    [0,1,0],
    [0,1,0],
    [0,1,0],
    [0,1,0]
  ],
  "1x":[
    [1,0,0],
    [1,0,0],
    [1,0,0],
    [1,0,0],
    [1,0,0],
    [1,0,0],
    [1,0,0],
    [1,0,0]
  ],
  "x1":[
    [0,0,1],
    [0,0,1],
    [0,0,1],
    [0,0,1],
    [0,0,1],
    [0,0,1],
    [0,0,1],
    [0,0,1]
  ],
  "2":[
    [1,1,1],
    [0,0,1],
    [0,0,1],
    [1,1,1],
    [1,0,0],
    [1,0,0],
    [1,0,0],
    [1,1,1]
  ],
  "3":[
    [1,1,1],
    [0,0,1],
    [0,0,1],
    [1,1,1],
    [0,0,1],
    [0,0,1],
    [0,0,1],
    [1,1,1]
  ],
  "4":[
    [1,0,1],
    [1,0,1],
    [1,0,1],
    [1,1,1],
    [0,0,1],
    [0,0,1],
    [0,0,1],
    [0,0,1]
  ],
  "5":[
    [1,1,1],
    [1,0,0],
    [1,0,0],
    [1,1,1],
    [0,0,1],
    [0,0,1],
    [0,0,1],
    [1,1,1]
  ],
  "6":[
    [1,1,1],
    [1,0,0],
    [1,0,0],
    [1,1,1],
    [1,0,1],
    [1,0,1],
    [1,0,1],
    [1,1,1]
  ],
  "7":[
    [1,1,1],
    [0,0,1],
    [0,0,1],
    [0,0,1],
    [0,0,1],
    [0,0,1],
    [0,0,1],
    [0,0,1]
  ],
  "8":[
    [1,1,1],
    [1,0,1],
    [1,0,1],
    [0,1,0],
    [1,0,1],
    [1,0,1],
    [1,0,1],
    [1,1,1]
  ],
  "9":[
    [1,1,1],
    [1,0,1],
    [1,0,1],
    [1,1,1],
    [0,0,1],
    [0,0,1],
    [0,0,1],
    [0,0,1]
  ]
};

/*****************************************************
 * CHIMES FUNCTION
 * **************************************************/
let chimes=(hour, minutes)=>{
    
    if(minutes==="00"){
        BUZZER.play([
        "E4", 
        "E4", 
        "E4", 
        "E4",
        "E4", 
        "E4",
        "",
        "", 
        "", 
        "G#4", 
        "G#4", 
        "G#4", 
        "G#4",
        "G#4", 
        "G#4",
        "",
        "", 
        "", 
        "F#4", 
        "F#4", 
        "F#4", 
        "F#4",
        "F#4", 
        "F#4", 
        "",
        "", 
        "", 
        "B3", 
        "B3", 
        "B3", 
        "B3",
        "B3", 
        "B3",
        "",
        "", 
        "",
        "",
        "", 
        "",
        "", 
        "",
        "E4", 
        "E4", 
        "E4", 
        "E4",
        "E4", 
        "E4",
        "",
        "", 
        "", 
        "F#4", 
        "F#4", 
        "F#4", 
        "F#4",
        "F#4", 
        "F#4",
        "",
        "", 
        "", 
        "G#4", 
        "G#4", 
        "G#4", 
        "G#4",
        "G#4", 
        "G#4",
        "",
        "", 
        "", 
        "E4", 
        "E4", 
        "E4", 
        "E4",
        "E4", 
        "E4",
        "",
        "", 
        "",
        "",
        "", 
        "",
        "", 
        "",
        "G#4", 
        "G#4", 
        "G#4", 
        "G#4",
        "G#4", 
        "G#4", 
        "", 
        "",
        "",
        "E4", 
        "E4", 
        "E4", 
        "E4",
        "E4", 
        "E4", 
        "", 
        "",
        "",
        "F#4", 
        "F#4", 
        "F#4", 
        "F#4",
        "F#4", 
        "F#4", 
        "", 
        "", 
        "",
        "B3", 
        "B3", 
        "B3", 
        "B3",
        "B3", 
        "B3",
        "",
        "", 
        "",
        "",
        "", 
        "",
        "", 
        "",
        "B3", 
        "B3", 
        "B3", 
        "B3",
        "B3", 
        "B3",
        "", 
        "", 
        "",
        "F#4", 
        "F#4", 
        "F#4", 
        "F#4",
        "F#4", 
        "F#4", 
        "", 
        "", 
        "",
        "G#4", 
        "G#4", 
        "G#4", 
        "G#4",
        "G#4", 
        "G#4", 
        "", 
        "",
        "",
        "E4", 
        "E4", 
        "E4", 
        "E4",
        "E4", 
        "E4",
        "", 
        "",
        "",
        "", 
        "",
        "", 
        "",
        "",
        ""
        ], function(){
          chimeTheHour((Date().getHours()%12) || 12)
      });
    }
    
    if(minutes==="15"){
        BUZZER.play([
        "G#4", 
        "G#4", 
        "G#4", 
        "G#4",
        "G#4", 
        "G#4", 
        "", 
        "",
        "", 
        "F#4", 
        "F#4", 
        "F#4", 
        "F#4",
        "F#4", 
        "F#4", 
        "", 
        "", 
        "", 
        "E4", 
        "E4", 
        "E4", 
        "E4",
        "E4", 
        "E4", 
        "", 
        "",
        "", 
        "B3", 
        "B3", 
        "B3", 
        "B3",
        "B3", 
        "B3"
        ]);
    }
    
    if(minutes==="30"){
        BUZZER.play([
        "E4", 
        "E4", 
        "E4", 
        "E4",
        "E4", 
        "E4",
        "",
        "", 
        "", 
        "G#4", 
        "G#4", 
        "G#4", 
        "G#4",
        "G#4", 
        "G#4",
        "",
        "", 
        "", 
        "F#4", 
        "F#4", 
        "F#4", 
        "F#4",
        "F#4", 
        "F#4", 
        "",
        "", 
        "", 
        "B3", 
        "B3", 
        "B3", 
        "B3",
        "B3", 
        "B3",
        "",
        "", 
        "",
        "",
        "", 
        "",
        "", 
        "",
        "E4", 
        "E4", 
        "E4", 
        "E4",
        "E4", 
        "E4",
        "",
        "", 
        "", 
        "F#4", 
        "F#4", 
        "F#4", 
        "F#4",
        "F#4", 
        "F#4",
        "",
        "", 
        "", 
        "G#4", 
        "G#4", 
        "G#4", 
        "G#4",
        "G#4", 
        "G#4",
        "",
        "", 
        "", 
        "E4", 
        "E4", 
        "E4", 
        "E4",
        "E4", 
        "E4"
        ]);
    }
    
    if(minutes==="45"){BUZZER.play([
        "G#4", 
        "G#4", 
        "G#4", 
        "G#4",
        "G#4", 
        "G#4", 
        "", 
        "",
        "",
        "E4", 
        "E4", 
        "E4", 
        "E4",
        "E4", 
        "E4", 
        "", 
        "",
        "",
        "F#4", 
        "F#4", 
        "F#4", 
        "F#4",
        "F#4", 
        "F#4", 
        "", 
        "", 
        "",
        "B3", 
        "B3", 
        "B3", 
        "B3",
        "B3", 
        "B3",
        "",
        "", 
        "",
        "",
        "", 
        "",
        "", 
        "",
        "B3", 
        "B3", 
        "B3", 
        "B3",
        "B3", 
        "B3",
        "", 
        "", 
        "",
        "F#4", 
        "F#4", 
        "F#4", 
        "F#4",
        "F#4", 
        "F#4", 
        "", 
        "", 
        "",
        "G#4", 
        "G#4", 
        "G#4", 
        "G#4",
        "G#4", 
        "G#4", 
        "", 
        "",
        "",
        "E4", 
        "E4", 
        "E4", 
        "E4",
        "E4", 
        "E4", 
        "",
        "", 
        "",
        "",
        "", 
        "",
        "", 
        "",
        "G#4", 
        "G#4", 
        "G#4", 
        "G#4",
        "G#4", 
        "G#4", 
        "", 
        "",
        "", 
        "F#4", 
        "F#4", 
        "F#4", 
        "F#4",
        "F#4", 
        "F#4", 
        "", 
        "", 
        "", 
        "E4", 
        "E4", 
        "E4", 
        "E4",
        "E4", 
        "E4", 
        "", 
        "",
        "", 
        "B3", 
        "B3", 
        "B3", 
        "B3",
        "B3", 
        "B3"
        ]);}
};


function chimeTheHour(h){
    let chimed=0;
    
    function playHourChime(){
        BUZZER.play(["E4", 
        "E4", 
        "E4", 
        "E4",
        "E4", 
        "E4",
        "",
        "", 
        "",
        "",
        "",
        "",
        "",
        ""],
        function(){
            chimed++;
            if(chimed<h){
                playHourChime();
            }
        });    
    }
    
    playHourChime();
}



/*****************************************************
 * PAINT BACKGROUND FUNCTION
 * **************************************************/
function paintBackground(){
  for(var i=0;i<256;i++) {
    arr[i*3] = 0;
    arr[(i*3)+1] = 0;
    arr[i*3+2] = 0;
  }
}

/*****************************************************
 * DRAW DIGIT FUNCTION
 * **************************************************/
function drawDigit(d, p, color){
  digits[d].forEach((row,y)=>{
    row.forEach((col,x)=>{
      arr[pxy(x+(4*p),y+4)]=(col==1) ? color[0] : 0;
      arr[pxy(x+(4*p),y+4)+1]=(col==1) ? color[1] : 0
      arr[pxy(x+(4*p),y+4)+2]=(col==1) ? color[2] : 0;
    });
  });
}

/*****************************************************
 * DRAW COLON FUNCTION
 * **************************************************/
function drawColon(color){
    arr[pxy(6,6)]=color[0];
    arr[pxy(6,6)+1]=color[1];
    arr[pxy(6,6)+2]=color[2];
    
    arr[pxy(6,8)]=color[0];
    arr[pxy(6,8)+1]=color[1];
    arr[pxy(6,8)+2]=color[2];
}

/*****************************************************
 * DRAW TIME FUNCTION
 * **************************************************/
function drawTime(){
  let h=(Date().getHours()%12) || 12;    
  if(h<10){h="0"+h.toString();}
  
  let m=Date().getMinutes();
  if(m<10){m="0"+m.toString();}
  
  let dateString=h.toString()+m.toString();
  if(Date().getSeconds()===59){
    minuteZoom();
  }
  
  if(lastDraw!=dateString){
    lastDraw=dateString;
    paintBackground(); 
    
    for(let i=0; i<dateString.length; i++){ 
      if(i===0 && dateString[i]==="1" && dateString[1]!=="1"){
          drawDigit("1x",0,color);
      }else if(i>0 || (i===0 && dateString[i]!=="0")){
        if(i===1 ){
          drawDigit(((dateString[i]==="1") ? "x1" : dateString[i]),0.5,color);
        }else{        
          drawDigit(dateString[i],i,color);
        }
        
        drawColon(color);
        
      }
    }
    
    PIXEL.write(B15, arr);
    
    //Only play chimes between 9am and 8:59pm
    if(Date().getHours()>=9 && Date().getHours()<=20){
      chimes(h.toString(), m.toString());
    }
    
    
  }
 
}

/*****************************************************
 * MINUTE ZOOM FUNCTION
 * **************************************************/
let minuteZoom=()=>{
  let unZoom=()=>{
    let zoomX=0;
    let zI=setInterval(function(){
      arr[pxy(zoomX,15)]=0;
      arr[pxy(zoomX,15)+1]=0;
      arr[pxy(zoomX,15)+2]=0;
      PIXEL.write(B15, arr);
      zoomX++;
      if(zoomX>15){
        clearInterval(zI);      
      }
    },30);
  };

  let zoomX=0;
  let zI=setInterval(function(){
    arr[pxy(zoomX,15)]=minuteZoomColor[0];
    arr[pxy(zoomX,15)+1]=minuteZoomColor[1];
    arr[pxy(zoomX,15)+2]=minuteZoomColor[2];
    PIXEL.write(B15, arr);
    zoomX++;
    if(zoomX>15){
      clearInterval(zI);
      unZoom();
    }
  },30);
};



let clock=null;


/*****************************************************
 * START APP FUNCTION
 * **************************************************/
function STARTAPP(cb){
    arr=new Uint8ClampedArray(256*3);
    BUZZER.vol=0.1;
    require("http").get(`https://lumiius-api.robotictheater.com/service/unixtime/${encodeURIComponent("America/New_York")}`, function(res) {
        let body="";
        res.on('data', function(data) {  body+=data;  });
            
        res.on('close', function(data) {                                              
            if(Number(res.statusCode)===200){
                setTime(JSON.parse(body).value);
                BUZZER.play(["A5", "B5", "C5", "D5","E5", "F5", "G5"]); 
            }else{
                setTime(1609462861);
            }
            clock=setInterval(function(){ drawTime(); },1000);
            drawTime();
            if(cb){cb();}
        });
      });
  
    
       
}


connectToWifi(function(){
  STARTAPP();
});