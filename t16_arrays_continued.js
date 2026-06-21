// T16 - Arrays Continued
// Ahmad Dagamseh

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const ITEM_FIELD = document.getElementById("itemField");
const ADD_BUTTON = document.getElementById("addButton");
const SHOW_BUTTON = document.getElementById("showButton");

let shoppingList = [];

ADD_BUTTON.addEventListener("click", function () {
  let item = ITEM_FIELD.value;

  if (item === "") {
    OUTPUT.innerHTML = "Please enter an item first.";
    return;
  }

  shoppingList.push(item);
  OUTPUT.innerHTML = "You have added <b>" + item + "</b> to the list.";
  ITEM_FIELD.value = ""; 
});

SHOW_BUTTON.addEventListener("click", function () {
  OUTPUT.innerHTML = "These are the items on your shopping list:<br><br>";

  for (let i = 0; i < shoppingList.length; i++) {
    OUTPUT.innerHTML += shoppingList[i] + "<br>";
  }
});
 