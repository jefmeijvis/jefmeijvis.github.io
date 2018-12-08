let w,h;
let div = 40;
let walker = [];
let walkers = 100;
let active = true;
function setup()
{
  myCanvas = createCanvas(400, 400);
  let containerlist = document.getElementsByClassName("sketch");
  let container = containerlist[0];
  myCanvas.parent(container);
  frameRate(60);
  w = floor(width/div);
  h = floor(height/div);
  noStroke();
  colorMode(HSB,255);
  for (var i = 0 ; i < walkers ; i++)
  {
    walker[i] = new Walker();
  }
  background(0);
}


function draw()
{
  if (active)
  {
    background(25, 30);
    for (let i = 0; i < walkers; i++) {
      let myWalker = walker[i]
      myWalker.update();
      myWalker.show();
    }
  }
}

function mousePressed(event)
{

  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height)
    if (event.ctrlKey || event.altKey || event.shiftKey)
    {
      setup();
    }
    else
    {
      fill(0, 0, 255, 100);
      rect(0, 0, width, height);
      active = !active;
    }
}

