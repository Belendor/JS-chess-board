"use strict";
let wordList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const board = document.querySelector(".board");

const topBorder = document.querySelector(".topBorder");
const leftBorder = document.querySelector(".leftBorder");
const rightBorder = document.querySelector(".rightBorder");
const bottomBorder = document.querySelector(".bottomBorder");

let color1 = "black"
let color2 = "white"
const column = 33;
const row = 33;



let colorSwitcher = ""
let HTML = ""
let TOP = ""
let LEFT = ""
let RIGHT = ""
let BOTTOM = ""

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

   
   LEFT += `<div class="leftBox" style="height: calc(100% / ${column})">${(i+1)}</div>`
   RIGHT += `<div class="rightBox" style="height: calc(100% / ${column})">${(i+1)}</div>`
}

for(let i = 0; i<column; i++){
  
   let indexArr = [];
   console.log(indexArr);
   
   function dvidesimSesi (num){
      let dalintas = Math.floor(num / 26);
      let liekana = num%26;
      indexArr.unshift(liekana)
   
     if(dalintas >= 1){
      let vienuMazenis = dalintas - 1
      dvidesimSesi(vienuMazenis)
     }
   }

   dvidesimSesi(i)
   
   let reikiamasSkaicius = ""
   for(let x = 0; x<indexArr.length; x++){
      let reikiamsIndex = indexArr[x] 
      reikiamasSkaicius += wordList[reikiamsIndex]
      console.log(reikiamasSkaicius);  
   }
    TOP +=  `<div class="topBox" style="width: calc(100% / ${column})">${reikiamasSkaicius}</div>`
    BOTTOM +=  `<div class="bottomBox" style="width: calc(100% / ${column})">${reikiamasSkaicius}</div>`
}


board.innerHTML = HTML
topBorder.innerHTML = TOP
leftBorder.innerHTML = LEFT
rightBorder.innerHTML = RIGHT
bottomBorder.innerHTML = BOTTOM
