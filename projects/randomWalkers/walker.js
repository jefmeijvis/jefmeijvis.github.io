function Walker()
{
  this.x = width/2/div;
  this.y = height/2/div;
  this.hue = floor(random(255));
}

Walker.prototype.update = function()
{
  let prevx = this.x;
  let prevy = this.y;
  if (random(2) > 1)
  { // MOVE IN X DIRECTION
    if (random(2) > 1)
    { // MOVE RIGHT
      this.x+=1;
    }
    else
    { // MOVE LEFT
      this.x-=1;
    }
  }
  else
  {
    if (random(2) > 1)
    { // MOVE UP
      this.y+=1;
    }
    else
    { // MOVE DOWN
      this.y-=1
    }
  }

  if (!this.checkValid())
  {
    this.x = prevx;
    this.y = prevy;
    this.update();
  }
}

Walker.prototype.checkValid = function()
{
  if ((this.x >= 0 && this.x <= div-1) && (this.y >= 0 && this.y <= div-1))
  {
    return true;
  }
  else
  {
    return false;
  }
}


Walker.prototype.show = function()
{
  fill(this.hue,255,255);
  rect(this.x*w,this.y*h,w,h);
}
