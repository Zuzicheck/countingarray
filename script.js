"use strict";

window.addEventListener("DOMContentLoaded", timer);

const exeArray = [];
let exeCounter = 0;

//console.log exeArray value every second in a new line
function timer() {
    setTimeout(timer, 1000);
    console.log(exeArray);
    counter();
}
//adding +1 value to exeArray = "counting"
function counter() {
    exeArray.unshift(exeCounter);
    exeCounter++;
    showOnly9Values();
}
//showing only last nine values of particular line
function showOnly9Values() {
    if (exeCounter > 9) {
        exeArray.pop();
    }
}