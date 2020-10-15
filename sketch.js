const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paperBall,paperSprite,paperImage;
var bucket1,bucket2,bucket3;
var bin, binImage;

function preload(){
	binImage=loadImage("sprites/dustbingreen.png");
	paperImage=loadImage("sprites/paper.png");
}
function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	paperBall=new Paper(200,600);

	paperSprite=createSprite(paperBall.body.position.x,paperBall.body.position.y,10,10);
	paperSprite.addImage(paperImage);
	paperSprite.scale=0.9;


	var options={
		isStatic:true
	}
	bucket1=new Bucket(690,630,150,20,options);
	bucket2=new Bucket(600,590,20,150,options);
	bucket3=new Bucket(780,590,20,150,options);

	bin=createSprite(690,590,10,10);
	bin.addImage(binImage);
	bin.scale=0.5;

	ground=new Ground(500,680,1000,20);
  
}


function draw() {
  background(0);

  Engine.update(engine);

  keyPressed();

  paperBall.display();

  ground.display();

  bucket1.display();
  bucket2.display();
  bucket3.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-85});
  
	}
}




