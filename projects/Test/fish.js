function Fish()
{
  // Fish properties
  this.hue = color("#ff9100")._getHue() + random(-10,10);
  this.size = 10 + random(5);
  this.tail = [];
  this.age = random(100);

  // Physics variables
  this.position = createVector(random(width),random(height));
  this.speed = createVector(random(-1,1),random(-1,1));
  this.acceleration = createVector(0,0);

  this.target = this.createTarget();
}

Fish.prototype.update = function()
{
  // Increase age
  this.age++;
  if (this.age > 300)
  {
    this.age = random(100);
    this.target = this.createTarget();
  }

  // Reset the acceleration vector
  this.acceleration.x = 0;
  this.acceleration.y = 0;

  // Apply repulsion from other fishes
  let v = createVector(0,0);
  for (let i = 0 ; i < amount_of_fish ; i++)
  {
    if (fish[i] !== this)
    {
      let d = sq(this.position.x - fish[i].position.x) + sq(this.position.y - fish[i].position.y);
      if (d < sq(75)) {
        v.set(this.position.x - fish[i].position.x, this.position.y - fish[i].position.y);
        v.setMag(d/10000);
        this.acceleration.x += v.x;
        this.acceleration.y += v.y;
      }
    }
  }

  // center attraction
  let cubic_distance_from_center = sq(this.position.x - width/2) + sq(this.position.y - height/2);
  if (cubic_distance_from_center > sq(150))
  {
    this.acceleration.x += -(this.position.x - width/2)/250;
    this.acceleration.y += -(this.position.y - height/2)/250;
  }
  else
  {
    this.acceleration.x += -(this.position.x - width/2)/10000;
    this.acceleration.y += -(this.position.y - height/2)/10000;
  }



  // Target attraction
  this.acceleration.x += -(this.position.x - this.target.x)/3000;
  this.acceleration.y += -(this.position.y - this.target.y)/3000;

  // Apply friction
  this.speed.y *= 0.995;
  this.speed.x *= 0.995;

  // Limit speed
  if (this.speed.mag() > 5) this.speed.setMag(5);

  // Handle tail
  append(this.tail,createVector(this.position.x,this.position.y))
  if (this.tail.length > 10)
  {
    this.tail.shift();
  }

  // Applying the speed and acceleration
  this.speed.add(this.acceleration);
  this.position.add(this.speed);
}


Fish.prototype.show = function()
{
  for (let i = 0 ; i < this.tail.length ; i++)
  {
    fill(this.hue,255,215 + 2*i);
    ellipse(this.tail[i].x, this.tail[i].y, this.size+i/2);
  }
}

Fish.prototype.createTarget = function()
{
  let result;
  let d = 1000;
  while (d > 200)
  {
    result = createVector(random(width), random(height));
    d = dist(result.x,result.y, width/2,height/2);
  }
  return result;
}
