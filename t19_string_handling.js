// T19 - String handling
// Ahmad Dagamseh

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

let nameInput = "  ahmad  ";
nameInput = nameInput.trim();

if (nameInput.length < 3) {
    OUTPUT.innerHTML = " Name must be at least three letters long.";
} else if (!nameInput.match(/^[A-Za-z]+$/)) {
    OUTPUT.innerHTML = " Name must contain only letters.";
} else {
    OUTPUT.innerHTML = "✅ Name accepted: " + nameInput;
}
