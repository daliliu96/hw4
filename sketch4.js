var x, y = []
var vx, vy = []

function setup() {
  createCanvas(600, 600);
  for (var i = 0; i <= 10; i++){
    x.push(width/2);
    y.push(height/2);
    vx.push(0);
    vy.push(0);
  }
}

function draw() {
  background(255);
  fill("red");
  noStroke();
  for (var i = 0; i <= 10; i++){
    ellipse(x[i], y[i], 10, 10);
    x[i] = x[i] + vx[i];
    y[i] = y[i] + vy[i];
  }



  var d = dist(x, y, mouseX, mouseY) / 10; // turns out this line is optional! 

  var dx = mouseX - x;
  var dy = mouseY - y;

  vx = dx/10;
  vy = dy/10;
}
