  var cursor = document.getElementById(
    'cursor');
  document.addEventListener('mousemove',
function(e){
  var x = e.pageX;
  var y = e.pageY;
  cursor.style.left  = x + "px";
  cursor.style.top  = y + "px";

});
// "transform", "translate3d(10px, 5px, 0px)"
//
//
// var cnv;
//
// let x = 1;
// let y = 1;
// let easing = 0.10;
//
//
// function setup() {
// cnv = createCanvas(windowWidth, windowHeight); // create canvas of 300,300 and store it in cnv
// cnv.parent("#canvasParent"); // put cnv inside of #canvasParent
//
// }
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
//
// function draw() {
//
// fill(mouseX/67, 204, 152);
// background(255,9);
// stroke(255);
//
// // ellipse(windowWidth-50, windowHeight-50, 50, 50); // size and position of the ellipse
//
//   // let radius = width * 1.5;
//   //
//   // //drag to move the world.
//   // orbitControl();
//   //
//   // normalMaterial();
//   // translate(240, 0, 0);
//   //  push();
//   //  box(70, 70);
//   //  pop();
//
// let targetX = mouseX;
// let dx = targetX - x;
// x += dx * easing;
//
// let targetY = mouseY;
// let dy = targetY - y;
// y += dy * easing;
// ellipse(x, y, 100, 100);
// fill(83, 204, 181);
// // ellipse(x+n, y+n, n, n);
// // ellipse(x-n, y-n, n, n);
// // ellipse(x+n, y-n, n, n);
// // ellipse(x-n, y+n, n, n);
// // fill(random(255), 204, 181);
// // ellipse(x-54, y-54, 54, 54);
// // fill(58, 140, random(255));
// // ellipse(x+54, y-54, 54, 54);
// // fill(258, random(255), 255);
// // ellipse(x-54, y+54, 54, 54);
//
// color = mouseY;
//
// // mouseMoved = function() {
// //     ellipse(x, y, 50,  50);
// // };
// //
// // var convoca = p.select(".tool");
// // convoca.mouseOver(change);
// //
// // function change() {
// // console.log("changed");
// // }
//
// }
//
// // function mousePressed() {
// //   // Check if mouse is inside the circle
// //   let d = dist(mouseX, mouseY, windowWidth-50, windowHeight-50); //measure the distance
// //   if (d < 50) { // if d is less than 50
// //     // Pick new random color values
// //     r = random(255);
// //     g = random(255);
// //     b = random(255);
// //     n = random(10,100);
// //   }
// // }
//
//
//
//
//
// // let c = cursor(pointer);
// //
// // if(c == true ){
// //   fill(100,200,50);
// //   ellipse(x, y, 84, 84);
