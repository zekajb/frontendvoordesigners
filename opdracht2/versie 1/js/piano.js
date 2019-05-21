/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

// https://mrcoles.com/piano/

var names = ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Frédérik Chopin", "Johannes Brams", " Johan Sebastiaan Bach"];

//opdracht week 3 Dobbelsteen
var randomNum = Math.floor((Math.random() * names.length)); // een getal tussen 0 - 8
var namen = names[randomNum]; // pakt 1 waarde van de array

// opdracht week 1: Hello World!
document.querySelector("h1").textContent = "Feel like " + namen;

// geluiden:
var geluiden = document.querySelectorAll("audio"); // slaat alle audio op uit de html in js
var geluidZ = geluiden[0]; // namen gegeven om het makkelijk te maken voor mezelf
var geluidX = geluiden[1];
var geluidC = geluiden[2];
var geluidV = geluiden[3];
var geluidB = geluiden[4];
var geluidN = geluiden[5];
var geluidM = geluiden[6];

// toetsen:
var toetsen = document.querySelectorAll("img");

//https://gist.github.com/mikaelbr/6569804
// Javascript en jquery bldz: 85

// for each loop? kan dat?
function playsoundZ() {
    geluidZ.currentTime = 0; //ipv geluidZ had ik ook geluiden 0 kunnen doen
    geluidZ.play();
}

function playsoundX() {
    geluidX.currentTime = 0;
    geluidX.play();
}

function playsoundC() {
    geluidC.currentTime = 0;
    geluidC.play();
}

function playsoundV() {
    geluidV.currentTime = 0;
    geluidV.play();
}

function playsoundB() {
    geluidB.currentTime = 0;
    geluidB.play();
}

function playsoundN() {
    geluidN.currentTime = 0;
    geluidN.play();
}

function playsoundM() {
    geluidM.currentTime = 0;
    geluidM.play();
}


//https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript
//https://javascript.info/keyboard-events
//keyinfo.com
// https://stackoverflow.com/questions/12153357/how-to-register-document-onkeypress-event
//http://www.javascripter.net/faq/eventtargetsrcelement.htm


// Walter Giannuzi heeft mij op de goeie weg geholpen door target id te noemen.
function keyPress(e) { // elke keer wanneer deze functie wordt gebruikt wordt er een event afgevuurd en deze event is de keydown
    console.log(e.target.id);
    if (e.keyCode == 90 || e.target.id == "z") {
        playsoundZ();
    } else if (e.keyCode == 88 || e.target.id == "x") {
        playsoundX();
    } else if (e.keyCode == 67 || e.target.id == "c") {
        playsoundC();
    } else if (e.keyCode == 86 || e.target.id == "v") {
        playsoundV();
    } else if (e.keyCode == 66 || e.target.id == "b") {
        playsoundB();
    } else if (e.keyCode == 78 || e.target.id == 'n') {
        playsoundN();
    } else if (e.keyCode == 77 || e.target.id == 'm') {
        playsoundM();
    }
}

document.addEventListener("keydown", keyPress, false);
// als je een toets klikt dan speelt hij automatisch de functie af -> pas id functie wordt er gekeken of de toets die je hebt gedrukt aan de conditions voldoet-> zo ja speelt hij de functie af, zo nee doet hij niks

//https://gist.github.com/rushenn/177aca6705acf3ece9e7
// forloop: bladzijde 170
var i;
for (i = 0; i < toetsen.length; i++) {
    toetsen[i].addEventListener("click", keyPress, false);
} // als i kleinder is dan toetsen.length dan voegt hij een eventlistner toe die click heet en die vind je terug in de functie keypress
