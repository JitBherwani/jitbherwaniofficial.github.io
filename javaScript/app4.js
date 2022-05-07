// console.log("Hii Jit")

const name = [
    "Harry",
    "Ron",
    "Hermione",
    "Gillert",
    "Albus",
    "Nivelle",
    "Snape",
    "Malfoy",
    "Serious",
    "Lupin",
    "Tom",
    "Mayusmina",
    "Joe",
    "Ginnie",
    "Fred",
    "George",
]
const color = ["red","cyan","aquamarine","brown","yellowgreen","tomato","blueviolet","black","lightblue","crimson","green","blue","orange","violet","pink","yellow","indigo"];


const container = document.querySelector(".container");
for(let i = 0 ; i < name.length ; i++){
    const box = document.createElement('div');
    box.innerHTML = name[i];
    box.style.height = "32px";
    box.style.width = "100%";
    box.style.display = "block";
    let j = 0;
    // function changeColor(){
    //     // box.style.color = color[j];
    //     // j++;
    //     // if(j > color.length){
    //     //     j = 0;
    //     // }
        
    // }
    Array.from(box).forEach((element,j) => {
        box.style.color = color[j];
    });
        
   
    // setInterval(changeColor, 1000);
    container.appendChild(box)
}
        

    
