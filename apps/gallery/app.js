let arr = new Uint8ClampedArray(256*3);
let rndNum=(min,max)=>{  return Math.floor(Math.random()*(max-min+1)+min);  }
    
let images=[
    [
        [0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,4,4,4,4,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,3,1,1,1,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,5,1,1,1,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,3,1,0,0,0,0,0],
        [0,0,0,0,1,3,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,0,1,1,1,1,5,1,1,1,3,0,0,0],
        [0,0,0,1,5,1,1,3,1,1,1,1,1,0,0,0],
        [0,0,5,1,1,1,1,1,1,1,1,3,1,1,0,0],
        [0,0,1,1,1,3,1,1,1,1,1,5,1,1,0,0],
        [0,1,1,1,5,1,1,1,1,3,1,1,1,5,1,0],
        [0,1,3,1,1,1,1,5,1,1,1,3,1,1,1,0],
        [0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0]
    ],
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
        [0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0],
        [2,0,0,0,1,1,1,0,0,1,1,1,0,0,0,2],
        [0,2,0,0,0,1,1,1,1,1,1,0,0,0,2,0],
        [0,0,2,0,1,1,1,0,1,1,1,1,0,2,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0]
    ],
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,3,3,3,3,0,0,0,0,0,0],
        [0,0,0,0,0,3,3,3,3,3,3,0,0,0,1,0],
        [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,1,0,1,5,5,2,5,5,2,5,5,1,0,0,0],
        [0,0,0,1,5,5,2,5,5,2,5,5,1,0,0,1],
        [0,0,3,1,1,1,1,1,1,1,1,1,1,3,0,0],
        [0,3,1,3,1,1,1,1,1,1,1,1,3,1,3,0],
        [0,3,1,3,3,1,1,1,1,1,1,3,3,1,3,0],
        [0,0,0,0,4,4,1,1,1,1,4,4,0,0,0,0],
        [1,1,1,1,1,3,3,1,1,3,3,1,1,1,1,1],
        [1,1,1,1,1,2,2,3,3,2,2,1,1,1,1,1],
        [1,1,1,1,1,2,2,1,1,2,2,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    [
        [7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],
        [7,7,7,7,6,6,6,7,7,5,5,5,7,7,7,7],
        [7,7,7,6,6,6,4,4,4,4,5,5,7,7,7,7],
        [7,7,7,6,6,6,4,4,4,4,5,5,7,7,7,7],
        [7,7,7,1,1,1,1,2,2,1,1,1,2,7,7,7],
        [7,7,7,2,1,1,2,1,1,2,1,2,1,7,7,7],
        [7,7,7,1,2,2,1,1,1,1,2,1,1,7,7,7],
        [7,7,7,7,3,3,3,3,3,3,3,3,7,7,7,7],
        [7,7,7,7,3,3,3,3,3,3,3,3,7,7,7,7],
        [0,0,0,0,3,3,3,3,3,3,3,3,0,0,0,0],
        [0,0,0,3,3,3,3,3,3,3,3,3,0,0,0,0],
        [0,0,3,3,3,3,3,3,3,3,3,0,0,0,0,0],
        [0,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0],
        [0,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0],
        [0,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0],
        [0,0,3,3,3,3,3,3,3,0,0,0,0,0,0,0]
    ]
];


let colors=[
    ["000","200","130","555","330","050"],
    ["000","444","260"],
    ["011","555","000","050","500","452"],
    ["000","333","222","050","220","113","311","000"]
];

function drawImage(image, selectedColor){
    image.forEach((row,y)=>{
        row.forEach((col,x)=>{
            let color=selectedColor[col];
            if(selectedColor[col]==="###"){
                color=["050","555"][rndNum(0,1)];  
            }
            arr[pxy(x,y)]=color[0];
            arr[pxy(x,y)+1]=color[1];
            arr[pxy(x,y)+2]=color[2];
        });
    });
  
    PIXEL.write(B15,arr);
}

let interval=null;
function startApp(cb){
    
    let i=0;
    drawImage(images[i], colors[i]);
    
    interval=setInterval(function(){ 
        i++;
        if(i>=images.length){ i=0; }
        drawImage(images[i], colors[i]); 
    },10000);
    
    if(cb){cb();}
}


function stopApp(cb){
    clearInterval(interval);
    cb();
}

startApp();