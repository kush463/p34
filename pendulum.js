class pendulum{
   constructor( x,y,color)
   {
     var option = {
			restitution:1,
			friction:0,
      slop: 1,
			density:0.8,
      Interia: Infinity
 }
    this.body = Bodies.rectangle(x,y,40,40,option);
    this.x = x;
    this.y = y;
    this.color = color;
    World.add(world,this.body);
}
display(){
    var angle = this.body.angle;
    var pos = this.body.position;
    push()
    translate(pos.x , pos.y);
    rotate(angle);
    fill(this.color);
    ellipse(0,0,60,60);
    pop();
  }
}