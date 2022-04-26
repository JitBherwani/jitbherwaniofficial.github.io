const container = document.querySelector('.container');

const box = document.createElement('div');
box.style.width = "15vw";
box.style.height = "8vh";
box.style.flexWrap = "wrap";
box.style.border = "2px solid green";
// box.innerText = "RUNNER";
box.style.textAlign = "center";
box.style.display = "flex";
box.style.justifyContent = "center";
box.style.alignItems = "center";
box.style.backgroundColor = "azure";

document.body.appendChild(box);
const color = ["red","cyan","aquamarine","brown","yellowgreen","tomato","blueviolet","black","lightblue","crimson","green","blue","orange","violet","pink","yellow","indigo"];

// box.style.transform = "translate(0)"
var i = 0;
        function change() {
          box.style.backgroundColor = color[i];
          i++;
          
          if(i > color.length - 1) {
            i = 0;
            }
            // console.log(i)
            
        }
function changeDistance(){
    for (let i = 0; i < color.length; i++) {
        setInterval(() => {
            box.style.backgroundColor = color[i];
            i = (i+1) % color.length;
        }, 1000);
        
            
        box.style.transform  = `translate(Math.floor(Math.random(${container.innerWidth}px,${container.innerHeight}px)))`;
    }
}
function animate(){
    const width = document.body.width;
    const height = document.body.width;
    const randomWidth = Math.round(Math.random(width)*350);
    const randomHeight = Math.round(Math.random(height)*600);
    const boxStyle = box.style.transform = `translate(${randomWidth}px,${randomHeight}px`;
    box.style.transition = "1s ease"
    console.log(boxStyle)
}

setInterval(animate, 1000);
setInterval(change, 1000);

// setTimeout(()=>{
//     if (box.style.transform = "translate(0)"){
//         box.style.transform = `translate(200px,100px)`;
//         box.style.backgroundColor = "cyan";
//     }
//     setTimeout(()=>{
//         if (box.style.transform = `translate(200px,50px)`){
//             box.style.transform = `translate(400px,200px)`;
//             box.style.backgroundColor = "crimson";
//         }setTimeout(()=>{
//             if (box.style.transform = `translate(400px,100px)`){
//                 box.style.transform = `translate(600px,300px)`;
//                 box.style.backgroundColor = "yellow";
//             }
//             setTimeout(()=>{
//                 if (box.style.transform = `translate(600px,300px)`){
//                     box.style.transform = `translate(800px,400px)`;
//                     box.style.backgroundColor = "lightgreen";
//                 }
//                 setTimeout(()=>{
//                     if (box.style.transform = `translate(800px,400px)`){
//                         box.style.transform = `translate(950px,300px)`;
//                         box.style.backgroundColor = "lightblue";
//                     }
//                     setTimeout(()=>{
//                         if (box.style.transform = `translate(950px,300px)`){
//                             box.style.transform = `translate(750px,200px)`;
//                             box.style.backgroundColor = "lightpink";
//                         }
//                         setTimeout(()=>{
//                             if (box.style.transform = `translate(750px,200px)`){
//                                 box.style.transform = `translate(550px,100px)`;
//                                 box.style.backgroundColor = "gray";
//                             }
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)







