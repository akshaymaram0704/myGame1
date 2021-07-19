const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var cupImg, ballImg, tableImg;
var cup1, cup2, cup3, cup4, cup5, cup6, cup7, cup8, cup9, cup10, cup11, cup12, ball, restingBody;

let engine;
let world;

function preload(){
  cupImg = loadImage("cup.png")
  ballImg = loadImage("ball.png")
  tableImg = loadImage("table.png")
  
}

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  cup1 = createSprite(226,333,20,20)
  cup2 = createSprite(188,313,20,20)
  cup3 = createSprite(255,313,20,20)
  cup4 = createSprite(143,283,20,20)
  cup5 = createSprite(198,286,20,20)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ball = Bodies.circle(211,414,40)
  //ball.isStatic = true
  World.add(world, ball)
  restingBody = Bodies.rectangle(211,460,70,10)
  World.add(world,restingBody);
  restingBody.isStatic = true

  

  
}

function draw() 
{
  background("white");
  background(tableImg);
  text(mouseX+","+ mouseY,mouseX, mouseY)
  Engine.update(engine);
  imageMode(CENTER);
  image(ballImg,ball.position.x, ball.position.y, 80,80);

  ball.bounceOff(cups,cupHit())
  

  
  drawSprites();


}
function keyPressed(){

  if(keyCode===UP_ARROW){
    console.log("yeet")
    Matter.Body.applyForce(ball, ball.position, {x:0, y:-1})
  }
}

