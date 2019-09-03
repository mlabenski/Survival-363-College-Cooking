

var buttonToSkip = document.getElementById("skip");

function skipItem() {
    var element = document.getElementById("videoContainer");
    var secondElement = document.getElementById("videoContainer2");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
      secondElement.style.visibility = "visible";
}

buttonToSkip.addEventListener("click", skipItem);

