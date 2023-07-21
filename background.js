// JavaScript code
const button = document.getElementById("myButton");

button.addEventListener("click", function() {
  // Code to execute when the button is clicked
  changeBackgroundColor();
});

function changeBackgroundColor() {
  // Generate a random RGB color
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // Apply the new color to the button background
  button.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
