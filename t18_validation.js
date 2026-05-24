const FORM = document.getElementById("welcomeForm");
const NAME_FIELD = document.getElementById("input_name");
const AGE_FIELD = document.getElementById("ageField");
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

document.getElementById("submitBtn").addEventListener("click", function () {

  // Check if name is a number
  if (!isNaN(NAME_FIELD.value)) {
    OUTPUT.innerHTML = "Your name cannot be a number.<br>";
    return;
  }

  // Check HTML validity
  if (FORM.checkValidity() === false) {
    OUTPUT.innerHTML = "Please fill out all fields correctly.<br>";
    return;
  }

  // Extra age checks
  if (AGE_FIELD.value < 13) {
    OUTPUT.innerHTML = "You're underage.<br>";
  } else if (AGE_FIELD.value > 99) {
    OUTPUT.innerHTML = "You're too old.<br>";
  } else {
    OUTPUT.innerHTML = "Form submitted successfully!<br>";
  }
});
