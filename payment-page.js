const form = document.querySelector("#payment-form");
const cardNumber= document.querySelector("#card-number");
const nameOnCard= document.querySelector("#name-on-card");
const month= document.querySelector("#month");
const year= document.querySelector("#year");
const code= document.querySelector("#code");


// const form = document.querySelector("#payment-form");
const cardNumberError= document.querySelector("#cardError");
const nameError= document.querySelector("#nameError");
const monthError= document.querySelector("#monthError");
const yearError= document.querySelector("#yearError");
const codeError= document.querySelector("#codeError");
const successMessage = document.querySelector("#successMessage");

function validateForm(event){
  event.preventDefault();

  if(checkLength(cardNumber.value,10) === true){
    cardNumberError.style.display = "none";
  }else{
    cardNumberError.style.display = "block";
  }

  if(checkLength(month.value,0) === true){
    monthError.style.display = "none";
  }else{
    monthError.style.display = "block";
  }


  if(checkLength(year.value,3) === true){
    yearError.style.display = "none";
  }else{
    yearError.style.display = "block";
  }

  if(checkLength(code.value,2) === true){
    codeError.style.display = "none";
  }else{
    codeError.style.display = "block";
  }

  if(cardNumber.value && month.value && year.value && code.value){
    successMessage.style.display = "block";
  }

  
}

form.addEventListener("submit", validateForm);

function checkLength(value, len){
  if(value.trim().length > len){
    return true;
  }else{
    return false;
  }
}
validateForm();