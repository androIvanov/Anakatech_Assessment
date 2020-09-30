let scrollerButton = document.getElementById("scroller");
let fromButton = document.getElementById("fromBtn");

scrollerButton.onclick = function(e){
    document.documentElement.scrollTop = 2;
    setTimeout(() => {fromButton.style.backgroundColor = "green";}, 700)
    
}

fromButton.onclick = function(e){
    e.preventDefault()
}