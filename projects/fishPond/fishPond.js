let w,h;
let div = 40;
let fish = [];
let amount_of_fish = 10;
let active = true;
let bg; // background

function setup()
{
  myCanvas = createCanvas(400, 400);
  let containerlist = document.getElementsByClassName("sketchNoEffects");
  let container = containerlist[0];
  myCanvas.parent(container);
  frameRate(60);
  w = floor(width/div);
  h = floor(height/div);
  noStroke();
  colorMode(HSB,255);
  for (var i = 0 ; i < amount_of_fish ; i++)
  {
    fish[i] = new Fish();
  }

  createBackground();
}


function draw()
{
  if (active)
  {
    image(bg,0,0,width,height);
    for (let i = 0; i < amount_of_fish; i++) {
      let myFish = fish[i]
      myFish.update();
      myFish.show();
    }
  }

  // if (frameCount > 10) active = false;
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
      ellipse(width/2,height/2, width, height);
      active = !active;
    }
}

function createBackground()
{

  bg = createGraphics(width*2,height*2);
  bg.noStroke();
  bg.background("#f1f1f1");
  bg.fill(29, 84, 173,5);
  for (let i = 0 ; i < 50 ; i++)
  bg.ellipse(width/2,height/2,400-i,400-i);
}

