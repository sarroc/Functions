// Arrow Fuctions = a more compact syntax for defining function expressions. If we have only one parameter we can leave the parentheses away. For a defined function with no parameters we have to have empty parantheses.

// const square = n => {
// if (n < 0) {             is a conditional 
    // return false;        is a statement  
// }
    // n * n                    is an expression
// }

// example of function expression without arrow function
const square = function(x) {
    return x * x;
}
// if only one, short expression, it can be rewritten with or without parents, even on one line
// const square = n => (
//     n * n
// )
// or
// const square = n => n * n;

// Arrow Function
const squares = x => {
    return x * x;
}

const isEven = num => {
    return num % 2 === 0;
}

const multi = (x, y) => {
    return x * y;
}

const salute = () => {
    console.log('Hello there)');
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const doubles1 = nums.map(function (n) {
    return n + 2;
})

const doubles2 = nums.map(n => {
  return n + 2;
})

const doubles3 = nums.map(n => n * 2);

// const parityList = nums.map(function (n) {
//     if (n % 2 === 0) return 'even';
//     return 'odd'
// })

// rewritten with an arrow function
// const parityList = nums.map((n) => {
//         if (n % 2 === 0) return 'even';
//         return 'odd'
// })
    
// rewritten with a ternary operater for an implicit return
const parityList = nums.map((n) => {
    n % 2 === 0 ? 'even' : 'odd'
});

// or rewritten as one liner though this example may be too long
// const parityList = nums.map((n) => n % 2 === 0 ? 'even' : 'odd');