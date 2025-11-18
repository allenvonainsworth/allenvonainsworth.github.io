// Sample movie data
const initialMovies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    cast: [
      { name: "Leonardo DiCaprio", profile: "https://image.tmdb.org/t/p/w185/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg" },
      { name: "Marion Cotillard", profile: "https://image.tmdb.org/t/p/w185/7qYjSphQ2bnapz2KWhJ8HjG9r1M.jpg" },
      { name: "Tom Hardy", profile: "https://image.tmdb.org/t/p/w185/yVGF9FvDxTDPhGimTbZNfghpllW.jpg" }
    ],
    reviews: [
      { user: "John Doe", rating: 9, comment: "Mind-bending masterpiece!" },
      { user: "Jane Smith", rating: 8, comment: "Complex but rewarding." }
    ]
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/hqkIcbrOHL86UncnHIsHVcVmzue.jpg",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
    cast: [
      { name: "Christian Bale", profile: "https://image.tmdb.org/t/p/w185/vqdaM1YW45vPGRKrtHGfQGof2mT.jpg" },
      { name: "Heath Ledger", profile: "https://image.tmdb.org/t/p/w185/5Y9HnYYa9jF4NunY9lSgJGjSe8E.jpg" },
      { name: "Aaron Eckhart", profile: "https://image.tmdb.org/t/p/w185/7kQB80VD9ZHgVsFtzLawONOWx6j.jpg" }
    ],
    reviews: [
      { user: "Bob Wilson", rating: 10, comment: "Heath Ledger's Joker is iconic." },
      { user: "Alice Brown", rating: 9, comment: "Action-packed and thrilling." }
    ]
  },
  {
    id: 3,
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crime",
    rating: 8.9,
    poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    trailer: "https://www.youtube.com/embed/s7EdQ4FqbhY",
    cast: [
      { name: "John Travolta", profile: "https://image.tmdb.org/t/p/w185/7bVTevQLZQZ8pKC2SIqAzWI7PV.jpg" },
      { name: "Samuel L. Jackson", profile: "https://image.tmdb.org/t/p/w185/nCJJ3NVksYNPsfMeCv8sSs3wTuE.jpg" },
      { name: "Uma Thurman", profile: "https://image.tmdb.org/t/p/w185/8o9nxpOhMLWQ4XDXx5zNJW2Hq7.jpg" }
    ],
    reviews: [
      { user: "Charlie Davis", rating: 9, comment: "Quentin Tarantino at his best." },
      { user: "Diana Evans", rating: 8, comment: "Non-linear storytelling genius." }
    ]
  },
  {
    id: 4,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    rating: 9.3,
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    trailer: "https://www.youtube.com/embed/6hB3S9bIaco",
    cast: [
      { name: "Tim Robbins", profile: "https://image.tmdb.org/t/p/w185/4HQ1nHt8rzbB7B4LkT2g8q4j8.jpg" },
      { name: "Morgan Freeman", profile: "https://image.tmdb.org/t/p/w185/jPsLqiYGSofU4s6BjrxnefMfGB.jpg" },
      { name: "Bob Gunton", profile: "https://image.tmdb.org/t/p/w185/8z7i7z9z9z9z9z9z9z9z9z9z9z9.jpg" }
    ],
    reviews: [
      { user: "Eve Foster", rating: 10, comment: "Timeless classic." },
      { user: "Frank Garcia", rating: 9, comment: "Hope and friendship prevail." }
    ]
  },
  {
    id: 5,
    title: "Forrest Gump",
    year: 1994,
    genre: "Drama",
    rating: 8.8,
    poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/3h1JZGDhZ8nzxdgvkxha0qBqi05.jpg",
    description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
    trailer: "https://www.youtube.com/embed/bLvqoHBptjg",
    cast: [
      { name: "Tom Hanks", profile: "https://image.tmdb.org/t/p/w185/xndWFsBlClOJYTdZvCudkaS1KdR.jpg" },
      { name: "Robin Wright", profile: "https://image.tmdb.org/t/p/w185/1wY4TtOTCFvW9Q43W7iJJglwUw.jpg" },
      { name: "Gary Sinise", profile: "https://image.tmdb.org/t/p/w185/7LnP9Q2xK8QzQhQhQhQhQhQhQhQ.jpg" }
    ],
    reviews: [
      { user: "Grace Hill", rating: 9, comment: "Life is like a box of chocolates." },
      { user: "Henry Ingram", rating: 8, comment: "Tom Hanks is brilliant." }
    ]
  },
  {
    id: 6,
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    rating: 8.7,
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg",
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    trailer: "https://www.youtube.com/embed/vKQi3bBA1y8",
    cast: [
      { name: "Keanu Reeves", profile: "https://image.tmdb.org/t/p/w185/4D0PpNI0kmP58hgrwGC3IktOuF.jpg" },
      { name: "Laurence Fishburne", profile: "https://image.tmdb.org/t/p/w185/8suOhUmPbfLj7o9SRp5HtV0Y5.jpg" },
      { name: "Carrie-Anne Moss", profile: "https://image.tmdb.org/t/p/w185/8iATAc5z5f4ZU4qG7rjNhqQXUa.jpg" }
    ],
    reviews: [
      { user: "Ivy Johnson", rating: 9, comment: "Red pill or blue pill?" },
      { user: "Jack King", rating: 8, comment: "Groundbreaking effects." }
    ]
  },
  {
    id: 7,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 8.6,
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    cast: [
      { name: "Matthew McConaughey", profile: "https://image.tmdb.org/t/p/w185/izm9g4uqK9Lf8PghHX6Ho7OzZE.jpg" },
      { name: "Anne Hathaway", profile: "https://image.tmdb.org/t/p/w185/jUMOKwSUBnTcMEhgNqQjC1Gr3d.jpg" },
      { name: "Jessica Chastain", profile: "https://image.tmdb.org/t/p/w185/nkFrkn5NZVGWb4b2X0yIcXezhyt.jpg" }
    ],
    reviews: [
      { user: "Luna Martinez", rating: 9, comment: "Mind-bending and emotional." },
      { user: "Mason Taylor", rating: 8, comment: "Hans Zimmer's score is incredible." }
    ]
  },
  {
    id: 8,
    title: "Blade Runner 2049",
    year: 2017,
    genre: "Sci-Fi",
    rating: 8.0,
    poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYyMJLoGSyQ1rJj4uK.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/ilRyazdMJwN05exqhwK4tMKBYZs.jpg",
    description: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard.",
    trailer: "https://www.youtube.com/embed/gCcx85zbxz4",
    cast: [
      { name: "Ryan Gosling", profile: "https://image.tmdb.org/t/p/w185/lyUyVARQKhGxaxy0FbPJCBR1rBg.jpg" },
      { name: "Harrison Ford", profile: "https://image.tmdb.org/t/p/w185/7T7HSGPvNFKRGwBJvzsPFZJGWR.jpg" },
      { name: "Ana de Armas", profile: "https://image.tmdb.org/t/p/w185/14uxt0jH9nS1XQd6C4xAQ3k9y2D.jpg" }
    ],
    reviews: [
      { user: "Nova Rivera", rating: 8, comment: "Visually stunning sequel." },
      { user: "Owen Parker", rating: 7, comment: "Thought-provoking but slow." }
    ]
  },
  {
    id: 9,
    title: "Arrival",
    year: 2016,
    genre: "Sci-Fi",
    rating: 7.9,
    poster: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/yIZ1xendyqKvY3FGeeUYUd5X9Mm.jpg",
    description: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft land around the world.",
    trailer: "https://www.youtube.com/embed/tFMo3UJ4B4g",
    cast: [
      { name: "Amy Adams", profile: "https://image.tmdb.org/t/p/w185/wuviwSbR9Y2QL7LN5tJEHqv1t0.jpg" },
      { name: "Jeremy Renner", profile: "https://image.tmdb.org/t/p/w185/yB84D1mG3m2HqeYWVJqd5I3x1.jpg" },
      { name: "Forest Whitaker", profile: "https://image.tmdb.org/t/p/w185/4O9NUPGVA68qHwkFfiwZmdXgFg.jpg" }
    ],
    reviews: [
      { user: "Piper Scott", rating: 8, comment: "Intelligent and moving." },
      { user: "Quinn Mitchell", rating: 7, comment: "Amy Adams is phenomenal." }
    ]
  },
  {
    id: 10,
    title: "Gravity",
    year: 2013,
    genre: "Sci-Fi",
    rating: 7.7,
    poster: "https://image.tmdb.org/t/p/w500/uPxtxhB8jLJ6Xf4FWjYeNkBUhjY.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/9X1uIztIgbWxO1GpydtJ2h3GLWu.jpg",
    description: "Two astronauts work together to survive after an accident leaves them stranded in space.",
    trailer: "https://www.youtube.com/embed/OiTiKOy59o4",
    cast: [
      { name: "Sandra Bullock", profile: "https://image.tmdb.org/t/p/w185/u2eTtjJnlEcN7s6wMg0vKCdL7s.jpg" },
      { name: "George Clooney", profile: "https://image.tmdb.org/t/p/w185/4xFuHjVFtUvb6XpXqUkJyS5XaOW.jpg" }
    ],
    reviews: [
      { user: "Riley Adams", rating: 8, comment: "Heart-pounding tension." },
      { user: "Sage Bennett", rating: 7, comment: "Oscar-worthy performance." }
    ]
  },
  {
    id: 11,
    title: "The Martian",
    year: 2015,
    genre: "Sci-Fi",
    rating: 8.0,
    poster: "https://image.tmdb.org/t/p/w500/5BHuvQ6p9xcqR8XtyrAzVzY8Jmc.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/aL53oMdZKZRJY8XxbUQXMn8GBk.jpg",
    description: "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.",
    trailer: "https://www.youtube.com/embed/ej3ioOneTy8",
    cast: [
      { name: "Matt Damon", profile: "https://image.tmdb.org/t/p/w185/elSlNgV8xVifsbHpFsqrPGxJToZ.jpg" },
      { name: "Jessica Chastain", profile: "https://image.tmdb.org/t/p/w185/nkFrkn5NZVGWb4b2X0yIcXezhyt.jpg" },
      { name: "Kristen Wiig", profile: "https://image.tmdb.org/t/p/w185/7jfnwaBU9a9FZu5gs6N7v5s8B8.jpg" }
    ],
    reviews: [
      { user: "Tate Collins", rating: 8, comment: "Science and survival." },
      { user: "Uma Davis", rating: 7, comment: "Matt Damon shines." }
    ]
  },
  {
    id: 12,
    title: "Mad Max: Fury Road",
    year: 2015,
    genre: "Action",
    rating: 8.1,
    poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/tbhdm8UJAb4ViCTsulYFL3lxMCd.jpg",
    description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners.",
    trailer: "https://www.youtube.com/embed/hEJnMQG9ev8",
    cast: [
      { name: "Tom Hardy", profile: "https://image.tmdb.org/t/p/w185/yVGF9FvDxTDPhGimTbZNfghpllW.jpg" },
      { name: "Charlize Theron", profile: "https://image.tmdb.org/t/p/w185/1HloWLLhL2BfD3Z2NmWl1D2GbI.jpg" },
      { name: "Nicholas Hoult", profile: "https://image.tmdb.org/t/p/w185/3OQgWMVLKjLphBhZLIWQ1f8PDtj.jpg" }
    ],
    reviews: [
      { user: "Violet Edwards", rating: 9, comment: "Non-stop action!" },
      { user: "Wyatt Foster", rating: 8, comment: "Stunning visuals." }
    ]
  },
  {
    id: 13,
    title: "John Wick",
    year: 2014,
    genre: "Action",
    rating: 7.4,
    poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/umCBMhMbwFxL33iPWgZEWKTU1Zn.jpg",
    description: "An ex-hit-man comes out of retirement to track down the gangsters that took everything from him.",
    trailer: "https://www.youtube.com/embed/C0BMx-qxsP4",
    cast: [
      { name: "Keanu Reeves", profile: "https://image.tmdb.org/t/p/w185/4D0PpNI0kmP58hgrwGC3IktOuF.jpg" },
      { name: "Michael Nyqvist", profile: "https://image.tmdb.org/t/p/w185/8z7i7z9z9z9z9z9z9z9z9z9z9z9.jpg" },
      { name: "Alfie Allen", profile: "https://image.tmdb.org/t/p/w185/8z7i7z9z9z9z9z9z9z9z9z9z9z9.jpg" }
    ],
    reviews: [
      { user: "Xander Garcia", rating: 8, comment: "Keanu is back!" },
      { user: "Yara Hernandez", rating: 7, comment: "Intense fight scenes." }
    ]
  },
  {
    id: 14,
    title: "Avengers: Endgame",
    year: 2019,
    genre: "Action",
    rating: 8.4,
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    description: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more.",
    trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
    cast: [
      { name: "Robert Downey Jr.", profile: "https://image.tmdb.org/t/p/w185/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg" },
      { name: "Chris Evans", profile: "https://image.tmdb.org/t/p/w185/3bOGNsJLxpcRyR5w2DmDCP6j3mV.jpg" },
      { name: "Mark Ruffalo", profile: "https://image.tmdb.org/t/p/w185/z3dvKqMNDQWk3QLxzumloQVR0pv.jpg" }
    ],
    reviews: [
      { user: "Zoe Ingram", rating: 9, comment: "Emotional conclusion." },
      { user: "Aaron Jenkins", rating: 8, comment: "Epic superhero finale." }
    ]
  },
  {
    id: 15,
    title: "Die Hard",
    year: 1988,
    genre: "Action",
    rating: 8.2,
    poster: "https://image.tmdb.org/t/p/w500/yFihWxQcmqcaBR31QM6Y8FXVwVj.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
    description: "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.",
    trailer: "https://www.youtube.com/embed/jaJuwKCmJbY",
    cast: [
      { name: "Bruce Willis", profile: "https://image.tmdb.org/t/p/w185/2Q3LwLnCzEjU3s6QmA9AdI7BJr.jpg" },
      { name: "Alan Rickman", profile: "https://image.tmdb.org/t/p/w185/1KvPubh0OLxkjZpGH5FnTZC5Kr.jpg" },
      { name: "Bonnie Bedelia", profile: "https://image.tmdb.org/t/p/w185/8z7i7z9z9z9z9z9z9z9z9z9z9z9.jpg" }
    ],
    reviews: [
      { user: "Bella King", rating: 9, comment: "Yippee-ki-yay!" },
      { user: "Caleb Lewis", rating: 8, comment: "Action classic." }
    ]
  },
  {
    id: 16,
    title: "Gladiator",
    year: 2000,
    genre: "Action",
    rating: 8.5,
    poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/2Xe9lISpwXKhvKiHttbFfVRERQX.jpg",
    description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    trailer: "https://www.youtube.com/embed/owK1qxDselE",
    cast: [
      { name: "Russell Crowe", profile: "https://image.tmdb.org/t/p/w185/8iATAc5z5f4ZU4qG7rjNhqQXUa.jpg" },
      { name: "Joaquin Phoenix", profile: "https://image.tmdb.org/t/p/w185/nXMztH3KVLYFtqhVKJiWbWhzrEv.jpg" },
      { name: "Connie Nielsen", profile: "https://image.tmdb.org/t/p/w185/8z7i7z9z9z9z9z9z9z9z9z9z9z9.jpg" }
    ],
    reviews: [
      { user: "Daisy Moore", rating: 9, comment: "Russell Crowe is magnificent." },
      { user: "Ethan Nelson", rating: 8, comment: "Epic historical drama." }
    ]
  },
  {
    id: 17,
    title: "The Godfather",
    year: 1972,
    genre: "Crime",
    rating: 9.2,
    poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    trailer: "https://www.youtube.com/embed/sY1S34973zA",
    cast: [
      { name: "Marlon Brando", profile: "https://image.tmdb.org/t/p/w185/fuTEPMagBhRNUF9qD3qpq0NLxJx.jpg" },
      { name: "Al Pacino", profile: "https://image.tmdb.org/t/p/w185/2dGBmzZqs7VW3cHqRz3yeUdEK0D.jpg" },
      { name: "James Caan", profile: "https://image.tmdb.org/t/p/w185/8z7i7z9z9z9z9z9z9z9z9z9z9z9.jpg" }
    ],
    reviews: [
      { user: "Fiona Ortiz", rating: 10, comment: "Masterpiece of cinema." },
      { user: "Gavin Perez", rating: 9, comment: "Al Pacino's best role." }
    ]
  },
  {
    id: 18,
    title: "Goodfellas",
    year: 1990,
    genre: "Crime",
    rating: 8.7,
    poster: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/sw7mordbZxgITU877yTpZCud90M.jpg",
    description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners.",
    trailer: "https://www.youtube.com/embed/2ilzidi_J8Q",
    cast: [
      { name: "Robert De Niro", profile: "https://image.tmdb.org/t/p/w185/cT8htcckIuyI1Lqwt1CvD02ynTh.jpg" },
      { name: "Ray Liotta", profile: "https://image.tmdb.org/t/p/w185/8z7i7z9z9z9z9z9z9z9z9z9z9z9.jpg" },
      { name: "Joe Pesci", profile: "https://image.tmdb.org/t/p/w185/8z7i7z9z9z9z9z9z9z9z9z9z9z9.jpg" }
    ],
    reviews: [
      { user: "Harper Quinn", rating: 9, comment: "Scorsese at his best." },
      { user: "Isaac Ramirez", rating: 8, comment: "Gritty and authentic." }
    ]
  },
  {
    id: 19,
    title: "The Silence of the Lambs",
    year: 1991,
    genre: "Crime",
    rating: 8.6,
    poster: "https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/mfwq2nMBtWsrrNB8mqf9lsiNKHr.jpg",
    description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
    trailer: "https://www.youtube.com/embed/W6Mm8Sbe__o",
    cast: [
      { name: "Jodie Foster", profile: "https://image.tmdb.org/t/p/w185/4gjN7rjTOJPJCe0JvD0YOZ7vNf.jpg" },
      { name: "Anthony Hopkins", profile: "https://image.tmdb.org/t/p/w185/9r9f6RbfiT5E0K0hoP5vSqfJ2Vr.jpg" },
      { name: "Scott Glenn", profile: "https://image.tmdb.org/t/p/w185/8z7i7z9z9z9z9z9z9z9z9z9z9z9.jpg" }
    ],
    reviews: [
      { user: "Julia Sanders", rating: 9, comment: "Chilling and brilliant." },
      { user: "Kai Thompson", rating: 8, comment: "Anthony Hopkins is terrifying." }
    ]
  },
  {
    id: 20,
    title: "Se7en",
    year: 1995,
    genre: "Crime",
    rating: 8.6,
    poster: "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/bSqt9rhDZx1Q7UZ86dBPKdTuDD5.jpg",
    description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    trailer: "https://www.youtube.com/embed/znmZoVkCjpI",
    cast: [
      { name: "Brad Pitt", profile: "https://image.tmdb.org/t/p/w185/cckcYc2v0yh1tc9QjRelptcOBko.jpg" },
      { name: "Morgan Freeman", profile: "https://image.tmdb.org/t/p/w185/jPsLqiYGSofU4s6BjrxnefMfGB.jpg" },
      { name: "Gwyneth Paltrow", profile: "https://image.tmdb.org/t/p/w185/e5J9Bs9HMo7hSsKZoXH5e3RP33.jpg" }
    ],
    reviews: [
      { user: "Luna Turner", rating: 9, comment: "Dark and twisted." },
      { user: "Miles Underwood", rating: 8, comment: "Brad Pitt and Morgan Freeman." }
    ]
  },
  {
    id: 21,
    title: "Fight Club",
    year: 1999,
    genre: "Crime",
    rating: 8.8,
    poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
    description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    trailer: "https://www.youtube.com/embed/qtRKdVHc-cE",
    cast: [
      { name: "Brad Pitt", profile: "https://image.tmdb.org/t/p/w185/cckcYc2v0yh1tc9QjRelptcOBko.jpg" },
      { name: "Edward Norton", profile: "https://image.tmdb.org/t/p/w185/5XBzD5WuTyVQZeS4VI25z2moMeY.jpg" },
      { name: "Helena Bonham Carter", profile: "https://image.tmdb.org/t/p/w185/8z7i7z9z9z9z9z9z9z9z9z9z9z9.jpg" }
    ],
    reviews: [
      { user: "Nora Vaughn", rating: 9, comment: "The first rule of Fight Club..." },
      { user: "Oliver Wallace", rating: 8, comment: "Mind-bending twist." }
    ]
  },
  {
    id: 22,
    title: "Titanic",
    year: 1997,
    genre: "Drama",
    rating: 7.9,
    poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    trailer: "https://www.youtube.com/embed/kVrqfYjkTdQ",
    cast: [
      { name: "Leonardo DiCaprio", profile: "https://image.tmdb.org/t/p/w185/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg" },
      { name: "Kate Winslet", profile: "https://image.tmdb.org/t/p/w185/e3tdop3rjDHmZDYKTmzcj7E4d.jpg" },
      { name: "Billy Zane", profile: "https://image.tmdb.org/t/p/w185/8z7i7z9z9z9z9z9z9z9z9z9z9z9.jpg" }
    ],
    reviews: [
      { user: "Peyton White", rating: 8, comment: "A timeless romance." },
      { user: "Quinn Xavier", rating: 7, comment: "Epic disaster film." }
    ]
  },
  {
    id: 23,
    title: "The Green Mile",
    year: 1999,
    genre: "Drama",
    rating: 8.6,
    poster: "https://image.tmdb.org/t/p/w500/o0lO84GI7qrG6XFvtsPOWJ4jvvW.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
    description: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    trailer: "https://www.youtube.com/embed/Ki4haFrqSrw",
    cast: [
      { name: "Tom Hanks", profile: "https://image.tmdb.org/t/p/w185/xndWFsBlClOJYTdZvCudkaS1KdR.jpg" },
      { name: "Michael Clarke Duncan", profile: "https://image.tmdb.org/t/p/w185/8z7i7z9z9z9z9z9z9z9z9z9z9z9.jpg" },
      { name: "David Morse", profile: "https://image.tmdb.org/t/p/w185/8z7i7z9z9z9z9z9z9z9z9z9z9z9.jpg" }
    ],
    reviews: [
      { user: "Ruby Young", rating: 9, comment: "Heartbreaking and powerful." },
      { user: "Samuel Zane", rating: 8, comment: "Tom Hanks delivers." }
    ]
  },
  {
    id: 24,
    title: "Schindler's List",
    year: 1993,
    genre: "Drama",
    rating: 9.0,
    poster: "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/cT8htcckIuyI1Lqwt1Cv8XXpqAq.jpg",
    description: "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.",
    trailer: "https://www.youtube.com/embed/gG22XNhtnoY",
    cast: [
      { name: "Liam Neeson", profile: "https://image.tmdb.org/t/p/w185/1nKwObRp3o1jyXZLtW7IDS7j2Ix.jpg" },
      { name: "Ralph Fiennes", profile: "https://image.tmdb.org/t/p/w185/tSr1MJ0b9W3MaGJCv9rY6Sbmm.jpg" },
      { name: "Ben Kingsley", profile: "https://image.tmdb.org/t/p/w185/8z7i7z9z9z9z9z9z9z9z9z9z9z9.jpg" }
    ],
    reviews: [
      { user: "Tessa Brooks", rating: 10, comment: "Essential viewing." },
      { user: "Ulysses Carter", rating: 9, comment: "Powerful and moving." }
    ]
  },
  {
    id: 25,
    title: "The King's Speech",
    year: 2010,
    genre: "Drama",
    rating: 8.0,
    poster: "https://image.tmdb.org/t/p/w500/6X2Y66h8Sx6IGv7QvNzlWdJTc8.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/qxeqKcVBWnQx8hylPmNQtmBhueO.jpg",
    description: "The story of King George VI, his unexpected ascension to the throne and the speech therapist who helped the unsure monarch become worthy of it.",
    trailer: "https://www.youtube.com/embed/EcxBrTvLbBM",
    cast: [
      { name: "Colin Firth", profile: "https://image.tmdb.org/t/p/w185/8z7i7z9z9z9z9z9z9z9z9z9z9z9.jpg" },
      { name: "Geoffrey Rush", profile: "https://image.tmdb.org/t/p/w185/8z7i7z9z9z9z9z9z9z9z9z9z9z9.jpg" },
      { name: "Helena Bonham Carter", profile: "https://image.tmdb.org/t/p/w185/8z7i7z9z9z9z9z9z9z9z9z9z9z9.jpg" }
    ],
    reviews: [
      { user: "Victoria Davis", rating: 8, comment: "Colin Firth is outstanding." },
      { user: "William Evans", rating: 7, comment: "Inspiring true story." }
    ]
  },
  {
    id: 26,
    title: "Argo",
    year: 2012,
    genre: "Drama",
    rating: 7.7,
    poster: "https://image.tmdb.org/t/p/w500/8jI4ykkIVD6W6kOQrZ2GHKtSFq.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/8z7i7z9z9z9z9z9z9z9z9z9z9z9.jpg",
    description: "Acting under the cover of a Hollywood producer scouting a location for a science fiction film, a CIA agent launches a dangerous operation to rescue six Americans in Tehran during the U.S. Hostage Crisis in Iran in 1980.",
    trailer: "https://www.youtube.com/embed/JW3WuGX2RpA",
    cast: [
      { name: "Ben Affleck", profile: "https://image.tmdb.org/t/p/w185/u8CqoPz4XdQmHj2spoib2tapsWV.jpg" },
      { name: "Bryan Cranston", profile: "https://image.tmdb.org/t/p/w185/8z7i7z9z9z9z9z9z9z9z9z9z9z9.jpg" },
      { name: "Alan Arkin", profile: "https://image.tmdb.org/t/p/w185/8z7i7z9z9z9z9z9z9z9z9z9z9z9.jpg" }
    ],
    reviews: [
      { user: "Xena Foster", rating: 8, comment: "Based on a true story." },
      { user: "Yusuf Garcia", rating: 7, comment: "Ben Affleck directs well." }
    ]
  }
];

// Make a copy of initial movies that can be modified
let movies = [...initialMovies];

// Load reviews from localStorage
function loadReviewsFromStorage() {
  const storedReviews = localStorage.getItem('movieReviews');
  if (storedReviews) {
    const reviewsData = JSON.parse(storedReviews);
    movies.forEach(movie => {
      if (reviewsData[movie.id]) {
        movie.reviews = reviewsData[movie.id];
      }
    });
  }
}

// Save reviews to localStorage
function saveReviewsToStorage() {
  const reviewsData = {};
  movies.forEach(movie => {
    reviewsData[movie.id] = movie.reviews;
  });
  localStorage.setItem('movieReviews', JSON.stringify(reviewsData));
}

// Load reviews on page load
loadReviewsFromStorage();

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize features based on current page
  const currentPage = window.location.pathname.split('/').pop();

  if (currentPage === 'index.html' || currentPage === '') {
    loadFeaturedMovies();
    loadLatestReviews();
  } else if (currentPage === 'movies.html') {
    loadAllMovies();
    setupSearchFilter();
  } else if (currentPage === 'movie-detail.html') {
    loadMovieDetail();
    setupTrailerModal();
  } else if (currentPage === 'reviews.html') {
    setupReviewForm();
  } else if (currentPage === 'contact.html') {
    setupContactForm();
  }

  // Initialize star ratings
  initializeStarRatings();
});

// Load featured movies on home page
function loadFeaturedMovies() {
  const featuredContainer = document.getElementById('featured-movies');
  if (!featuredContainer) return;

  const featuredMovies = movies.slice(0, 3);
  featuredContainer.innerHTML = featuredMovies.map(movie => `
    <div class="col-md-4 mb-4">
      <div class="movie-card card h-100">
        <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
          <p class="card-text">${movie.year} • ${movie.genre}</p>
          <div class="rating">
            ${generateStars(movie.rating / 2)} <span>${movie.rating}</span>
          </div>
          <a href="movie-detail.html?id=${movie.id}" class="btn btn-primary mt-3">View Details</a>
        </div>
      </div>
    </div>
  `).join('');
}

// Load latest reviews on home page
function loadLatestReviews() {
  const reviewsContainer = document.getElementById('latest-reviews');
  if (!reviewsContainer) return;

  const latestReviews = [];
  movies.forEach(movie => {
    movie.reviews.forEach(review => {
      latestReviews.push({ ...review, movieTitle: movie.title, movieId: movie.id });
    });
  });

  latestReviews.sort(() => Math.random() - 0.5); // Shuffle for variety
  const recentReviews = latestReviews.slice(0, 3);

  reviewsContainer.innerHTML = recentReviews.map(review => `
    <div class="col-md-4 mb-4">
      <div class="card movie-card">
        <div class="card-body">
          <h6 class="card-title">${review.movieTitle}</h6>
          <div class="rating mb-2">
            ${generateStars(review.rating)} <small>by ${review.user}</small>
          </div>
          <p class="card-text">"${review.comment}"</p>
          <a href="movie-detail.html?id=${review.movieId}" class="btn btn-outline-primary btn-sm">Read More</a>
        </div>
      </div>
    </div>
  `).join('');
}

// Load all movies on movies page
function loadAllMovies() {
  const moviesContainer = document.getElementById('movies-container');
  if (!moviesContainer) return;

  moviesContainer.innerHTML = movies.map(movie => `
    <div class="col-lg-3 col-md-4 col-sm-6 mb-4 movie-item" data-genre="${movie.genre.toLowerCase()}" data-title="${movie.title.toLowerCase()}">
      <div class="movie-card card h-100">
        <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
          <p class="card-text">${movie.year} • ${movie.genre}</p>
          <div class="rating">
            ${generateStars(movie.rating / 2)} <span>${movie.rating}</span>
          </div>
          <a href="movie-detail.html?id=${movie.id}" class="btn btn-primary mt-3">View Details</a>
        </div>
      </div>
    </div>
  `).join('');
}

// Setup search and filter on movies page
function setupSearchFilter() {
  const searchInput = document.getElementById('search-input');
  const genreFilter = document.getElementById('genre-filter');

  if (!searchInput || !genreFilter) return;

  function filterMovies() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedGenre = genreFilter.value.toLowerCase();

    const movieItems = document.querySelectorAll('.movie-item');

    movieItems.forEach(item => {
      const title = item.dataset.title;
      const genre = item.dataset.genre;
      const matchesSearch = title.includes(searchTerm);
      const matchesGenre = selectedGenre === '' || genre === selectedGenre;

      if (matchesSearch && matchesGenre) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  searchInput.addEventListener('input', filterMovies);
  genreFilter.addEventListener('change', filterMovies);
}

// Load movie detail
function loadMovieDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = parseInt(urlParams.get('id'));

  if (!movieId) return;

  const movie = movies.find(m => m.id === movieId);
  if (!movie) return;

  document.getElementById('movie-title').textContent = movie.title;
  document.getElementById('movie-year').textContent = movie.year;
  document.getElementById('movie-genre').textContent = movie.genre;
  document.getElementById('movie-rating').innerHTML = `${generateStars(movie.rating / 2)} <span>${movie.rating}</span>`;
  document.getElementById('movie-description').textContent = movie.description;
  document.getElementById('movie-poster').src = movie.poster;
  document.getElementById('movie-backdrop').style.backgroundImage = `url(${movie.backdrop})`;

  // Set movie stats
  document.getElementById('movie-year-stat').textContent = movie.year;
  document.getElementById('movie-genre-stat').textContent = movie.genre;
  document.getElementById('movie-rating-stat').textContent = movie.rating;

  // Load cast
  const castContainer = document.getElementById('movie-cast');
  castContainer.innerHTML = movie.cast.map(actor => `
    <div class="col-md-3 mb-4">
      <div class="card movie-card">
        <img src="${actor.profile}" class="card-img-top" alt="${actor.name}">
        <div class="card-body text-center">
          <h6 class="card-title">${actor.name}</h6>
        </div>
      </div>
    </div>
  `).join('');

  // Load reviews
  const reviewsContainer = document.getElementById('movie-reviews');
  reviewsContainer.innerHTML = movie.reviews.map(review => `
    <div class="review-item mb-3 p-3 border-bottom">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <strong>${review.user}</strong>
        <div class="rating">${generateStars(review.rating)}</div>
      </div>
      <p class="mb-0">${review.comment}</p>
    </div>
  `).join('');
}

// Setup trailer modal
function setupTrailerModal() {
  const trailerBtn = document.getElementById('trailer-btn');
  const trailerModal = document.getElementById('trailer-modal');

  if (!trailerBtn || !trailerModal) return;

  trailerBtn.addEventListener('click', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = parseInt(urlParams.get('id'));
    const movie = movies.find(m => m.id === movieId);

    if (movie) {
      const modal = new bootstrap.Modal(trailerModal);
      document.getElementById('trailer-iframe').src = movie.trailer;
      modal.show();
    }
  });

  trailerModal.addEventListener('hidden.bs.modal', function() {
    document.getElementById('trailer-iframe').src = '';
  });
}

// Setup review form
function setupReviewForm() {
  const reviewForm = document.getElementById('review-form');
  if (!reviewForm) return;

  // Populate movie select
  const movieSelect = document.getElementById('movie-select');
  movieSelect.innerHTML = movies.map(movie => `<option value="${movie.title}">${movie.title}</option>`).join('');

  reviewForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('reviewer-name').value.trim();
    const email = document.getElementById('reviewer-email').value.trim();
    const movie = document.getElementById('movie-select').value;
    const rating = document.querySelector('input[name="rating"]:checked');
    const comment = document.getElementById('review-comment').value.trim();

    // Validation
    let isValid = true;
    let errorMessage = '';

    if (!name) {
      isValid = false;
      errorMessage += 'Name is required.\n';
    }

    if (!email || !isValidEmail(email)) {
      isValid = false;
      errorMessage += 'Valid email is required.\n';
    }

    if (!movie) {
      isValid = false;
      errorMessage += 'Please select a movie.\n';
    }

    const ratingValue = document.getElementById('rating-input').value;
    if (!ratingValue) {
      isValid = false;
      errorMessage += 'Please select a rating.\n';
    }

    if (!comment) {
      isValid = false;
      errorMessage += 'Comment is required.\n';
    }

    if (!isValid) {
      alert(errorMessage);
      return;
    }

    // Success
    alert('Review submitted successfully!');

    // Add review to movie data
    const selectedMovie = movies.find(m => m.title === movie);
    if (selectedMovie) {
      selectedMovie.reviews.push({
        user: name,
        rating: parseInt(ratingValue),
        comment: comment
      });

      // Save to localStorage
      saveReviewsToStorage();
    }

    // Redirect to movie detail page
    window.location.href = `movie-detail.html?id=${selectedMovie.id}`;
  });
}

// Setup contact form
function setupContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    // Validation
    let isValid = true;
    let errorMessage = '';

    if (!name) {
      isValid = false;
      errorMessage += 'Name is required.\n';
    }

    if (!email || !isValidEmail(email)) {
      isValid = false;
      errorMessage += 'Valid email is required.\n';
    }

    if (!subject) {
      isValid = false;
      errorMessage += 'Subject is required.\n';
    }

    if (!message) {
      isValid = false;
      errorMessage += 'Message is required.\n';
    }

    if (!isValid) {
      alert(errorMessage);
      return;
    }

    // Success
    alert('Message sent successfully!');
    contactForm.reset();
  });
}

// Initialize star ratings
function initializeStarRatings() {
  const starContainers = document.querySelectorAll('.star-rating');

  starContainers.forEach(container => {
    const stars = container.querySelectorAll('.star');

    stars.forEach((star, index) => {
      star.addEventListener('click', function() {
        // Remove active class from all stars
        stars.forEach(s => s.classList.remove('active'));

        // Add active class to clicked star and previous stars
        for (let i = 0; i <= index; i++) {
          stars[i].classList.add('active');
        }

        // Set hidden input value
        const hiddenInput = container.querySelector('input[type="hidden"]');
        if (hiddenInput) {
          hiddenInput.value = index + 1;
        }
      });
    });
  });
}

// Generate star HTML
function generateStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += '<i class="fas fa-star"></i>';
    } else if (i - 0.5 <= rating) {
      stars += '<i class="fas fa-star-half-alt"></i>';
    } else {
      stars += '<i class="far fa-star"></i>';
    }
  }
  return stars;
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
