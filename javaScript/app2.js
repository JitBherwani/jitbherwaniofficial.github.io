var container = document.querySelector(".container");

const randNum = () => Math.floor(Math.random()*256);

function changeColor(){
  container.style.backgroundColor =`rgb(${randNum()},${randNum()},${randNum()})`;
}

var myTimer = setInterval(changeColor, 700);
var running = true;

container.onclick = function(){

  if(running) {
    clearInterval(myTimer);
    container.innerHTML = "<h1>Timer stopped</h1>";
    running = false;
  } else {
    myTimer = setInterval(changeColor, 700);
    container.innerHTML = "";
    running = true;
  }
 
};
// var r = Math.round(Math.random()*255);
// var g = Math.round(Math.random()*255);
// var b = Math.round(Math.random()*255);

// function changeColor(){
//     r = Math.round(Math.random()*255);
//     g = Math.round(Math.random()*255);
//     b = Math.round(Math.random()*255);

  // container.style.backgroundColor = "rgb("+r+","+g+","+b+")";

// }

// var myTimer = setInterval(changeColor, 700);
// var running = true;

// container.onclick = function(){

//   if(running) {
//     clearInterval(myTimer);
//     container.innerHTML = "Timer stopped";
//     running = false;
//   } else {
//     myTimer = setInterval(changeColor, 700);
//     container.innerHTML = "";
//     running = true;
//   }
 
// };