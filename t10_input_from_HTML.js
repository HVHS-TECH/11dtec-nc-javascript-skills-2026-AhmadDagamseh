/* Paste/*********************************
  name of task: Task 10 - Input from HTML
*********************************/
console.log("t10_input_from_HTML.js");

/*********************************
  main code
*********************************/

function runTask10() {

  const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

  // get values from the form
  const NAME_FIELD = document.getElementById("nameField");
  const AGE_FIELD = document.getElementById("ageField");
  const MONEY_FIELD = document.getElementById("moneyField");
  const YEAR_FIELD = document.getElementById("yearField");

  let username = NAME_FIELD.value;
  let age = Number(AGE_FIELD.value);
  let money = Number(MONEY_FIELD.value);
  let year = Number(YEAR_FIELD.value);

  // calculations
  let birthYear = year - age;
  let oldAge = age + 10;
  let extraMoney = money + 3;

  // output to HTML
  OUTPUT.innerHTML = "<p>Hi " + username + " as of " + year + " you are " + age + " years old. You have " + money + " dollars.</p>";
  OUTPUT.innerHTML += "<p>You were born in " + birthYear + "</p>";
  OUTPUT.innerHTML += "<p>In ten years you will be " + oldAge + "</p>";
  OUTPUT.innerHTML += "<p>You have " + money + " dollars</p>";
  OUTPUT.innerHTML += "<p>You spend half your money, you now have " + money/2 + " dollars</p>";
  OUTPUT.innerHTML += "<p>You get 3 dollars, now you have " + extraMoney + " dollars</p>";
}
