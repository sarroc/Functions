const numbs = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ['asap', 'byob', 'rsvp', 'dys', 'brb'];

const doubles = numbs.map(function(num) {
    return num * 2;
})
// MAP does not mutate the original array instead it maps the values to a new array or it can be used to extract and isolate certain values. We can then capture a new map array in a variable.

const numDetail = numbs.map(function(n) {
    return {
        value: n,
        isEven: n % 2 === 0
    }
})

const abbrevs = words.map(function(word) {
    return word.toUpperCase().split('').join('.');
})

const reads =[{
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

const titles = reads.map(function(b) {
    return b.title
})