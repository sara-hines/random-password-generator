// Assignment Code

/* In the below, we are using the querySelector() method to select the first child element that matches the specified selector. The selector is the id "generate," which applies to the button element with the text "Generate Password." So, we're creating a variable named "generateBtn" and giving it a value of the button element. */
var generateBtn = document.querySelector("#generate");

var allLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var allUpperCase = [];
for (var i = 0; i < allLowerCase.length; i++) {
    var capitalizeArray = allLowerCase[i].toUpperCase();
    allUpperCase.push(capitalizeArray);
};
console.log(allUpperCase);

var allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var allSpecialChars = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", "\,", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", '\u005C', "]", "^", "_", "`", "{", "|", "}", "~"]; 
console.log(allSpecialChars);

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
        return "Incorrect length selection";

      } 
    // if user input ==> a number is greather than 8 and less than 128
    //ask if wants upperCase -> yes or no
    // check if a number is between two other numbers javascript
      console.log("it's in range");
      var passwordChoices = [];
      var userWantsUpperCase = confirm("Do you want to include upperCase letters?");
      if(userWantsUpperCase === true) {
        console.log("Add upperCase to passwordChoices");
        passwordChoices = passwordChoices.concat(allUpperCase);
        // console.log(passwordChoices);
      }
    //   do you want peperroni?
    //   if(they want pepperoni){

    //       toppings.push("peperroni")
    //   } 
    //   do you want peppers
    //   if()
    // ask if they want to include lowerCase -> yes or no
      var userWantsLowerCase = confirm("Do you want to include lowerCase letters?");
      if (userWantsLowerCase === true) {
        console.log("Add lowerCase to passwordChoices");
        passwordChoices = passwordChoices.concat(allLowerCase);
        // console.log(passwordChoices);
      }

      var userWantsNumbers = confirm("Do you want to include numbers?");
      if (userWantsNumbers === true) {
        console.log("Add numbers to passwordChoices");
        passwordChoices = passwordChoices.concat(allNumbers);
        // console.log(passwordChoices);
      }

      var userWantsSpecialChars = confirm("Do you want to include special characters?");
      if (userWantsSpecialChars === true) {
        console.log("Add special characters to passwordChoices");
        passwordChoices = passwordChoices.concat(allSpecialChars);
        // The below console.log gives the following in DevTools: [Array(26), Array(26), Array(10), Array(32)]. I can't tell if this is a problem or is just the shorthand for writing it. 
        console.log(passwordChoices);
        // console.log(passwordChoices[3]);
      }

      // function randomSelectPasswordElement will randomly select only 1 element out of our total array of options the user wanted to include. Let's do a for loop to repeat randomSelectPasswordElement for however many i that the length is the user chose.
      function randomSelectPasswordElement() {
        var randomElement = passwordChoices[(Math.floor(Math.random() * passwordChoices.length))];
        console.log(randomElement);
      }

      randomSelectPasswordElement();

      for (var i = 0; i < length; i++) {
        var passwordInProgress = randomElement
      }
}


/* The below creates a function called "writePassword." This function houses a variable named "password" with a value of generatePassword WHAT IS generatePassword?? IS IT A FUNCTION? I FEEL LIKE WE WOULD BE USING THE function KEYWORD IF IT WAS A FUNCTION. COME BACK AND DELETE THIS FROM THE COMMENT LATER. We are also creating a variable named passwordText which has a value of the textarea element (this is the box which currently has the text "Your Secure Password"). We are also setting the value of the passwordText variable to the function named "password." */
/* The below makes no sense to me because I think we're saying that the password will be whatever text the user enters in the box that says "Your Secure Password. But, that's not the acceptance criteria. The user doesn't get to just pick whatever they want--we're randomly generating a password for them. */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
/* In the below, we're adding an event listener to the variable "generateBtn" (which has a value of the button element itself). The event listener will execute the function "writePassword" when the user clicks on the "Generate Password" button. I WOULD LIKE TO BETTER UNDERSTAND WHY WE'RE SETTING THE EVENT LISTENER ON THE generateBtn FUNCTION RATHER THAN THE button ELEMENT ITSELF. */
generateBtn.addEventListener("click", writePassword);


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
// console.log(firstElement.toUpperCase())