class Guy{
    constructor() {
        var options = {
            isStatic:false
        }
        this.body = Bodies.circle(70,500,20,60);
        World.add(world, this.body);
      }
      display(){
          boy1.x=this.body.position.x
          boy1.y=this.body.position.y
        }

      remove(){
        World.remove(world, this.body);
      }
}