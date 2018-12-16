let active = true;
let points = [];
let time;

function setup()
{
  myCanvas = createCanvas(400, 400,WEBGL);
  let containerlist = document.getElementsByClassName("sketchNoEffects");
  let container = containerlist[0];
  myCanvas.parent(container);
  frameRate(60);
  noStroke();
  for ( let i = 0 ; i < 2000 ; i++)
  {
    points[i] = getPositionInCircle(width/2);
  }
}


function draw()
{
  if (active)
  {
    background("#f1f1f1");

    time = frameCount/300.0;

    fill(0);
    for ( let i = 0 ; i < points.length ; i++)
    {
      let p = points[i];
      let x = p.x;
      let y = p.y;
      x += p.z * (noise(p.x/100 + p.y/100,2*sin(time))-0.5,2*cos(time)-0.5);
      y += p.z * (noise(p.x/100 + p.y/100,2*sin(time))-0.5,2*cos(time)-0.5);

      ellipse(x,y,2,2);
    }
  }
}

function mousePressed(event)
{
  colorMode(RGB,255);
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height)
    if (event.ctrlKey || event.altKey || event.shiftKey)
    {
      setup();
    }
    else
    {
      fill(241, 241, 241,30);
      rect(-width/2,-height/2,width,height);
      active = !active;
    }
  colorMode(HSB,255);
}

function getPositionInCircle(radius)
{
  let result;
  let d = radius * 2;
  while ( d > radius)
  {
    result = createVector(random(-width/2,width/2),random(-height/2,height/2));
    d = dist(0,0,result.x,result.y);
  }
  result.z = (width/2 - dist(result.x,result.y,0,0));
  return result;
}
