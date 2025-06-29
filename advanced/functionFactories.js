// functions are values that can be passed around as an argument or as a return value like below 

function multiplyBy(num){
return function(x) {
    return x * num;
    }
}

const triple = multiplyBy(3);
const double = multiplyBy(2);
const halve = multiplyBy(0.5);

function makeBetweenFunc(x, y) {
return function(num) {
    return (num >= x && num <= y ); // Boolean expression
    }
}

const isChild = makeBetweenFunc(0,18)

const isInNineties = makeBetweenFunc(1990,1999)

const isNiceWeather = makeBetweenFunc(20,25)


function makeLessThanFunc(x) {
    return function(num) {
    return num < x;
    }
}

const isLess = makeLessThanFunc(18); 