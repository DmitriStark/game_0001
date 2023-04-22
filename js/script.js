var charcter = document.getElementById("charcter");
var block = document.getElementById("block")

function jump() {
    if (charcter.classList != "animate") {
        charcter.classList.add("animate");
    }
    setTimeout(function () {
        charcter.classList.remove("animate")
    }, 500);
}

var charcterDead = setInterval(function () {
    var charcterTop = parseInt(window.getComputedStyle(charcter).getPropertyValue("top"))
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    
    if (blockLeft < 20 && blockLeft < 0 && charcterTop >= 130){
        block.style.animation ="none"
        block.style.display = "none"
        alert("u loose")
    }
 })