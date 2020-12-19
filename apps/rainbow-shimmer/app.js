let rndNum=(min,max)=>(Math.floor(Math.random()*(max-min+1)+min));
let arr=new Uint8ClampedArray(768);
let pixelsToChange=Uint8ClampedArray(256);



let paintBackground=()=>{
  for(let x=0; x<arr.length; x+=3){
    arr[x]=rndNum(0,3);  
    arr[x+1]=rndNum(1,3);  
    arr[x+2]=rndNum(0,3);  
  }
  PIXEL.write(B15,arr);
};



let changeColor=()=>{
  let pixel = rndNum(0,255);
  let pixel2 = rndNum(0,255);
  let pixel3 = rndNum(0,255);
  
  arr[pixel*3]=rndNum(0,3);
  arr[(pixel*3)+1]=rndNum(1,3);
  arr[(pixel*3)+2]=rndNum(0,3);
  
  arr[pixel2*3]=rndNum(0,3);
  arr[(pixel2*3)+1]=rndNum(1,3);
  arr[(pixel2*3)+2]=rndNum(0,3);
  
  arr[pixel3*3]=rndNum(0,3);
  arr[(pixel3*3)+1]=rndNum(1,3);
  arr[(pixel3*3)+2]=rndNum(0,3);
  
  PIXEL.write(B15,arr);
};



let i=null;

function startApp(){
  paintBackground();
  i=setInterval(()=>{
    changeColor();
  },20);
}

function stopApp(){
  clearTimeout(i);
}

startApp();