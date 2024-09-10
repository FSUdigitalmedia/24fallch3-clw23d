let x1 = 100;     // x position of circle 1
let y1 = 0;       // y position
let x1Speed = 5;  // speed in X direction
let y1Speed = 7; // speed in Y direction
let d1 = 30;      // diameter

let x2 = 100;     // x position of circle 2
let y2 = 0;       // y position 
let x2Speed = 5;  // speed in X direction
let y2Speed = 7; // speed in Y direction
let d2 = 30;      // diameter

let red1 = 50;     //colors for circle 1
let green1 = 100;
let blue1 = 50;

let red2 = 50;     //colors for circle 2
let green2 = 100;
let blue2 = 50;

let squarex = 50;  //square x and y positions
let squarey = 50;

let squarex2 = 10;
let squarey2 = 10;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}




function draw() {

background(10, 10); // try commenting this out!


noStroke()


  // if x pos of circle 1 hits the right side or the left side of the canvas,
  // switch directions
  if (x1 > width || x1 < 0) {
    x1Speed = x1Speed * -1;  
  }
  x1 = x1 + x1Speed; // adding a negative xSpeed *decreases* x, right?
  
  // if y pos of circle 1 hits the top or bottom,
  // switch directions
  // make red
  // randomize ammount of green
  if (y1 > width || y1 < 0) {
    y1Speed = y1Speed * -1;
    red1 = 100
    blue1 = 0
    green1 = random(100)
  }
  y1 = y1 + y1Speed;

  fill(red1,green1,blue1)
  ellipse(x1, y1, d1);

  // if x pos of circle 2 hits the right side or the left side of the canvas,
  // switch directions
  // make blue
  // randomize amount of green
  if (x2 > width || x2 < 0) {
    x2Speed = x2Speed * -1;  
    red2 = 0
    blue2= 100
    green2 = random(100)

  }
  x2 = x2 + x2Speed; // adding a negative xSpeed *decreases* x, right?
  
  // if y pos of circle 2 hits top or bottom,
  // switch directions
  if (y2 > width || y2 < 0) {
    y2Speed = y2Speed * -1;  
  }
  y2 = y2 + y2Speed;
  fill(red2,green2,blue2)
  ellipse(x2, y2, d2);

// change fill to white
// spawn square in top left corner
//change fill to black
// spawn small square in top left corner
  fill(255, 50);
  square(squarex, squarey, 100)
  fill(10, 50);
  square(squarex2, squarey2, 20)

}

// randomize position of large square when mouse button pressed
// place small square where mouse is pressed

function mousePressed() {
  squarex = random(50,350)
  squarey = random(50,350)
  squarex2 = mouseX
  squarey2 = mouseY

}

// when a is pressed, randomize horizontal speed of ball 1
// when s is pressed, randomize vertical speed
// when spacebar is pressed, make the same speed as ball 2, move next to ball 2
function keyPressed() {
  if (key === 'a') {
    x1Speed = random(0,20)
  } else if (key === 's') {
    y1Speed = random(0,20)
  } else if (key === ' ') {
    x1Speed = x2Speed
    y1Speed = y2Speed
    x1 = x2 + 10
    y1 = y2
  }
  // Uncomment to prevent any default behavior.
  // return false;
}

