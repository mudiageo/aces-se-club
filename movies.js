let movies = [
   {
    title: "Bee Movie",
    author: "Jerry Seinfield",
    description: "A young bee experiences the world woth a human girl.",
    yearOfRelease: 2007
  },
  {
    title: "Mighty Young Joe",
    author: "Marshall Hallie",
    description: "Story of Joe thr gorilla",
    yearOfRelease: 1998
  },
  {
    title: "Home",
    author: "Tom J. Astle",
    description: "Oh, a lovable misfit alien, runs away from his planet and takes shelter on Earth, where he befriends Tip, an adventurous young girl who is on a quest to find her displaced mother Lucy.",
    yearOfRelease: 2015
  },
  {
    title: "Spiderman: No Way Home",
    author: "Chris McKenie",
    description: "Peter Parker discovers the multiverse.",
    yearOfRelease: 2021
  },
  {
    title: "Coach Carter",
    author: "John Gatins",
    description: "Basketball coach Carter, helps his team to befome true winners.",
    yearOfRelease: 2005
  }
];


console.log("Available Movies:");
movies.forEach(movie => console.log(movie.title))

// Remove the 3rd movie from the catalogue
delete movies[2];

console.log("Updated Movies:");
movies.forEach(movie => console.log(movie.title))
