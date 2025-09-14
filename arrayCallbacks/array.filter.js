const digit = [34, 35, 67, 54, 109, 102, 32, 9];

const odds = digit.filter(n => n % 2 === 1)
const evens = digit.filter(n => n%2 === 0)
const bigNums = digit.filter(n => n > 50)
const smallNums = digit.filter(n => n < 50)

const readings = [
  {
    title: "Fourth Wing",
    author: ["Rebecca Yarros"],
    rating: 5,
    genre: ["fantasy", "adventure"],
  },
  {
    title: "ACOTAR",
    author: ["Sarah J. Maas"],
    rating: 5,
    genre: ["fantasy", "romance"],
  },
  {
    title: "Shatter Me",
    author: ["Tahereh Mafi"],
    rating: 4,
    genre: ["fiction", "romance"],
  },
  {
    title: "Grace and Fury",
    author: ["Tracy Bangart"],
    rating: 4.75,
    genre: ["adventure", "romance"],
    },
    {
    title: "Crescent City",
    author: ["Sarah J. Maas"],
    rating: 5.5,
    genre: ["fantasy", "romance"],
    },
    {
    title: "Quicksilver",
    author: ["Callie Hart"],
    rating: 3,
    genre: ["adventure", "fantasy"],
    },
    {
    title: "Marked",
    author: ['P.C. Cast', 'Kristin Cast'],
    rating: 4.3,
    genre: ["fantasy", "adventure"],
    },
];
  
const goodBooks = books.filter(b => b.rating > 4.5)
const fantasyBooks = readings.filter(book => (book.genre.includes('fantasy')
))
const fantasyMultiAuthors = readings.filter(
  (book) => book.genre.includes("fantasy") && book.author.length > 1
)
const query = 'And';
const results = books.filter(book => {
    const title = book.title.toLowerCase();
    return title.includes(query.toLowerCase())
})