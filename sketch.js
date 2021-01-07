const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ball,box1,box2,box3


function setup() {
  createCanvas(3000,800);
engine = Engine.create();
 world = engine.world;


ground = new Ground(1500,2900,3000,50);
ball = new Ball(200,200,80,80);
box1 = new box(900,100,70,70);
//box1 to box6 = x = 900
//box7 to box12 = x = 800
//box 13 to box 20 = x= 700
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  ground.display();
  box1.display();





  ball.display();
  rope.display();
  drawSprites();
}
function mouseDragged(){


}