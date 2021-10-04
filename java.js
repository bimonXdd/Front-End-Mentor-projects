var purpleButton = document.getElementById("purpleButton");
var greenButton = document.getElementById("green-button");

var errorFirstName = document.getElementById("ErrorFirstName");
var errorLastName = document.getElementById("ErrorLastName");
var errorEmail = document.getElementById("ErrorEmail");
var errorPassword = document.getElementById("ErrorPassword");

var firstNameInput = document.getElementById("FirstNameInput");
var lastNameInput = document.getElementById("LastNameInput");
var emailInput = document.getElementById("EmailInput");
var passwordInput = document.getElementById("PasswordInput");
var n =0;



//purpleButton
purpleButton.addEventListener("mouseover", function(){
  purpleButton.style.background = "rgb(127,120,174)";
});
purpleButton.addEventListener("mouseout",function(){
  purpleButton.style.background ="hsl(248, 32%, 49%)";
});

var fieldInputs = [firstNameInput, lastNameInput, emailInput, passwordInput];
var errorArray = [errorFirstName, errorLastName, errorEmail, errorPassword];

//green-button
greenButton.addEventListener("click", function(){

  if (fieldInputs[n].value =="") {
    errorArray[n].style.color = "red";
    fieldInputs[n].style.borderColor ="red";
    fieldInputs[n].style.backgroundImage = "url(images/icon-error.svg)";
  }
  else if(fieldInputs[n].value !="") {
    errorArray[n].style.color = "white";
    fieldInputs[n].style.borderColor ="";
    fieldInputs[n].style.backgroundImage = "";
  };
  if (fieldInputs[n+1].value =="") {
    errorArray[n+1].style.color = "red";
    fieldInputs[n+1].style.borderColor ="red";
    fieldInputs[n+1].style.backgroundImage = "url(images/icon-error.svg)";
  }
  else if(fieldInputs[n+1].value !="") {
    errorArray[n+1].style.color = "white";
    fieldInputs[n+1].style.borderColor ="";
    fieldInputs[n+1].style.backgroundImage = "";
  };
  if (fieldInputs[n+2].value =="") {
    errorArray[n+2].style.color = "red";
    fieldInputs[n+2].style.borderColor ="red";
    fieldInputs[n+2].style.backgroundImage = "url(images/icon-error.svg)";
    fieldInputs[n+2].value = "email@example/com";
    fieldInputs[n+2].style.color ="red";
  }
  else if(fieldInputs[n+2].value !="") {
    errorArray[n+2].style.color = "white";
    fieldInputs[n+2].style.borderColor ="";
    fieldInputs[n+2].style.backgroundImage = "";
    fieldInputs[n+2].style.color ="";
  };
  if (fieldInputs[n+2].value == "email@example/com") {
    errorArray[n+2].style.color = "red";
    fieldInputs[n+2].style.borderColor ="red";
    fieldInputs[n+2].style.backgroundImage = "url(images/icon-error.svg)";
    fieldInputs[n+2].style.color ="red";

  };

  if (fieldInputs[n+3].value =="") {
    errorArray[n+3].style.color = "red";
    fieldInputs[n+3].style.borderColor ="red";
    fieldInputs[n+3].style.backgroundImage = "url(images/icon-error.svg)";
  }
  else if(fieldInputs[n+3].value !="") {
    errorArray[n+3].style.color = "white";
    fieldInputs[n+3].style.borderColor ="";
    fieldInputs[n+3].style.backgroundImage = "";
  };


});



greenButton.addEventListener("mouseover", function(){
  greenButton.style.background = "rgb(114,205,165)";//light-green
});
greenButton.addEventListener("mouseout",function(){
  greenButton.style.background ="hsl(154, 59%, 51%)";
});
