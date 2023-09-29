// Assignment Code
var generateBtn = document.querySelector("#generate");

//list arrays
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let specialChar = ["!", "#", "$", "^", "&", "(", ")", "/", "?", "."];
let randarr = [];
let finalPW = [];

// Write password to the #password input
function generatePassword() {
  //add prompt for password length 8-128 character
  let length = prompt("How long would you like your password to be (8-128)?");
  //if nothing typed, start over
  if (isNaN(length)) {
    alert("Answer required");
    return generatePassword();
  } else if (length <= 7 || length > 128) {
    alert("Please enter a number between 8 - 128");
    return generatePassword();
  } else {
    console.log(length);
  }

  if (confirm("Would you like to include lowercase letters?")) {
    randarr = randarr.concat(lowercase);
    console.log(randarr);
  }

  if (confirm("Would you like to use uppercase letters?")) {
    randarr = randarr.concat(uppercase);
    console.log(randarr);
  }
  if (confirm("Would you like to use numbers?")) {
    randarr = randarr.concat(numbers);
    console.log(randarr);
  }
  if (confirm("Would you like to use spcecial characters?")) {
    randarr = randarr.concat(specialChar);
    console.log(randarr);
  }

  //input must include at lease one character type (if nothing, invalid)
  if ((randarr = "")) {
    alert("Password cannot be generated; no characters selected");
    generatePassword();
  } else {
    for (x = 0; x > length; x++){
    let randPick = [Math.floor(Math.random() * randarr.length)];
    let finalPW = finalPW.concat(randPick);
    console.log(password, PW.join(''));
  }
  }
  return;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);
