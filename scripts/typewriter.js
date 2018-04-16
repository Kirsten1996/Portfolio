var i = 0;
var text = "Hello, I'm Kirsten";
var speed = 50;

var hero = document.querySelector('.hero');
  hero.addEventListener("mouseenter", typeWrite);


function typeWrite() {
  if(i < text.length) {
    document.getElementById("demo").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWrite, speed);
  }
}