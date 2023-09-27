// Assignment Code
function generatePassword(){
  var digits =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var upperC =  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerC =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialC = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':',];
  var availableC

  howManyC = prompt("How many characters do you want in your password? Choose between 8-128 characters.");
  if (howManyC < 8 || howManyC > 128) {
    return "Please enter a number between 8-128.";
  } else if (isNaN(howManyC)) {
    howManyC = prompt("Please enter a valid number.");
  }

  withLowerC = confirm("Do you want lowercase characters?");

  withUpperC = confirm("Do you want uppercase characters?");

  withdigits = confirm("Do you want to use numbers?");

  withSpecialC = confirm("Do you want special characters?");

  if (withLowerC === false && withUpperC === false &&  withdigits === false && withSpecialC === false) {
    return "Please select at least one character type.";
  };









}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
