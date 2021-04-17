class Polygon{
    constructor(x, y, sides, radius) {
        var options = {
                     
        }
        this.body = Bodies.polygon(x, y, sides, radius, options);
        this.sides = sides;
        this.radius = radius;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        circleMode(CENTER);
        circle(0, 0, this.sides, this.radius);
        imageMode(CENTER);
        image(this.image, polygon.position.x, polygon.position.y, 40, 40);
        pop();
      }
}
