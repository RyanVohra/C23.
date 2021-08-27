const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerBase,player
var computer,computerBase


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base Object 
   playerBase = new PlayerBase(300,random(450,height-300),180,150);
   player = new Player(285,playerBase.body.position.y-153,50,180);
   //and Computer Base Object
    computerBase = new ComputerBase(1000,random(500,height-300),180,150)
    computer = new Computer(1000,computerBase.body.position.y-153,50,180)

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
    computerBase.display()
    playerBase.display();

   //display Player and computerplayer
   player.display();
  computer.display();
}
