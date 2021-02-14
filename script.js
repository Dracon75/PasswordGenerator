// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// finds character ASCII to Decimal values
const charArray = [];
const upperCaseChars = masterArray(65, 90);
const lowerCaseChars = masterArray(97, 122);
const numericChars = masterArray(48, 57);

const specialChars = masterArray(33, 47)
//.concat adds additional arrays 
 .concat(masterArray(58, 64))
 .concat(masterArray(91, 96))
 .concat(masterArray(123, 126));


 //creates an array of numbers ranging from smallest to largest based on what is called in
 function masterArray(small, large){
  const array = [];
  for (let i = small; i <= large; i++) {
    array.push(i);
  }
  return array;
}


// generates random password based on user preferences
function generatePassword(){

  //shows prompts
  var charLength = prompt("How many characters would you like your password to be? Your password must be between 8 and 128 characters"); 
  
  if(charLength >= 8 && charLength <= 128){
    var lowerCase = confirm("Do you want lower case letters?"); 
  }
  else{
    return;
  }

  if(lowerCase == true || lowerCase == false){
    var upperCase = confirm("Do you want upper case letters?");
  }

  if(upperCase == true || upperCase == false){
    var numeric = confirm("Do you want numbers?");
  }

  if(numeric == true || numeric == false){
    var specialChar = confirm("Do you want special characters?");
  }

  //remembers user preferences and smashes them together into a final array
  var acceptedChars = charArray;
  if (lowerCase) acceptedChars = acceptedChars.concat(lowerCaseChars);
  if (upperCase) acceptedChars = acceptedChars.concat(upperCaseChars);
  if (numeric) acceptedChars = acceptedChars.concat(numericChars);
  if (specialChar) acceptedChars = acceptedChars.concat(specialChars);
  if (!lowerCase && !upperCase && !numeric && !specialChar){
    return;
  }
  const passwordChars = [];

  // continues generating characters that meet the users preferences one at a time until reaches character length
  for (let i = 0; i < charLength; i++) {
    const finalPassword =
      acceptedChars[Math.floor(Math.random() * acceptedChars.length)];
    passwordChars.push(String.fromCharCode(finalPassword));
  }

  //joins chosen characters together into a string
  return passwordChars.join('');

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
