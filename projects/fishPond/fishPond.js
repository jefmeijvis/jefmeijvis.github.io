let w,h;
let div = 40;
let fish = [];
let amount_of_fish = 8;
let active = true;
let bg; // background

function setup()
{
  myCanvas = createCanvas(400, 400,WEBGL);
  let containerlist = document.getElementsByClassName("sketchNoEffects");
  let container = containerlist[0];
  myCanvas.parent(container);
  frameRate(60);
  w = floor(width/div);
  h = floor(height/div);
  noStroke();

  for (var i = 0 ; i < amount_of_fish ; i++)
  {
    fish[i] = new Fish();
  }
  colorMode(HSB,255);
  //createBackground();
}


function draw()
{
  translate(-width/2,-height/2);
  if (active)
  {
    background("#f1f1f1");
    fill("#476699");
    ellipse(width/2,height/2,width,height,50)
    //image(bg,0,0,width,height);
    for (let i = 0; i < amount_of_fish; i++) {
      let myFish = fish[i]
      myFish.update();
      myFish.show();
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
      rect(0,0, width, height);
      active = !active;
    }
  colorMode(HSB,255);
}

function createBackground()
{

  bg = createGraphics(width,height,WEBGL);
  bg.noStroke();
  bg.background("#f1f1f1");
  bg.fill(29, 84, 173,10);
  for (let i = 0 ; i < 25 ; i++)
  bg.ellipse(bg.width/4,bg.height/4,200-i,200-i);
}

