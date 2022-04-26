const color = ["red","cyan","aquamarine","brown","yellowgreen","tomato","blueviolet","black","lightblue","crimson","green","blue","orange","violet","pink","yellow","indigo"];
// const body = document.querySelector('body')
// var i = 0;
// function change() {
//   body.style.backgroundColor = color[i];
//   i++;
  
//   if(i > color.length - 1) {
//     i = 0;
//     }
//     console.log(i)
// }
// console.log(setInterval(change,1000))
// setInterval(change, 1000);
        
// color.forEach((element)=>{
//     // console.log(element);
    
//     console.log("Hii Jit");

// })

const container = document.querySelector('.container');
// console.log(container)
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.flexWrap = "wrap";

for(let i = 0; i < 8; i++){
    const box = document.createElement('div');
    box.style.width = "200px";
    box.style.height = "200px";
    box.style.borderRadius = "100px";
    box.style.border = "2px solid black";
    box.style.margin = "20px";

    container.appendChild(box);
    
    
    // for (let j = 0; j < color.length; j++) {
    //     setInterval(() => {
    //         box.style.backgroundColor = color[j];
    //         j = (j+1) % color.length;
    //     }, 500);
    // }

    let j = 0;
    function changeColor(){
        box.style.backgroundColor = color[j];
        j++;
        if(j > color.length - 1){  //jitne color hai usse upar gaya j toh j firse 0 ho jayega
            j = 0;
        }
    }
    setInterval(changeColor, 1000);
}
    
    
    
            
        

// console.log(container)

