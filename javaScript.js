const apiBase = "http://localhost:10004/";
const woocommercebase = "wp-json/wc/store/";
const productBase = "products/";
const pageBase = "wp-json/wp/v2/pages";

// const exampleurl = "http://localhost:10004/wp-json/wc/store/products/";
const fullPageUrl = apiBase + pageBase;
const apiUrl = apiBase + woocommercebase + productBase;


const resultContainer = document.querySelector(".movie-container");

const searchInput = document.getElementById("search-input");
const movieContainer = document.getElementById("movie-container");

const filterElement = document.querySelector(".filter select");





async function getProducts(filterOption){
  
  const response = await fetch(apiUrl);
  const data = await response.json();

  resultContainer.innerHTML = "";
  

  for(let i = 0; i < data.length; i++){
    
  if(filterOption === "All-Movies"){
    resultContainer.innerHTML +=
    `<div class="result">
    <img class="movie-images" src="${data[i].images[0].src}" alt="${data[i].name}">

        <h1 class="movie-name"> ${data[i].name} </h1>
        <h1 class="movie-price"> ${data[i].prices.price} </h1>
        
    </div>`;
  }else if(filterOption === "Horror" && data[i].id === 28){
    resultContainer.innerHTML +=

  `<div class="result">
    <img class="movie-images" src="${data[i].images[0].src}" alt="${data[i].name}">

        <h1 class="movie-name"> ${data[i].name} </h1>
        <h1 class="movie-price"> ${data[i].prices.price} </h1>
        
    </div>`;
  }
 
  }

  
  }
   
 

getProducts();

filterElement.addEventListener("change", function(){
  const selectedOption = this.value;
  getProducts(selectedOption);
})





// searchInput.addEventListener("input", () => {
//   const searchQuery = searchInput.value.toLowerCase();
//   const movies = movieContainer.getElementsByClassName("movie");

//   for (let i = 0; i < movies.length; i++) {
//     const movieTitle = movies[i].getElementsByTagName("p")[0].textContent.toLowerCase();
//     if (movieTitle.includes(searchQuery)) {
//       movies[i].style.display = "block";
//     } else {
//       movies[i].style.display = "none";
//     }
//   }
// });

// // onclick show the search bar//
