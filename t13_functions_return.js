// T13 - Functions with return values
// Ahmad D. - HVHS

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const FORM = document.getElementById("userForm");
const AGE_FIELD = document.getElementById("ageField");
const MONEY_FIELD = document.getElementById("moneyField");

// Function that RETURNS change
function calculateChange(_money, _price) {
  return _money - _price;
}

FORM.addEventListener("submit", function(event) {
  event.preventDefault();

  let age = Number(AGE_FIELD.value);
  let money = Number(MONEY_FIELD.value);

  const PRICE = 4;

  OUTPUT.innerHTML = `<p>A chocolate bar costs $${PRICE}</p>`;

  if (money >= PRICE) {
    let change = calculateChange(money, PRICE);
    OUTPUT.innerHTML += `<p>You CAN afford a chocolate bar</p>`;
    OUTPUT.innerHTML += `<p>You will get $${change} change</p>`;
  } else {
    OUTPUT.innerHTML += `<p>Sorry you CAN'T afford a chocolate bar</p>`;
  }
});
