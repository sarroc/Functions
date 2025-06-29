// functions are simply values in JavaScript. We can put them in an object, they can be passed around in an argument, be called dyncamically and we can store them in an array



// function statement
function add (x, y) {
    return x + y;
}

// anonymous function stored in a variable
const sum = function(x, y) {
    return x + y;
}

//  named function stored in a variable
const product = function multiply(x, y) {
    return x * y;
}


// functions stored in an array
function add (x, y) {
    return x + y;
}

const subtract = function(x, y) {
    return x - y;
}

function multiply (x, y) {
    return x * y;
}

const divide = function(x, y) {
    return x / y;
}

const operations = [add, subtract, multiply, divide];

for (let func of operations){
    let result = func(30, 5);
    console.log (result);
}

// Methods 
const thing = {
    doSomething: multiply
}