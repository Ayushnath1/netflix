// Example movie posters
const posters = [
  "https://image.tmdb.org/t/p/original/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
  "https://image.tmdb.org/t/p/original/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
  "https://image.tmdb.org/t/p/original/someposter1.jpg",
  "https://image.tmdb.org/t/p/original/someposter2.jpg",
  "https://image.tmdb.org/t/p/original/someposter3.jpg",
  "https://image.tmdb.org/t/p/original/fsomeposter4.jpg",
  "https://image.tmdb.org/t/p/original/someposter5.jpg",
];

// Fill movie rows
function loadMovies(rowId) {
  const row = document.getElementById(rowId);
  posters.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.className = "movie";
    row.appendChild(img);
  });
}

loadMovies("row1");
loadMovies("row2");
loadMovies("row3");
