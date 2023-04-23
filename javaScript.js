const apiBase = "http://localhost:10004/";
const woocommercebase = "wp-json/wc/store/";
const productBase = "products/";
const pageBase = "wp-json/wp/v2/pages";
const featured = "?featured=true";

const featuredUrl = "http://localhost:10004/wp-json/wc/store/products/?featured=true";
const fullPageUrl = apiBase + pageBase;
const apiUrl = apiBase + woocommercebase + productBase;
const apiUrlFeatured = apiUrl + featured;

const resultContainer = document.querySelector(".movie-container");

const searchInput = document.getElementById("search-input");
const movieContainer = document.getElementById("movie-container");

const filterElement = document.querySelector("#filter select");





async function getProducts(filterOption){
  
  let apiUrlToUse = apiUrl;
  
  if(filterOption === "Featured"){
    apiUrlToUse = featuredUrl;
  }
  const response = await fetch(apiUrlToUse);
  const data = await response.json();

  resultContainer.innerHTML = "";
  
  
  for(let i = 0; i < data.length; i++){
    
  if(filterOption === "All-Movies"){

    resultContainer.innerHTML +=

    `<a href="./details.html?id=${data[i].id}" class="result">
    <img class="movie-images" src="${data[i].images[0].src}" alt="${data[i].name}">

        <h1 class="movie-name"> ${data[i].name} </h1>
        <h1 class="movie-price"> ${data[i].prices.price} </h1>
        
    </a>`;
  }else if(filterOption === "Horror" && data[i].id === 28){
    resultContainer.innerHTML +=

  `<div class="result">
    <img class="movie-images" src="${data[i].images[0].src}" alt="${data[i].name}">

        <h1 class="movie-name"> ${data[i].name} </h1>
        <h1 class="movie-price"> ${data[i].prices.price} </h1>
        
    </div>`;
  }else if(filterOption === "Featured"){
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
  console.log(selectedOption);
})



