let nr = 0;
let myCanvas;
let containerlist;

function setup()
{
    myCanvas = createCanvas(400, 400);
    loadSketch(nr);
    frameRate(60);
    textAlign(CENTER,CENTER);
}

function draw()
{
    switch (nr)
    {
        case 0: draw_0();break;
        case 1: draw_1();break;
        case 2: draw_2();break;
        default: draw_0();break;
    }

}

function draw_0()
{
    let col = frameCount%255;
    let col2 = (col-127)%255;
    background(col);
    stroke(col2);
    text("SKETCH " + nr , width/2,height/2);
}

function draw_1()
{
    colorMode(HSB,255);
    background(frameCount%255,255,255);
    text("SKETCH " + nr , width/2,height/2);
}

function draw_2()
{
    background(255);
    fill(0);
    ellipse(mouseX,mouseY,100,100);
    text("SKETCH " + nr , width/2,height/2);
}



function loadSketch(index)
{
    nr = index;
    containerlist = document.getElementsByClassName("sketch");
    let container = containerlist[index];
    myCanvas.parent(container);
}