const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const colortxt = document.querySelector(".color");

btn.addEventListener('click',function(){
let hexcolor = "#";
for(var i = 0 ; i< 6 ; i++){
 hexcolor += hex[Math.floor(Math.random() * hex.length)];
}
document.body.style.backgroundColor = hexcolor;
colortxt.textContent = hexcolor;

})