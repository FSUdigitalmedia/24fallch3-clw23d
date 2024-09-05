let x1 = 100;     // x position of the ball
let y1 = 0;       // y position of the ball
let x1Speed = 3;  // speed in X direction
let y1Speed = 7; // speed in Y direction
let d1 = 30;      // diameter of the ball

let x2 = 100;     // x position of the ball
let y2 = 0;       // y position of the ball
let x2Speed = 5;  // speed in X direction
let y2Speed = 5; // speed in Y direction
let d2 = 30;      // diameter of the ball

let red1 = 50
let yellow1 = 100
let blue1 = 50

let red2 = 50
let yellow2 = 100
let blue2 = 50

function setup() {
  createCanvas(400, 400);
}

function draw() {
background(220,20); // try commenting this out!


noStroke()

  // if x hits the right side or the left side of the canvas,
  // switch directions...
  if (x1 > width || x1 < 0) {
    red1 = 100
    blue1 = 0
    yellow1 = random(100)
    x1Speed = x1Speed * -1;  
  }
  x1 = x1 + x1Speed; // adding a negative xSpeed *decreases* x, right?
  
  // same as above, but for the top and bottom of the canvas
  if (y1 > width || y1 < 0) {
    y1Speed = y1Speed * -1;
    blue = 100
    red = 0
  }
  y1 = y1 + y1Speed;

  fill(red1,yellow1,blue1)
  ellipse(x1, y1, d1);

    // if x hits the right side or the left side of the canvas,
  // switch directions...
  if (x2 > width || x2 < 0) {
    x2Speed = x2Speed * -1;  
    red2 = 0
    blue2= 100
    yellow2 = random(100)

  }
  x2 = x2 + x2Speed; // adding a negative xSpeed *decreases* x, right?
  
  // same as above, but for the top and bottom of the canvas
  if (y2 > width || y2 < 0) {
    y2Speed = y2Speed * -1;  
  }
  y2 = y2 + y1Speed;
  fill(red2,yellow2,blue2)
  ellipse(x2, y2, d2);
}