function Blob()
{
    this.position = getPositionInCircle(width/2);
}


Blob.prototype.show = function()
{
    let x = this.position.x + (noise(this.position.x , 10*sin(time))-0.5)*10;
    let y = this.position.y + (noise(this.position.y , 10*cos(time))-0.5)*10;
    ellipse(x,y,5,5);
}
