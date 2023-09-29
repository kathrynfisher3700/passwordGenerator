// Assignment Code
var generateBtn = document.querySelector("#generate");
//:.:.:.:.:.::.:.:.:.:.::.:.:.:.:.::.:.:.:.:.::.:.:.:.:.::.:.:.:.:.::.:.:.:.:.://
//List arrays (characters for password)
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let lowercase = ["a", "b","c","d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
let uppercase = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
let specialChar = ["!", "#", "$", "^", "&", "(", ")", "/", "?", "."];
//New arrays for selected and randomized characters
let finalPW = [];
let randarr = [];


//:.:.:.:.:.::.:.:.:.:.::.:.:.:.:.::.:.:.:.:.::.:.:.:.:.::.:.:.:.:.::.:.:.:.:.://
// This function will prompt user to select characters included in password.

function generatePassword() {
  let length = prompt("How long would you like your password to be (8-128)?");
//:.:.:.:.:.:if user did not answer, they start over:.:.:.:.:.://
  if (isNaN(length)) {
    alert("Answer required");
    return generatePassword();
//:.:.:.:.:.:if user did not stay within parameters, they start over:.:.:.:.:.://    
  } else if (length <= 7 || length > 128) {
    alert("Please enter a number between 8 - 128");
    return generatePassword();
  } else {
    console.log(length);
  }
//:.:.:.:.:.:ask user for lowercase letters:.:.:.:.:.:// 
  if (confirm("Would you like to include lowercase letters?")) {
    randarr = randarr.concat(lowercase);
    console.log(randarr);
  }
//:.:.:.:.:.:ask user for uppercase letters:.:.:.:.:.:// 
  if (confirm("Would you like to use uppercase letters?")) {
    randarr = randarr.concat(uppercase);
    console.log(randarr);
  }
//:.:.:.:.:.:ask user for numbers:.:.:.:.:.:// 
  if (confirm("Would you like to use numbers?")) {
    randarr = randarr.concat(numbers);
    console.log(randarr);
  }
//:.:.:.:.:.:ask user for special characters:.:.:.:.:.:// 
  if (confirm("Would you like to use spcecial characters?")) {
    randarr = randarr.concat(specialChar);
    console.log(randarr);
  }

//:.:.:.:.:.:input must include at lease one character type (if nothing, invalid):.:.:.:.:.:// 
  if ((randarr.length === 0)) {
    alert("Password cannot be generated; no characters selected");
    return generatePassword();
  } else {
    for (let x = 0; x < length; x++) {
      let randPick = randarr[Math.floor(Math.random() * randarr.length)];
      finalPW.push(randPick);
    }
    return finalPW.join("");
  }

}


//:.:.:.:.:.::.:.:.:.:.::.:.:.:.:.::.:.:.:.:.::.:.:.:.:.::.:.:.:.:.::.:.:.:.:.://
//pushes answer to display
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//:.:.:.:.:.::.:.:.:.:.::.:.:.:.:.::.:.:.:.:.::.:.:.:.:.::.:.:.:.:.::.:.:.:.:.://
//Button Event Listener
generateBtn.addEventListener("click", writePassword);
