// T14 - Arrays Part 1
// Ahmad Dagamseh
// Learning how to store multiple values in an array and display one based on user choice.

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

// 1. Create an array with 4 messages
let chocolateMessages = [
  "You loath chocolate",
  "Chocolate is meh",
  "Chocolate is pretty good",
  "Chocolate is the best thing EVER!!!!"
];

// 2. Ask the user for a number between 0 and 3
let choice = prompt("On a scale of 0–3, how much do you like chocolate?");

// 3. Display the matching message
OUTPUT.innerHTML = chocolateMessages[choice];
