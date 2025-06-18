// script.js
function sayHello() {
  const name = document.getElementById("nameInput").value;
  const output = document.getElementById("outputText");

  if (name.trim() === "") {
    output.textContent = "Please enter your name!";
  } else {
    output.textContent = `Hello, ${name}!, Nice to meet you`;
  }
}
