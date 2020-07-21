
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

    ball1=new Ball(700,350)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



