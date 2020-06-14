const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const colortxt = document.querySelector(".color");

btn.addEventListener('click',function(){
    //create a random number to generate random colours
    const random = getRandom();
    document.body.style.backgroundColor = colors[random];
    colortxt.textContent = colors[random];
})

function getRandom(){
    return Math.floor(Math.random() * colors.length);
}

function getHexcolours(){
    
}