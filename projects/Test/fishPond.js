let w,h;
let div = 40;
let fish = [];
let amount_of_fish = 8;
let active = true;
let bg; // background

function setup()
{
  myCanvas = createCanvas(400, 400);
  let containerlist = document.getElementsByClassName("sketchNoEffects");
  let container = containerlist[0];
  myCanvas.parent(container);
  frameRate(60);

  loadPixels();
  let x,y;
  for (let i = 0 ; i<  pixels.length ; i++)
  {
    y = floor(i/width);
    x = i%width;
    if (i < 850) console.log(x + ":" + y);
    let scale = 400.0;
    pixels[i] = 255*noise(x/scale,y/scale);
  }
  updatePixels();
}


function draw()
{

}

function mousePressed(event)
{
  let index = mouseX + mouseY*width;
  loadPixels();
  pixels[index] = 0;
  console.log("pixel at " + index);
  updatePixels();

  /*
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
  */
}

