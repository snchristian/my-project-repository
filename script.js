const h2 = document.createElement("h2");
h2.textContent = "Let's begin an amazing adventure";
document.querySelector("body").appendChild(h2);
document.getElementById("mouse").addEventListener("mouseover", mouseOver);
document.getElementById("mouse").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("mouse").style.color = "red";
}

function mouseOut() {
  document.getElementById("mouse").style.color = "white";
}
function displayQuote(){
    document.getElementById("island").vaule = "what a good day to go to the beach";
}