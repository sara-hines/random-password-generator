/* In the below, we use the querySelector() method to select the button element with the text "Generate Password" and we store the reference to it in the variable generateBtn. */
var generateBtn = document.querySelector("#generate");


/* The below line adds an event listener to the variable generateBtn. The event listener will execute the generatePassword function when the user clicks on the "Generate Password" button. */
generateBtn.addEventListener("click", generatePassword);


/* The below creates an array containing all of the lowercase letters of the alphabet. Next, we use Math.random() to generate a floating point number of at least 0 and below 1, which we multiply by the length of the array storing all lowercase characters. It is guaranteed that the result of Math.random() * the length of the array will be within the length of the array, which is suitable for generating a random index. Math.floor() rounds down to the nearest whole number. By obtaining a random index of the array, we are able to generate a randomly selected lowercase character. We will repeat the same steps for each type of character the user can choose to use in their password. */
var allLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomLowerCase = allLowerCase[(Math.floor(Math.random() * allLowerCase.length))];


/* The below for loop works off of the previously created array of lowercase letters to create an array containing all of the uppercase letters of the alphabet. */
var allUpperCase = [];
for (var i = 0; i < allLowerCase.length; i++) {
    var capitalizeArray = allLowerCase[i].toUpperCase();
    allUpperCase.push(capitalizeArray);
};
var randomUpperCase = allUpperCase[(Math.floor(Math.random() * allUpperCase.length))];


var allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var randomNumber = allNumbers[(Math.floor(Math.random() * allNumbers.length))];


var allSpecialChars = ["!", '"', "#", "$", "%", "&", "'", "(",")", "*", "+", "\,", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", '\u005C', "]", "^", "_", "`", "{", "|", "}", "~"]; 
var randomSpecialChar = allSpecialChars[(Math.floor(Math.random() * allSpecialChars.length))];


/* The generatePassword() function prompts the user to choose which types of characters to include in their password. An empty array called passwordChoices is created, which will eventually contain all of the characters eligible to be chosen for the user's password. When the user confirms they would like to use a particular type of character, the array containing all characters of the type is added to the passwordChoices array. Additionally, for each character type, a random character of that type is generated (to be incorporated into the password later). */
function generatePassword() {


    /* Note that the user input for length is rejected if it is too short, too long, or of a data type other than a number. */
    var length = prompt("What length of password would you like to generate? Please provide a length of at least 8 and no more than 128 characters.");
    length = parseInt(length);


    if (length < 8 || length > 128) {
      alert("Please provide a length of at least 8 and no more than 128 characters. A length of 14 characters or more improves security.");
      return;
    } 


    if (Number.isNaN(length)) {
      alert("Please provide a valid password length, as a number.")
      return;
    }


    var passwordChoices = [];
    var guaranteedChars = [];


    var userWantsLowerCase = confirm("Do you want to include lowercase letters? Click 'OK' for yes, or 'Cancel' for no.");
    if (userWantsLowerCase) {
        passwordChoices = passwordChoices.concat(allLowerCase);
        guaranteedChars.push(randomLowerCase);
    }


    var userWantsUpperCase = confirm("Do you want to include uppercase letters? Click 'OK' for yes, or 'Cancel' for no.");
    if (userWantsUpperCase) {
        passwordChoices = passwordChoices.concat(allUpperCase);
        guaranteedChars.push(randomUpperCase);
    }


    var userWantsNumbers = confirm("Do you want to include numbers? Click 'OK' for yes, or 'Cancel' for no.");
    if (userWantsNumbers) {
        passwordChoices = passwordChoices.concat(allNumbers);
        guaranteedChars.push(randomNumber);
    }


    var userWantsSpecialChars = confirm("Do you want to include special characters? Click 'OK' for yes, or 'Cancel' for no.");
    if (userWantsSpecialChars) {
        passwordChoices = passwordChoices.concat(allSpecialChars);
        guaranteedChars.push(randomSpecialChar);
    }


    /* The below conditional ensures that the user must select at least one type of character for the password to be generated. */
    if (!userWantsUpperCase && !userWantsLowerCase && !userWantsNumbers && !userWantsSpecialChars) {
        alert("Please restart and select at least one type of character to use.");
        return;
    }

    var passwordInProgress = [];
    
    /* The below gets the element at a random index of our full array of the user's eligible characters and adds it to the passwordInProgress array. It repeats this until we have the number of characters the user wanted. */
    function createPassword() {
        for (var i = 0; i < length; i++) {
            passwordInProgress = passwordInProgress.concat(passwordChoices[(Math.floor(Math.random() * passwordChoices.length))])
        }


        /* The below for loop iterates from 0 through the length of the guaranteedChars array, and substitutes one of the characters in the passwordInProgress array with one of the characters in the guaranteedChars array until all of the guaranteed characters have been added. This allows us to keep the same length the user had wanted--while ensuring that each of the types of characters the user chose will appear in the final password. */
        for (var j = 0; j < guaranteedChars.length; j++) {
            passwordInProgress[j] = guaranteedChars[j];
        }


        /* passwordInProgress has all of the final characters at this point in the function, but is still an array. The below code converts the array to a string and removes the commas between characters. */
        console.log(passwordInProgress);
        var stringPassword = passwordInProgress.toString();
        stringPassword = stringPassword.replaceAll(/,/g, "");
        console.log(stringPassword);


        /* In the below code, we select the <textarea> element and assign its value to be the final password so that the password displays on the page. */
        function writePassword() {
            var passwordText = document.querySelector("#password");
            passwordText.value = stringPassword;
        }

        writePassword();
    }
    createPassword();
}
    

