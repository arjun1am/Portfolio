  var cursor = document.getElementById(
    'cursor');
  document.addEventListener('mousemove',
function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left  = x + "px";
  cursor.style.top  = y + "px";

});

function on() {
  document.getElementById("overlay").style.clipPath = "circle(99.9% at 26% 47%)";
}

function off() {
  document.getElementById("overlay").style.clipPath = "circle(0.0% at 14% 43%)";
  console.log('this does not work in safari rip');

}


function onab() {
  document.getElementById("overlayabout").style.clipPath = "circle(99.9% at 26% 47%)";
}

function offab() {
  document.getElementById("overlayabout").style.clipPath = "circle(0.0% at 40% 43%)";
}
