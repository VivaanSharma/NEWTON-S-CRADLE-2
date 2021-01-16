
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var ground1;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var ball1,ball2;
var rect1, rect2,rect3,rect4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground1 = new ground(375, 300 , 35,300);
	//ground2 = new ground(375,500, 35, 300);
	bob1 = new bob(275,400,100/2);
	bob2 = new bob(325,400,100/2);
	bob3 = new bob(375,400,100/2);
	bob4 = new bob(425,400,100/2);
	bob5 = new bob(425,400,100/2);
//	bob6 = new bob(275,600,100/2);
//	bob7 = new bob(325,600,100/2);
//	bob8 = new bob(375,600,100/2);
//	bob9 = new bob(425,600,100/2);
//	bob10 = new bob(475,600,100/2);
	
	rope1 = new rope(bob1.body,{x:275,y:300});
	rope2 = new rope(bob2.body,{x:325,y:300});
	rope3 = new rope(bob3.body,{x:375,y:300});
	rope4 = new rope(bob4.body,{x:425,y:300});
	rope5 = new rope(bob5.body,{x:475,y:300});
//	rope6 = new rope(bob6.body,{x:275,y:500});
//	rope7 = new rope(bob7.body,{x:325,y:500});
//    rope8 = new rope(bob8.body,{x:375,y:500});
//    rope9 = new rope(bob9.body,{x:425,y:500});
//	rope10 = new rope(bob10.body,{x:475,y:500});
	



	Engine.run(engine);
  
}


function draw() {
 
  background(0);

//  rectMode(CENTER);
//  rect(0, 0, this.width, this.height);
  textSize(20);
  fill("yellow")
  text("DRAG AND RELEASE THE FIRST BALL FROM LEFT SIDE ",100,200);
  text("TO MOVE THE BALLS OF THE CRADLE ",180,230);
  textSize(40)
  fill("blue")
  text("NEWTON'S DIGITAL CRADLE ",100,50);
  drawSprites();
  ground1.display();
//  ground2.display();


  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 // bob6.display();
//  bob7.display();
//  bob8.display();
//  bob9.display();
//  bob10.display();


  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 // rope6.display();
//  rope7.display();
//  rope8.display();
//  rope9.display();
//  rope10.display();

}

function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{ x: mouseX , y: mouseY});
  }
 