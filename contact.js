const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");


const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const subjectError = document.querySelector("#subjectError");
const successMessage = document.querySelector("#successMessage");


function validateForm(event){
  event.preventDefault();

  if(checkLength(name.value, 0) === true){
    nameError.style.display = "none";
  }else{
    nameError.style.display = "block";  
  }

  if(validateEmail(email.value) === true){
    emailError.style.display = "none";
  }else{
    emailError.style.display = "block";  
  }

  if(checkLength(subject.value, 10) === true){
    subjectError.style.display = "none";
  }else{
    subjectError.style.display = "block";
  }



  if(name.value && email.value && validateEmail(email.value) && subject.value && address.value ){
    successMessage.style.display = "block";
    form.reset(); 
  }
  
}
form.addEventListener("submit", validateForm);

function checkLength(value, len){
  if(value.trim().length > len){
    return true;
  } else{
    return false;
  }
}

function validateEmail(email){
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}


