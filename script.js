let scrollerButton = document.getElementById("scroller");
let formButton = document.getElementById("formButton");

scrollerButton.onclick = function(e){
    document.documentElement.scrollTop = 2;
    setTimeout(() => {formButton.style.backgroundColor = "green";}, 600)
}

formButton.onclick = function(e){
    e.preventDefault();
    alert("Thanks for joining");
}