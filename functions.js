//ALERT
alert("it's working!");

//SIMPLE
function dog() {
console.log("woof woof woof");
console.log("gimme treat now!");
console.log("yawn, I am tired.");
}
dog();

//GREETING
function greet(nickname) {
console.log(nickname);
console.log("Hi!");
}

function greet(nickname) {
console.log(`Hi, ${nickname}!`);
}

//MATH
function summe(x, y) {
console.log(x + y);
}

function div(x, y) {
console.log(x / y);
}

function add(x, y) {
console.log(x + y);
}
function add(x, y) {
return x + y; //returns the value and function is done. Return stops any further execution of the function.
}

//COLOR
function isOrange(color) {
if (color.toLowerCase() === "orange") {
return true;
} else {
return false;
}
}
function isOrange(color) {
if (color.toLowerCase() === "orange") {
return true;
}
return false;
}
// else not required as return stops function.

function isOrange(color) {
return color.toLowerCase() === "orange";
}
// only works for a simple yes or no situation.

function containsPurple(arr) {
for (let color of arr) {
if (color === "purple" || color === "magenta") {
return true;
}
}
return false; //has to be placed here as last option so the we done with looping through the entire array.
//}

//PASSWORD
function isValidPassword(password, username) {
if (password.length < 8) {
return false;
}
if (password.indexOf(" ") !== -1) {
return false;
}
if (password.indexOf(username) !== -1) {
}
return true;
}

function isValidPassword(password, username) {
if (
password.length < 8 ||
password.indexOf(" ") !== -1 ||
password.indexOf(username) !== -1
) {
return false;
}
return true;
} // shorter version of above function.

function isValidPassword(password, username) {
const tooShort = password.length < 8;
const hasSpace = password.indexOf(" ") !== -1;
const usesName = password.indexOf(username) !== -1;
if (tooShort || hasSpace || usesName) return false;
return true;
} // version with variables


function isValidPassword(password, username) {
const tooShort = password.length < 8;
const hasSpace = password.indexOf(" ") !== -1;
const usesName = password.indexOf(username) !== -1;
if (!tooShort && !hasSpace && !usesName) return true;
return false;
}

//AVERAGE
function avg(arr) {
  let total = 0;
// loop over each number
  for (let num of arr) {
// add them together
total += num;
  }
// divide by number of nums
  return total / arr.length;
}


Pangram 
// (sentence using every letter of a given alphabet at least once)
// Waltz, bad nymph, for quick jigs vex.
// Sphinx of black quartz, judge my vow.
// How quickly daft jumping zebras vex!
// The five boxing wizards jump quickly.
// Pack my box with five dozen liquor jugs.

function isPangram(phrase) {
let lowerCased = phrase.toLowerCase(); //so string can be uppercase
// loop over each letter of the alphabet
for (let letter of "abcdefghijklmnopqrstuvwxyz") {
if (lowerCased.indexOf(letter) === -1) {
return false;
}
}
return true;
}

// Playing Cards
function getCard() {
  const values = [
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"10",
"J",
"Q",
"K",
"A",
  ];
  const valIdx = Math.floor(Math.random() * values.length); //decimel from 0-1 not including 10. math.floor gets rid of decimel.
  const value = values[valIdx];
  const suits = ["clubs", "spades", "hearts", "diamonds"];
  const suitIdx = Math.floor(Math.random() * suits.length);
  const suit = suits[suitIdx];
  console.log(value, suit);
}

function pick(arr) { //easier way to pick multiple values instead of repeating code.
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}
function getCard() {
  const values = [
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"10",
"J",
"Q",
"K",
"A",
  ];
  const suits = ["clubs", "spades", "hearts", "diamonds"];
  return { value: pick(values), suit: pick(suits) };
}

// Function Scope
function isPerson(){
let person = 'Charlie';
const age = 40
var color = 'orange'
console.log(color);
}

function changeColor(){
let color = 'purple';
const form = 'round';
console.log(color);
}
isPerson();
changeColor();

let bird = "bee hummingbird";

function birdWatch() {
  let bird = "owl";
  console.log(bird);
}
birdWatch();
console.log(bird)
}