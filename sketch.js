const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
const Body=Matter.Body;

var engine, world;
var ground1;
var polygon;
var pos;

function preload(){
 polygon_img=loadImage("sprites/rock.png");
}



function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;

     ground1= new Ground(300,350,200,20);
     ground2= new Ground(600,150,200,20);
     block1=new Box(240,320,30,40);
     block2=new Box(270,320,30,40);
     block3=new Box(300,320,30,40);
     block4=new Box(330,320,30,40);
     block5=new Box(360,320,30,40);

     block6=new Box(255,295,30,40);
     block7=new Box(285,295,30,40);
     block8=new Box(315,295,30,40);
     block9=new Box(345,295,30,40);

     block10=new Box(270,260,30,40);
     block11=new Box(300,260,30,40);
     block12=new Box(330,260,30,40);

     block13=new Box(300,225,30,40);

     block14=new Box(540,120,30,40);
     block15=new Box(570,120,30,40);
     block16=new Box(600,120,30,40);
     block17=new Box(630,120,30,40);
     block18=new Box(660,120,30,40);

     block19=new Box(570,85,30,40);
     block20=new Box(600,85,30,40);
     block21=new Box(630,85,30,40);
     
     block22=new Box(600,50,30,40);

     polygon= Bodies.circle(50,200,20);
     World.add(world,polygon);

     slingShot=new Slingshot(this.polygon,{x:100,y:200});

     pos=this.polygon.position;

}

     
function draw() {
  background(0);  
  Engine.update(engine);
 // rectMode(CENTER);

 

  ground1.display();
  ground2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block10.display();
  block11.display();
  block12.display();

  block13.display();

  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  block19.display();
  block20.display();
  block21.display();

  block22.display();

 slingShot.display();
 
 imageMode(CENTER);
 image(polygon_img,pos.x,pos.y,40,40); 
  drawSprites();
}



function mouseDragged(){
 Body.setPosition(polygon,{x:mouseX,y:mouseY});
}


function mouseReleased(){
  slingShot.fly();
}
