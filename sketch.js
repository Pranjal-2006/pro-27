
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render; 
const Constraint = Matter.Constraint;
var roofObj, bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
var rope1, rope2, rope3, rope4, rope5;
var bobDiameter = 50;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	bobObj1 = new bob(300,350,50);
	bobObj2 = new bob(350,350,50);
	bobObj3 = new bob(400,350,50);
	bobObj4 = new bob(450,350,50);
	bobObj5 = new bob(500,350,50);
	roofObj = new roof(400,100,300,40);
	ground = new roof(200,700,800,40);
	
	
rope1=new rope(bobObj1.body,roofObj.body,-bobDiameter*2, 0)
rope2=new rope(bobObj2.body,roofObj.body,-bobDiameter*1, 0)
rope3=new rope(bobObj3.body,roofObj.body,0, 0)
rope4=new rope(bobObj4.body,roofObj.body,-bobDiameter*1, 0)
rope5=new rope(bobObj5.body,roofObj.body,-bobDiameter*2, 0)
	Engine.run(engine);
  
}


function draw() {
   background("white");
   rectMode(CENTER);
  roofObj.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
bobObj1.display();
bobObj2.display();
bobObj3.display();
bobObj4.display();
bobObj5.display();

  drawSprites();
 if(keyDown("UP_ARROW")){
	 Matter.Body.applyForce(bobObj1.body, bobObj1.body.position,{x:-100,y:100})
 }
}



