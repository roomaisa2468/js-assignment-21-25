//////ques :1
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "! Welcome to the program.");

/////ques 2
let favoritePhoneModel = prompt("What is your favorite mobile phone model?");
let lengthOfInput = favoritePhoneModel.length;
document.write("<h2>Length of your favorite phone model input:</h2>");
document.write("<p>" + favoritePhoneModel + " has a length of " + lengthOfInput)

/////////////ques : 3
let word1 = "Pakistani";
let index = word1.indexOf('n');
document.write("<h2>Index of 'n' in the word 'Pakistani':</h2>");
document.write("<p>The index of 'n' in 'Pakistani' is: " + index + "</p>");

//////////////ques : 4
let phrase = "Hello World";
let lastIndex = phrase.lastIndexOf('l');
document.write("<h2>Last Index of 'l' in the phrase 'Hello World':</h2>");
document.write("<p>The last index of 'l' in 'Hello World' is: " + lastIndex + "</p>");

///////////ques :5
let word = "Pakistani";
let character = word.charAt(3);
document.write("<h2>Character at 3rd Index in 'Pakistani':</h2>");
document.write("<p>The character at the 3rd index in 'Pakistani' is: " + character + "</p>");

///////// ques : 6 

let firstName1 = prompt("Enter your first name:");
let lastName1 = prompt("Enter your last name:");
let fullName1 = firstName1.concat(" ", lastName1);
alert("Hello, " + fullName1 + "! Welcome to the program.");


///////// ques : 7 
let word2 = "Hyderabad";
let newWord = word2.replace("Hyder", "Islam");
document.write("<h2>Original Word:</h2>");
document.write("<p>" + word2 + "</p>");
document.write("<h2>After Replacement:</h2>");
document.write("<p>" + newWord + "</p>");

///////// ques : 8

let message = "Ali and Sami are best friends. They play cricket and football together.";
let newMessage = message.replace(/and/g, "&");
document.write("<h2>Original Message:</h2>");
document.write("<p>" + message + "</p>");
document.write("<h2>After Replacement:</h2>");
document.write("<p>" + newMessage + "</p>");

///////// ques : 9 
// Define the string
let str = "472";
let num = parseInt(str); 
document.write("<h2>Original String:</h2>");
document.write("<p>Value: " + str + "<br>Type: " + typeof str + "</p>");
document.write("<h2>Converted Number:</h2>");
document.write("<p>Value: " + num + "<br>Type: " + typeof num + "</p>");

///////// ques : 10 
let userInput1 = prompt("Enter some text:");
let uppercaseText = userInput1.toUpperCase();
document.write("<h2>Original Input:</h2>");
document.write("<p>" + userInput1 + "</p>");
document.write("<h2>Converted to Uppercase:</h2>");
document.write("<p>" + uppercaseText + "</p>");

///////// ques : 11 
let userInput = prompt("Enter a sentence:");
function toTitleCase(sentence) {
    return sentence.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}
let titleCaseText = toTitleCase(userInput);
document.write("<h2>Original Input:</h2>");
document.write("<p>" + userInput + "</p>");
document.write("<h2>Converted to Title Case:</h2>");
document.write("<p>" + titleCaseText + "</p>");

///////// ques : 12 
var num1 = 35.36;
var numString = num1.toString().replace(".", "");
document.write("<h2>Original Number:</h2>");
document.write("<p>" + num1 + "</p>");
document.write("<h2>Converted String without Dot:</h2>");
document.write("<p>" + numString + "</p>");

///////// ques : 13 
function hasSpecialSymbols(username) {
    for (let i = 0; i < username.length; i++) {
        let charCode = username.charCodeAt(i);
        if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
            return true;
        }
    }
    return false;
}
let username = prompt("Enter a username:");
while (hasSpecialSymbols(username)) {
    username = prompt("Enter a valid username without special symbols like @, ., ,, !");
}
document.write("<h2>Valid Username:</h2>");
document.write("<p>" + username + "</p>");


/////// ques : 14 

function searchItem(itemList, searchTerm) {
    const searchTermLower = searchTerm.toLowerCase();
    const itemListLower = itemList.map(item => item.toLowerCase());
    const index = itemListLower.indexOf(searchTermLower);
    if (index !== -1) {
        document.write(`${searchTerm} is available at index ${index} in our bakery.`);
    } else {
        document.write(`We are sorry, ${searchTerm} is not available in our bakery.`);
    }
}
const A = ["cake", "apple pie", "cookie", "chips", "patties"];
const searchTerm = prompt("Enter the item to search:");
searchItem(A, searchTerm);

/////// ques : 15
function isValidPassword(password) {
    if (password.length < 6) {
        return false;
    }
    if (!isNaN(password[0])) {
        return false;
    }

    let hasAlphabet = false;
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {
        const char = password[i];

        if (isNaN(char)) {
            hasAlphabet = true;
        } else {
            hasNumber = true;
        }
    }

    return hasAlphabet && hasNumber;
}

function promptPassword() {
    let password;
    let valid = false;

    while (!valid) {
        password = prompt("Enter your password:");
        if (password === null) {
            console.log("Password input cancelled.");
            return;
        }
        valid = isValidPassword(password);
        if (!valid) {
            alert("Invalid password. Please enter a valid password.");
        }
    }

    alert("Password is valid.");
}
promptPassword();

///////// ques : 16
var userInput3 = prompt("Enter a string:");
var formattedResult = "";
for (var i = 0; i < userInput3.length; i++) {
    formattedResult += userInput3[i] + "\n";
}
alert(formattedResult);


///////// ques : 17
// Prompt the user to enter a string
var userInput2 = prompt("Enter a string:");

// Check if the user input is not empty
if (userInput2) {
    // Get the last character of the string
    var lastCharacter = userInput2[userInput2.length - 1];
    
    // Display the last character in an alert box
    alert("The last character is: " + lastCharacter);
} else {
    // Inform the user if the input is empty
    alert("You didn't enter anything.");
}


///////// ques : 18

var sentence = "The quick brown fox jumps over the lazy dog";
var lowerCaseSentence = sentence.toLowerCase();
var words = lowerCaseSentence.split(" ");
var count = 0;

for (var i = 0; i < words.length; i++) {
   
    if (words[i] === "the") {
        count++;
    }
}
alert("The word 'the' occurs " + count + " times in the given string.");


