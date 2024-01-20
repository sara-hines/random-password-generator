/* In the below, we are using the querySelector() method to select the first child element that matches the specified selector. The selector is the id "generate," which applies to the button element with the text "Generate Password." So, we're creating a variable named "generateBtn" and giving it a value of the button element. */
var generateBtn = document.querySelector("#generate");

   // function randomSelectPasswordElement will randomly select only 1 element out of our total array of options the user wanted to include. Let's do a for loop to repeat randomSelectPasswordElement for however many i that the length is the user chose.
// function randomSelectPasswordElement() {
//     var randomElement = passwordChoices[(Math.floor(Math.random() * passwordChoices.length))];
//     console.log(randomElement);
//     return randomElement;
// }

var allLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomLowerCase = allLowerCase[(Math.floor(Math.random() * allLowerCase.length))];
console.log(randomLowerCase);

var allUpperCase = [];
for (var i = 0; i < allLowerCase.length; i++) {
    var capitalizeArray = allLowerCase[i].toUpperCase();
    allUpperCase.push(capitalizeArray);
};
var randomUpperCase = allUpperCase[(Math.floor(Math.random() * allUpperCase.length))];
console.log(randomUpperCase);


var allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var randomNumber = allNumbers[(Math.floor(Math.random() * allNumbers.length))];
console.log(randomNumber);


var allSpecialChars = ["!", '"', "#", "$", "%", "&", "'", "","", "*", "+", "\,", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", '\u005C', "]", "^", "_", "`", "{", "|", "}", "~"]; 

// we used to have "(",")" for the comma, but it did not print to the box when I had a password which included it. It showed up in the console log as part of the password created, but did not print to the box.
//    /,/ worked to remove all the commmas, but when I use that as the comma character to go in the password, it keeps the slashes around it rather than just being a comma.

var randomSpecialChar = allSpecialChars[(Math.floor(Math.random() * allSpecialChars.length))];
console.log(randomSpecialChar);

// Write password to the #password input

function generatePassword(){
    console.log("generate Password function started");
    //prompt for set of criteria

    //first ask the length -> prompt()
    var length = prompt("What is the length of the password");
    console.log(length);
    length = parseInt(length);
    console.log(length);

    if (length < 8 || length > 128) {
      alert("Please provide a length of at least 8 characters and no more than 128 characters.");
      return;
    } 

    if (Number.isNaN(length)) {
      alert("Please provide a valid password length, as a number.")
      return;
    }
    // if user input ==> a number is greather than 8 and less than 128
    //ask if wants upperCase -> yes or no
    // check if a number is between two other numbers javascript
    console.log("it's in range");
    var passwordChoices = [];

    // ask if they want to include lowerCase -> yes or no
    var userWantsLowerCase = confirm("Do you want to include lowerCase letters?");
    if (userWantsLowerCase === true) {
        console.log("Add lowerCase to passwordChoices");
        passwordChoices = passwordChoices.concat(allLowerCase);
        passwordChoices.push(randomLowerCase);
        console.log(passwordChoices);
        // console.log(passwordChoices);
    }

    var userWantsUpperCase = confirm("Do you want to include upperCase letters?");
    if (userWantsUpperCase === true) {
        console.log("Add upperCase to passwordChoices");
        passwordChoices = passwordChoices.concat(allUpperCase);
        passwordChoices.push(randomUpperCase);
        console.log(passwordChoices);
    }

    var userWantsNumbers = confirm("Do you want to include numbers?");
    if (userWantsNumbers === true) {
        console.log("Add numbers to passwordChoices");
        passwordChoices = passwordChoices.concat(allNumbers);
        passwordChoices.push(randomNumber);
        console.log(passwordChoices);
        // console.log(passwordChoices);
    }

    var userWantsSpecialChars = confirm("Do you want to include special characters?");
    if (userWantsSpecialChars === true) {
        console.log("Add special characters to passwordChoices");
        passwordChoices = passwordChoices.concat(allSpecialChars);
        passwordChoices.push(randomSpecialChar);
        console.log(passwordChoices);
    }

    if (!userWantsUpperCase && !userWantsLowerCase && !userWantsNumbers && !userWantsSpecialChars) {
        alert("Please select at least one type of character to use.");
        return;
    }

    console.log(passwordChoices);

    var passwordInProgress = [];
    
    // The below gets the element at a random index of our full array of the user's eligible characters and adds it to the passwordInProgress array. It repeats this until we have the number of characters the user wanted.
    function createPassword() {
        for (var i = 0; i < length; i++) {
            passwordInProgress = passwordInProgress.concat(passwordChoices[(Math.floor(Math.random() * passwordChoices.length))])
        }
        console.log(passwordInProgress);
        var stringPassword = passwordInProgress.toString();
        stringPassword = stringPassword.replaceAll(/,/g, "");
        console.log(stringPassword);

        function writePassword() {
            var passwordText = document.querySelector("#password");
            passwordText.value = stringPassword;
        }
    
        writePassword();
    }

    createPassword();
}
    


/* The below creates a function called "writePassword." This function houses a variable named "password" with a value of generatePassword WHAT IS generatePassword, which is a function call. We are also creating a variable named passwordText which has a value of the textarea element (this is the box which currently has the text "Your Secure Password"). We are also setting the value of the passwordText variable to the function named "password." */


// Add event listener to generate button
/* In the below, we're adding an event listener to the variable "generateBtn" (which has a value of the button element itself). The event listener will execute the function "writePassword" when the user clicks on the "Generate Password" button. */

generateBtn.addEventListener("click", generatePassword);

// delete the below stuff we did with the tutor at some point. 
// function getValue() {
//     console.log("getValue function running");
//     var value = "Sara";
//     return [value, true, 1, {}, []]
// }
// // string, number, array, object
// // "" `` '', 4 5, [1, true, "hi"], {key: value, key2: value2}
// var receivedValue = getValue();
// console.log('receivedValue: ', receivedValue)

// var firstElement = receivedValue[0];
// console.log(firstElement.toUpperCase())}}