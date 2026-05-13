// T11 - Data Types
// Ahmad D. - HVHS

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const FORM = document.getElementById("userForm");
const AGE_FIELD = document.getElementById("ageField");
const MONEY_FIELD = document.getElementById("moneyField");

FORM.addEventListener("submit", function(event) {
  event.preventDefault(); // stop page refresh

  // get values from form (strings)
  let ageString = AGE_FIELD.value;
  let moneyString = MONEY_FIELD.value;

  // convert to numbers
  let ageNumber = Number(ageString);
  let moneyNumber = Number(moneyString);

  // update HTML output
  OUTPUT.innerHTML = `
    <p>Your age: ${ageNumber}</p>
    <p>Your pocket money: $${moneyNumber}</p>

    <p>Age type: ${typeof(ageNumber)}</p>
    <p>Money type: ${typeof(moneyNumber)}</p>
  `;
});
