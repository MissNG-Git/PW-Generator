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

// Insert function to prompt user input
function generatePassword () {
  var confirmLength = prompt("How many characters do you need in your password?");

    // Loop generatePassword function if user inputs less than 8 or greater and 128
    while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8 and 128 characters, please try again!");
      var confirmLength = (prompt("How many characters do you need in your password?"));
    }

    //Confirm user input with alert
    alert("Your password will be " + confirmLength + " characters long.");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}