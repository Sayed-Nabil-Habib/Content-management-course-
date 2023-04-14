const searchInput = document.getElementById("search-input");
const movieContainer = document.getElementById("movie-container");

searchInput.addEventListener("input", () => {
  const searchQuery = searchInput.value.toLowerCase();
  const movies = movieContainer.getElementsByClassName("movie");

  for (let i = 0; i < movies.length; i++) {
    const movieTitle = movies[i].getElementsByTagName("p")[0].textContent.toLowerCase();
    if (movieTitle.includes(searchQuery)) {
      movies[i].style.display = "block";
    } else {
      movies[i].style.display = "none";
    }
  }
});

// onclick show the search bar//
