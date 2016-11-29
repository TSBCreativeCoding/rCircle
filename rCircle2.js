// x position variable
var xpos = 200;

// y position variable
var ypos = 100;

// numPixels variable
var numPixels = 50;

// target x and y positions
var targetX;
var targetY;

// easing variable
var easing = 0.05;

function setup()
{
  // set canvas size
  createCanvas(400, 200);
  //background(255);
}

function draw()
{
  // clear background
  background(255);

  // set the fill color
  fill(255, 0, 0);

  // black outline
  stroke(0);

  // set the ellipse mode
  ellipseMode(CENTER);

  // calculate the new xpos value
  var dx = targetX - xpos;
  if(abs(dx) > 1) {
    xpos += dx * easing;
  }

  // calculate the new ypos value
  var dy = targetY - ypos;
  if(abs(dy) > 1) {
    ypos += dy * easing;
  }

  // draw a circle
  ellipse(xpos, ypos, 25, 25);

}

function keyPressed()
{
  // UP key
  if(keyCode == UP_ARROW)
  {
    targetY = ypos - numPixels;
  }

  // DOWN key
  if(keyCode == DOWN_ARROW)
  {
    targetY = ypos + numPixels;
  }

  // RIGHT key
  if(keyCode == RIGHT_ARROW)
  {
    targetX = xpos + numPixels;
  }

  // LEFT key
  if(keyCode == LEFT_ARROW)
  {
    targetX = xpos - numPixels;
  }
}
