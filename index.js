document.querySelector("h1").addEventListener("click", displayDate);

function displayDate() {
   document.getElementById("demo").innerHTML = Date();
}