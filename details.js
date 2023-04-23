const detailContainer = document.querySelector(".container_details");

const queryString = document.location.search;

const  params = new URLSearchParams(queryString);

const id = params.get("id");

const apiUrl = "http://localhost:10004/wp-json/wc/store/products/?search=" + id;
// console.log(id)


async function fetchProductDetails(){

  try{
    const response = await fetch(apiUrl);
    
    const details = await response.json();

    // console.log(fetchDetails);
    let products = details.resutls[0];

    detailContainer.innerHTML= ""; 

    detailContainer.innerHTML += 
     
    `<div class="result details-card">
      <img class="movie-images" src="${products.images[0].src}" alt="${products.name}">
      <h1 class= "results"> ${products.price}</h1>
      <h3 class= "results"> ${products.description}</h3>
   </div>`;
  }catch(error){
    detailContainer.innerHTML = `something bad happened while fetching data, please try again`
  }
}
fetchProductDetails();
