var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

var rotateValu = circle.style.transform;
var rotateSum;

upBtn.onclick = function () {
    rotateSum = rotateValu + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValu = rotateSum;
}

downBtn.onclick = function () {
    rotateSum = rotateValu + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValu = rotateSum;
}