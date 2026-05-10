<!DOCTYPE html>
<html>
  <head>
    <title>Form Input Example</title>
  </head>
  <body>
    <h2>Welcome to the page</h2>

    <form onsubmit="return false;">
      <label for="formName">Name:</label>
      <input type="text" id="nameField" name="formName" placeholder="Enter your name">
      <input type="submit" onClick="getFormInput()">
    </form>

    <p id="JavaScriptOutput"></p>

    <script>
      function getFormInput() {
        const NAME_FIELD = document.getElementById("nameField");
        const OUTPUT = document.getElementById("JavaScriptOutput");
        let userName = NAME_FIELD.value;
        OUTPUT.innerHTML = "<p>Your name is " + userName + "</p>";
      }
    </script>
  </body>
</html>
