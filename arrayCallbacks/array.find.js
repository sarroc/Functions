let movies = [
    "The Hunger Games",
    "Fast & Furious",
    "Mr. & Mrs. Smith",
    "Hidden Figures",
    "Mrs. Doubtfire"
]

const movie = movies.find(movie => {
   return movie.includes('Mrs');
})
const movie2 = movies.find(m => m.indexOf("Mrs") === 0);

const read = [
  {
    title: "Fourth Wing",
    author: ["Rebecca Yarros"],
    rating: 5,
  },
  {
    title: "ACOTAR",
    author: ["Sarah J. Maas"],
    rating: 4.75,
  },
  {
    title: "Shatter Me",
    author: ["Tahereh Mafi"],
    rating: 4.5,
  },
  {
    title: "Grace and Fury",
    author: ["Tracy Bangart"],
    rating: 4.75,
  },
];

const greatBooks = read.find(b => b.rating >= 4.5)
const authorBook = read.find(b => b.author.includes('Tracy Bangart'))