var x = [];
var y = [];
var vx = [];
var vy = [];

function setup() {
  createCanvas(1600, 900);

  // initialize circle 1
  for (var i = 0; i <= 80; i += 1){
    x.push(random(width));
    y.push(50);
    vx.push(random(2));
    vy.push(0);
    
    
  }

}

function draw() {
  background(255);

  // draw circle 1
  for (i = 0; i <= 80; i++){
    ellipse(x[i], y[i], 20, 20);


  // move circle 1
    x[i] += vx[i]; // equivalent to x[i] = x[i] + vx[i];
    y[i] += vy[i];

  // gravity circle 1
    vy[i] += 0.5;

  // bounce circle 1
    if (x[i] + 10 >= width) {
      vx[i] = -abs(vx[i]);
    }
    if (x[i] - 10 <= 0) {
      vx[i] = abs(vx[i]);
    }
    if (y[i] + 10 >= height) {
      vy[i] = -abs(vy[i]);
      vy[i] = vy[i] * 0.75; // dampen -- lose some speed on every bounce!
    }
    if (y[i] - 10 <= 0) {
      vy[i] = abs(vy[i]);
    }
  }
}
