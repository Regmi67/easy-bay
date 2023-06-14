console.log("i am connecting");
// Both of these will select the h1 tag

var accept = document.querySelector("accept");
var cookiecontent = document.getElementById("bottom-cookie"); // main function
function whithnocookie() {
  cookiecontent.remove();

  console.log(" yes it is working");
}

function showAlert() {
  alert("your cart is empty");
}

function over() {
  document.querySelector("#imgChange").src = "./images/succulents-2.jpg";
}
function out() {
  document.querySelector("#imgChange").src = "./images/succulents-1.jpg";
}
