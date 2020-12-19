let rndNum=(min,max)=>(Math.floor(Math.random()*(max-min+1)+min));
let arr=new Uint8ClampedArray(768);
let pixelsToChange=[];
let newColor=[];


let setNewColor=()=>{
  for(let p=0; p<256; p++){
    pixelsToChange[p]=p;
  }
  newColor[0]=rndNum(0,5);
  newColor[1]=rndNum(1,5);
  newColor[2]=rndNum(0,5);
};



let changeColor=()=>{
  if(pixelsToChange.length>0){
    let i=rndNum(0,pixelsToChange.length);
    let pixel=pixelsToChange.splice(i,1);  
  
    arr[pixel*3]=newColor[0];
    arr[(pixel*3)+1]=newColor[1];
    arr[(pixel*3)+2]=newColor[2];

    PIXEL.write(B15,arr);
  }else{
    setNewColor();
  }
};



let i=null;

function startApp(){
    setNewColor();
    i=setInterval(()=>{
        changeColor();
    },50);
}

function stopApp(){
  clearTimeout(i);
}

startApp();