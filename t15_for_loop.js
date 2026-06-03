// T15 - For Loop
// Ahmad Dagamseh

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const FORM = document.getElementById("userForm");

FORM.addEventListener("submit", function(event) {
  event.preventDefault(); 

  let verses = prompt("How many verses do you want to sing?");

  OUTPUT.innerHTML = "";

  for (let i = verses; i > 0; i--) {

    if (i === 1) {
      OUTPUT.innerHTML += 
        "1 bottle of milk on the wall, 1 bottle of milk.<br>" +
        "Take one down, pass it around, no more bottles of milk on the wall!<br><br>";
    } else {
      OUTPUT.innerHTML += 
        i + " bottles of milk on the wall, " + i + " bottles of milk.<br>" +
        "Take one down, pass it around, " + (i - 1) + " bottles of milk on the wall.<br><br>";
    }
  }
});
