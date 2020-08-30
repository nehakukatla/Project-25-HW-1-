const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper1, ground1, d1;


function setup(){
	var canvas = createCanvas(1400, 700);
	engine = Engine.create();
	world = engine.world;
	
	ground1 = new Ground(width/2,695,width,20);
	d1= new Dustbin(1200,640);
	paper1= new Paper(150,660,70);

	
	Engine.run(engine);	
}

function draw() {
  background(255);
  Engine.update(engine);
  ground1.display();
  d1.display();
  paper1.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:130,y:-145});
	}
}