const detailContainer = document.querySelector(".container_details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const apiUrl = `http://www.sayed.codes/wp-json/wc/store/products/${id}`;

async function fetchProductDetails() {
  try {
    const response = await fetch(apiUrl);
    const product = await response.json();

    detailContainer.innerHTML = ""; 

    const productDiv = document.createElement("div");
    productDiv.classList.add("result", "details-card");

    const img = document.createElement("img");
    img.classList.add("movie-images");
    img.src = product.images[0].src;
    img.alt = product.name;
    productDiv.appendChild(img);

    const nameHeading = document.createElement("h1");
    nameHeading.classList.add("results");
    nameHeading.textContent = product.name;
    productDiv.appendChild(nameHeading);

    const descriptionPara = document.createElement("p");
    descriptionPara.textContent = product.description.name;
    productDiv.appendChild(descriptionPara);

    detailContainer.appendChild(productDiv);
  } catch (error) {
    detailContainer.innerHTML = `Something went wrong while fetching data. Please try again later.`;
  }
}

fetchProductDetails();
