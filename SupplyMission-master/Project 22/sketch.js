var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rectangle1,rectangle2,rectangle3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	var ground_options={
		isStatic:true
	}

	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);

	rectangle1=new Rectangle(400,645,200,20);
	rectangle1.shapeColor(255,0,0);

	rectangle2=new Rectangle(395,645,20,100);
	rectangle2=shapeColor(255,0,0);

	rectangle3=new Rectangle(395,670,20,100);
	rectangle3.shapeColor(255,0,0);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
    

	Engine.run(engine);

	var ground_options={
		isStatic:false
	}
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  rectangle1.display();
  rectangle2.display();
  rectangle3.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	
   

	
	
	Matter.Body.setStatic(packageBody,false);
	
	
	}
  
}




