const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5 ;
var sling1, sling2, sling3, sling4, sling5;
var world;
var mConstraint;

function setup() {
	createCanvas(windowWidth/2, windowHeight);
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options ={
		mouse: canvasmouse
	}
    mConstraint = MouseConstraint.create(engine,options);
	World.add(world,mConstraint);

  pendulum1 = new pendulum(450,500,"white");
  pendulum2 = new pendulum(390,500,"white");
  pendulum3 = new pendulum(330,500,"white");
  pendulum4 = new pendulum(270,500,"white");
  pendulum5 = new pendulum(210,500,"white");

  sling1 = new sling(pendulum1.body,{x:450,y:200});
  sling2 = new sling(pendulum2.body,{x:390,y:200});
  sling3 = new sling(pendulum3.body,{x:330,y:200});
  sling4 = new sling(pendulum4.body,{x:270,y:200});
  sling5 = new sling(pendulum5.body,{x:210,y:200});

	Engine.run(engine);
	
}

function draw() {
  rectMode(CENTER);
  background(128,128,128);
 
  drawSprites();

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

}
function mouseDragged(){
Matter.Body.setPosition(pendulum1.body,{x:mouseX , y:mouseY});
}

