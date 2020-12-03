// Assignment Code for Generate Password button
var generateBtn = document.querySelector("#generate");

// Arrays to set different parameters
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var speChar = ["!", "#", "$", "%", "&", "(", ")", "[", "]", "{", "}", "*", "+", "-", "_", ",", ".", "/", ":", ";", "^", "<", ">", "=", "?", "@", "~"];

// Empty string variable to be filled based on user input
var confirmLength = "";
// Variables for password parameters
var confirmLower;
var confirmUpper;
var confirmNum;
var confirmSpec;

// Function to prompt user input
function generatePassword() {
  confirmLength = prompt("How many characters do you need in your password?");

    // Loop generatePassword function if user inputs less than 8 or greater than 128
    while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8 and 128 characters,\nplease try again!");
      confirmLength = (prompt("How many characters would you like your password to be? \nA password can only be generated with a minimum of 8 characters and a maximum of 128 characters."));
    }

    // Alert confirmation of password length
    alert("Your password will be " + confirmLength + " characters long.");

  // Confirm boxes for user to set parameters of password (confirmVariables)
  confirmLower = confirm("Click OK if you would like your password to include lowercase characters.");
  confirmUpper = confirm("Click OK if you would like your password to include uppercase characters.");
  confirmNum = confirm("Click OK if you would like your password to include numeric characters.");
  confirmSpec = confirm("Click OK if you would like your password to include special characters.");

    // Loop confirmVariables if answer is outside the parameters (all false)
    while(!confirmLower && !confirmUpper && !confirmNum && !confirmSpec) {
      alert("Please choose at least one password parameter!");
      confirmLower = confirm("Click OK if you would like your password to include lowercase characters.");
      confirmUpper = confirm("Click OK if you would like your password to include uppercase characters.");
      confirmNum = confirm("Click OK if you would like your password to include numeric characters.");
      confirmSpec = confirm("Click OK if you would like your password to include special characters.");  
    }

  // Assign actions based on user input password parameters ↓
  // Empty array to be defined by concatenating (merging) w/parameter arrays using if conditionals where any of above parameters = true
  var passChar = [];
      
    // If confirmVariables= true, then passChar concatenated with relative array value (ie. if confirmLower = true --> "__", "a", "b", "c" ...)
    if (confirmLower) {
      passChar = passChar.concat(alphaLower);
    }

    if (confirmUpper) {
      passChar = passChar.concat(alphaUpper);
    }
      
    if (confirmNum) {
      passChar = passChar.concat(numChar);
    }

    if (confirmSpec) {
      passChar = passChar.concat(speChar);
    }

    console.log(passChar);

  // Empty string to be filled based on 'for loop' selecting random characters from the array
  var randomPassword = "";
      
    //If i = less than the user input # from confirmLength prompt, add character until input # reached
    for (var i = 0; i < confirmLength; i++) {
      randomPassword = randomPassword + passChar[Math.floor(Math.random() * passChar.length)];
      console.log(randomPassword);
    }
    return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Event listener to execute writePassword function when generate button clicked
generateBtn.addEventListener("click", writePassword);


// Assignment Code for Copy to Clipboard button
var copy = document.querySelector("#copy");

// Event listener to execute copyPassword fuction when copy button clicked
copy.addEventListener("click", function () {
    copyPassword();
});

// Function to copy generated password when clicked
function copyPassword() {
    // Select generated password text
    document.getElementById("password").select();
    // Copy text inside password field
    document.execCommand("Copy");
    alert("Password has been copied to your clipboard!");
}