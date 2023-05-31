console.log("Hello there");

const button = document.querySelector("button");

var butt = document.querySelector("#test_button");
var container = document.querySelector(".testroom");

var newbutt = document.createElement('button');
newbutt.textContent = "Helllo";

var myphoto = document.querySelector("#myphoto");
myphoto.onclick = () => alert("HEY");

container.appendChild(newbutt);