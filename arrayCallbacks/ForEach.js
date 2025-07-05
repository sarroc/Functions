const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

numbers.forEach(function (num) {
    console.log(num);
});

function printTriple(n) {
    console.log(n * 3);
};

numbers.forEach(printTriple);
// anonymous function, is only needed once

numbers.forEach(function (num, idx) {
    console.log(idx, num);
});

const books =[{
    title: 'Fourth Wing',
    author: ['Rebecca Yarros'],
    rating: 5
    },
    {
    title: 'ACOTAR',
    author: ['Sarah J. Maas'],
    rating: 4.75
    },
    {
    title: 'Shatter Me',
    author: ['Tahereh Mafi'],
    rating: 4.5
    },
    {
    title: 'Grace and Fury',
    author: ['Tracy Bangart'],
    rating: 4.75
    }
]

books.forEach(function(book) {
    console.log(book.title.toUpperCase())
})

for (let book of books) {
    console.log(book.title.toUpperCase())
}
// both versions doing the same thing. forEach is a newer function. for loop calls a block and forEach an array.

