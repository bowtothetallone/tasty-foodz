/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("foodz");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

var foodzForm = document.getElementById('foodz-form')
var foodzFormLoading = document.getElementById('foodz-form-loading')
var foodzFormResponse = document.getElementById('foodz-form-response')
var foodzFormResponseMessage = document.getElementById('foodz-form-response-message')
var foodzFormReset = document.getElementById('foodz-form-reset')

var submitUrl = foodzForm.action

var submitHandler = function (submitEvent) {
  submitEvent.preventDefault()
  foodzForm.style.display = 'none'
  foodzFormLoading.style.display = 'block'
  var submitValue = {
    name: foodzForm.name.value,
    email: foodzForm.email.value,
    message: foodzForm.message.value
  }
  var responsePromise = fetch(
    submitUrl,
    {
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submitValue),
      method: 'POST'
    }
  )
  console.log('The form was submitted', submitValue, responsePromise)
  var jsonHandler = function (data) {
    console.log('We have the JSON data from the response', data)
    foodzFormLoading.style.display = 'none'
    foodzFormResponse.style.display = 'block'
    foodzFormResponseMessage.innerHTML = data.message
  }
  var responseHandler = function(response) {
    console.log('We got the response', response)
    var jsonPromise = response.json()
    jsonPromise.then(jsonHandler)
  }
  responsePromise.then(responseHandler)
}
var resetForm = function() {
  foodzFormResponse.style.display = 'none'
  foodzForm.style.display = 'block'
  foodzForm.name.value = ''
  foodzForm.email.value = ''
  foodzForm.message.value = ''
}

foodzForm.addEventListener('submit', submitHandler)
foodzFormReset.addEventListener('click', resetForm)
