const day = new Date().getDay();
var todayIs = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
// console.log("Today : " + todayIs[day])

const hours = new Date().getHours();
const minutes = new Date().getMinutes();
const seconds = new Date().getSeconds();
const AmPm = hours < 12 ? 'AM' : 'PM';
// console.log("Current Time is " + hours + AmPm + ":" + minutes + ":" + hours);



const container = document.querySelector('.container');
const content1 = document.createElement('h3');
content1.innerText = "Today : " + todayIs[day];
container.appendChild(content1);
const content2 = document.createElement('h3');
content2.innerText = "Current Time is " + hours + AmPm + ":" + minutes + ":" + hours;
container.appendChild(content2);


var currentMonth = new Date().getMonth();
var currentDate = new Date().getDate();
var currentYear = new Date().getFullYear();
console.log(currentMonth + "/" + currentDate + "/" + currentYear);

//Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7//;

let X = 5;
let Y = 6;
let Z = 7;

const s = (X+Y+Z)/2;

const AreaOfTriangle = Math.sqrt(s*(s-X)*(s-Y)*(s-Z));

console.log(`The Area Of The Triangle is ${AreaOfTriangle}`)

// var str = "abcd";
// var str1 ="";

// var len = str.length;

// var j = len - 1;

// for (var i = 0; i < len; i++) {
// 	//console.log(str.length);
// 	var sTr = str[j];
// 	console.log(sTr);
// 	str = str.slice(0, -1);
// 	console.log(str);
// 	// j--;
// 	str = sTr+str;
// 	console.log(str);
// }

function animate_string(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}