// var is hoisted, where as let and const are not


// var animal;
// console.log(animal);
// animal = 'Horse'
// console.log(animal);

// same as:

console.log(animal);
var animal = 'Horse'
console.log(animal);
// hoisting =  the behavior where JavaScript sees a var declaration it will run this first and later fill the value. So declare and initialize them before doing anything with them.

// console.log(fish);
// let or const fish =  'Star Fish';
// variable declarations made with let and const are not hoisted so we cannot access it before we run this

let bunny = 'White Bunny';
console.log(bunny);


howl();

function howl() {
    console.log("Awoooooo");
}
// function statements/declarations are hoisted


console.log(hoot);
var hoot = function() {
    console.log("Hooo Hooo");
}
// function expressions are not hoisted the same way. JavaScript knows the variable here but it doesn't know the value so it's undefined. calling the function hoot() calls undefined which we can't do. 

