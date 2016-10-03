var y = [];
var l = [];

var numLines = 600;

function setup() {
  createCanvas(600,600);
  // println("asas");
  for (var i = 0; i < numLines; i += 1){
      l.push(random(580));
      if ((i % 2) == 0){
        y.push(i);
      }
  }

  
}

function draw() {
  
  for (var i = 0; i < numLines; i++){
    line(0, y[i], l[i], y[i]);
    // println(l[i]);
  }
  noStroke()
  fill(255);
  ellipse(mouseX, mouseY, 30);
  
  //PROBLEM: Could not get rid of the tail behind my mouse
  
  
  
  
  
}
