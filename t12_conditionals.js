// T12 - Conditionals
// Ahmad D. - HVHS

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const FORM = document.getElementById("userForm");
const AGE_FIELD = document.getElementById("ageField");
const MONEY_FIELD = document.getElementById("moneyField");

FORM.addEventListener("submit", function(event) {
  event.preventDefault();

  // get values (strings)
  let ageString = AGE_FIELD.value;
  let moneyString = MONEY_FIELD.value;

  // convert to numbers
  let age = Number(ageString);
  let money = Number(moneyString);

  // chocolate bar price
  const PRICE = 4;

  // build output
  let message = `<p>A chocolate bar costs $${PRICE}</p>`;

  if (money >= PRICE) {
    message += `<p>You CAN afford a chocolate bar</p>`;
  } else {
    message += `<p>Sorry you CAN'T afford a chocolate bar</p>`;
  }

  OUTPUT.innerHTML = message;
});
