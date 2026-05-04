/* Paste/*********************************
  name of task:
*********************************/
  console.log("T06 - Functions");

 //variables
 let username = "Ahmad";
 let age = "15";
 let money = "20";
 let year = "2026";
 let birthYear = "2010";
 let oldAge = "25";
 let extraMoney = "13"
 /*********************************
 
  main code

*********************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");


OUTPUT.innerHTML = "<p>Hi " + username + " as of " + year + " you are " + age + " years old. You have " + money + " dollars.</p>";
OUTPUT.innerHTML += "<p>You were born in " + birthYear + "</p>";
OUTPUT.innerHTML += "<p>In ten years you will be " + oldAge + "</p>";
OUTPUT.innerHTML += "<p>You have " + money + " dollars</p>";
OUTPUT.innerHTML += "<p>You spend half your money, you now have " + money/2 + " dollars</p>";
OUTPUT.innerHTML += "<p>You get 3 dollars, now you have " + extraMoney + " dollars</p>";

/*********************************
 
  functions

*********************************/
