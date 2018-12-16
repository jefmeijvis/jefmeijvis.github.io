let active = true;
let points = [];
let time;
let t;

let OPTION_PARTICLES = 3000;
let OPTION_RANGE = 2;
let OPTION_SPEED = 10;
let OPTION_ZOOM = 10;

let slider_range,slider_zoom,slider_speed;

function setup()
{
  myCanvas = createCanvas(400, 400,WEBGL);
  let containerlist = document.getElementsByClassName("sketchNoEffects");
  let container = containerlist[0];
  myCanvas.parent(container);
  frameRate(60);
  noStroke();
  for ( let i = 0 ; i < OPTION_PARTICLES ; i++)
  {
    points[i] = getPositionInCircle(width/2);
  }
  t = 0;

 slider_range = document.getElementById("slider_range");
  slider_range.oninput = function()
  {
    OPTION_RANGE = this.value/10;
    for ( let i = 0 ; i < points.length ; i++)
    {
      let p = points[i];
      p.z = OPTION_RANGE*(width/2 - dist(p.x,p.y,0,0));
    }

  }

  slider_zoom = document.getElementById("slider_zoom");
  slider_zoom.oninput = function()
  {
    OPTION_ZOOM= this.value/100;
  }

  slider_speed = document.getElementById("slider_speed");
  slider_speed.oninput = function()
  {
    OPTION_SPEED= this.value/3;
  }
}


function draw()
{
  if (active)
  {
    background("#f1f1f1");
    t++;
    time = OPTION_SPEED*t/1000.0;

    fill(0);
    for ( let i = 0 ; i < points.length ; i++)
    {
      let p = points[i];
      let x = p.x;
      let y = p.y;
      x += p.z * (noise(time + p.x/(30*OPTION_ZOOM) , time + p.y/(30*OPTION_ZOOM) , time)-0.5)
      y += p.z * (noise(time + p.x/(30*OPTION_ZOOM) , time + p.y/(30*OPTION_ZOOM) , time + 0.5)-0.5)

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
      fill(241, 241, 241,150);
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
  result.z = OPTION_RANGE*(width/2 - dist(result.x,result.y,0,0));
  return result;
}
