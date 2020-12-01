// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create Arrays to set different parameters
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "#", "$", "%", "&", "(", ")", "[", "]", "{", "}", "*", "+", "-", "_", ",", ".", "/", ":", ";", "^", "<", ">", "=", "?", "@", "~"];

// Define Variables for functions
var confirmLength = "";
var confirmLower;
var confirmUpper;
var confirmNum;
var confirmSpec;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}