"use strict";

const board = document.querySelector(".board");

const topBorder = document.querySelector(".topBorder");
// const rightBorder = document.querySelector(".rightBorder");
// const bottomBorder = document.querySelector(".bottomBorder");
// const leftBorder = document.querySelector(".leftBorder");

let color1 = "black"
let color2 = "white"
const column = 8;
const row = 8;



let colorSwitcher = ""
let HTML = ""
let TOP = ""

for (let i = 0; i<row;i++){
   let box ="";

   for (let j = 0; j<column; j++){
       if (((i+1)+(j+1))%2 === 0){
        colorSwitcher = color1;
       }else{
        colorSwitcher = color2
       }
    box += `<div class="box"
                 style="display: inline-block;
                 width: calc(100% / ${column});
                 height: 100%;
                 background-color: ${colorSwitcher};"></div>`
}
   HTML += `<div class="row"
                 style="height: calc(100% / ${row}">${box}</div>`

   box = "";
}


for(let i = 0; i<column; i++){
    TOP +=  `<div class="topBox" style="width: calc(100% / ${column})"></div>`
}


board.innerHTML = HTML
topBorder.innerHTML = TOP