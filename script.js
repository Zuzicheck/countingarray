"use strict";

window.addEventListener("DOMContentLoaded", timer);

const myArray = [];
let myCounter = 0;

function timer() {
    setTimeout(timer, 1000);
    console.log(myArray);
    counter();
}

function counter() {
    myArray.unshift(myCounter);
    myCounter++;
    showNine();
}

function showNine() {
    if (myCounter > 9) {
        myArray.pop();
    }
}