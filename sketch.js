const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine , world;
var score = 0;
var backgroundImg;
var bg="bg.png";
function preload(){
  getBackgroundImg();
}
function setup() {
  createCanvas(1530,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(740,300,270,20);
  ground2 = new Ground(1260,200,210,20);
  box1 = new BlueBox(650,270,30,40);
  box2 = new BlueBox(681,270,30,40);
  box3 = new BlueBox(712,270,30,40);
  box4 = new BlueBox(743,270,30,40);
  box5 = new BlueBox(774,270,30,40);
  box6 = new BlueBox(805,270,30,40);
  box7 = new BlueBox(836,270,30,40);
  box8 = new BlueBox(1200,170,30,40);
  box9 = new BlueBox(1231,170,30,40);
  box10 = new BlueBox(1262,170,30,40);
  box11 = new BlueBox(1293,170,30,40);
  box12 = new BlueBox(1324,170,30,40);
  box13 = new PinkBox(681,229,30,40);
  box14 = new PinkBox(712,229,30,40);
  box15 = new PinkBox(743,229,30,40);
  box16 = new PinkBox(774,229,30,40);
  box17 = new PinkBox(805,229,30,40);
  box18 = new PinkBox(1262,88,30,40);
  box19 = new GreenBox(712,188,30,40);
  box20 = new GreenBox(743,188,30,40);
  box21 = new GreenBox(774,188,30,40);
  box22 = new GreenBox(1231,129,30,40);
  box23 = new GreenBox(1262,129,30,40);
  box24 = new GreenBox(1293,129,30,40);
  box25 = new PinkBox(743,155,30,40);
  pentagon = new Pentagon(200,200);
  slingshot = new SlingShot(pentagon.body,{x:200,y:200});
  Engine.run(engine);
}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
   }
  Engine.update(engine);
  ground1.display(); 
  ground2.display();
  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();
  box7.display();
  box7.score();
  box8.display();
  box8.score();
  box9.display();
  box9.score();
  box10.display();
  box10.score();
  box11.display();
  box11.score();
  box12.display();
  box12.score();
  box13.display();
  box13.score();
  box14.display();
  box14.score();
  box15.display();
  box15.score();
  box16.display();
  box16.score();
  box17.display();
  box17.score();
  box18.display();
  box18.score();
  box19.display();
  box19.score();
  box20.display();
  box20.score();
  box21.display();
  box21.score();
  box22.display();
  box22.score();
  box23.display();
  box23.score();
  box24.display();
  box24.score();
  box25.display();
  box25.score();
  slingshot.display();
  pentagon.display();
  //drawSprites();
  textSize(30);
  fill("white");
  text("score :"+ score,740,50);
}
function mouseDragged(){
  Matter.Body.setPosition(pentagon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(pentagon.body);
  }
}
async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime=responseJSON.datetime;
  var hour=datetime.slice(11,13);
  console.log(hour);
  if(hour>=06&&hour<=18){
      bg = "bg.png";
  }
  else{
      bg = "bg2.jpg";
  }
  backgroundImg=loadImage(bg);
}