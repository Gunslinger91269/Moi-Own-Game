class Ball{
    constructor(x, y, width) {
        var options = {
            isStatic:false
        }
        this.body = Bodies.circle(x, y-width/2, width/2, options);
        this.width = width/2;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        ellipseMode(CENTER);
        fill(random(0,255),random(0,255),random(0,255))
        ellipse(this.body.position.x, this.body.position.y,this.width,this.width);
        pop();
      }

      remove(){
        World.remove(world, this.body);
      }
}