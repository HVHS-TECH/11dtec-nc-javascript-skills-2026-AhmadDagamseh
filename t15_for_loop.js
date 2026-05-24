// T15 - For Loop
// Ahmad Dagamseh
// Learning how to repeat code using a for loop.

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const FORM = document.getElementById("userForm");

FORM.addEventListener("submit", function(event) {
  event.preventDefault(); // stop page refresh

  // Ask the user how many verses they want
  let verses = prompt("How many verses do you want to sing?");

  OUTPUT.innerHTML = ""; // clear previous output

  // Loop from the chosen number down to 1
  for (let i = verses; i > 0; i--) {

    if (i === 1) {
      // Special case for the last verse
      OUTPUT.innerHTML += 
        "1 bottle of milk on the wall, 1 bottle of milk.<br>" +
        "Take one down, pass it around, no more bottles of milk on the wall!<br><br>";
    } else {
      // Normal verses
      OUTPUT.innerHTML += 
        i + " bottles of milk on the wall, " + i + " bottles of milk.<br>" +
        "Take one down, pass it around, " + (i - 1) + " bottles of milk on the wall.<br><br>";
    }
  }
});
