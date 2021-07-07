const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;
var ground;
var con;
var ball2;
var con2;



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  var ball_options = {
    restitution: 0.8
  }
  
  
  ball = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball);

  ball2=Bodies.circle(300,60,20,ball_options)
  World.add(world,ball2)
  
  con = Matter.Constraint.create({
          pointA:{x:200,y:20},
          bodyB:ball,
         // pointB:{x:0,y:0},
          length:100,
          stiffness:0.5
        });
  
      World.add(world,con);
      
  
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  

  
  var con2_options={
    bodyA:ball
    ,bodyB:ball2
    ,length:50
    ,stiffness:0.9

  }
  con2=Matter.Constraint.create(con2_options)
  World.add(world,con2)
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,10);

  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  line(con2.bodyA.position.x,con2.bodyA.position.y,con2.bodyB.position.x,con2.bodyB.position.y)
  pop();
  
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
    }
}

