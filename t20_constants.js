/* 
  T20 - CONSTANTS & CONVENTIONS
  Author: Ahmad
  Date: 2026
  Description: Demonstrating constants, variables, and naming conventions.
*/

console.log("T20 loaded: constants and conventions");

// ------------------------------
// CONSTANTS (UPPERCASE)
// ------------------------------
const MIN_AGE = 13;
const MAX_AGE = 99;
const DRIVING_AGE = 16;

// ------------------------------
// FORM ELEMENTS (camelCase)
// ------------------------------
const form = document.getElementById("welcomeForm");
const nameField = document.getElementById("input_name");
const ageField = document.getElementById("ageField");
const output = document.getElementById("spaceForJavaScriptOutput");
const submitBtn = document.getElementById("submitBtn");

// ------------------------------
// EVENT LISTENER
// ------------------------------
submitBtn.addEventListener("click", function () {

  console.log("Submit button clicked");

  const userName = nameField.value;
  const userAge = Number(ageField.value);

if (!isNaN(userName)) {
    output.innerHTML = "Your name cannot be a number.<br>";
    return;
  } if (form.checkValidity() === false) {
    output.innerHTML = "Please fill out all fields correctly.<br>";
    return;
  }if (userAge < MIN_AGE) {
    output.innerHTML = "You are under the minimum allowed age.<br>";
    return;
  }if (userAge > MAX_AGE) {
    output.innerHTML = "You are above the maximum allowed age.<br>";
    return;
  } if (userAge >= DRIVING_AGE) {
    output.innerHTML = `Hi ${userName}, you are old enough to drive.<br>`;
  } else {
    output.innerHTML = `Hi ${userName}, you are NOT old enough to drive.<br>`;
  }

});
