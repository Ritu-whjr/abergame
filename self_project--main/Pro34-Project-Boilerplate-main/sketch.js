
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var backgroundd
var helicopter
var medicine
var hel;
function preload (){

  city = loadImage("background.webp");
  helicopter = loadImage("heliheli.png");
  medicine = loadImage("medicine.png");
}


function setup() {
  createCanvas(1200,800);

//   engine = Engine.create();
//   world = engine.world;
//  var  helicopter_options = {
//     isStatic:true,
//   }
 // helicopter = Bodies.rectangle(50,-150,10,10,helicopter_options)
 //bg= createSprite(0,200,1200,800);
 //bg.addImage(city);
 hel = createSprite(400,100,50,50);
 hel.addImage(helicopter);
 hel.scale=0.9;
 console.log(hel.position.x);
// med=createSprite(hel.x,hel.y,20,20)
  //World.add(world,helicopter)
 
 //creating medicine 
  //var medicine_options = {
   // restitution:0.05,
 // }
 // medicine = createImg(medicine.png)
 // medicine.position(50,50)
 // medicine.size(50,50)
  
  // if(keyIsDown(RIGHT_ARROW)){
  // medicine = Bodies.rectangle(50,50,50,50,medicine_options)
  // World.add(world,medicine)
  // }
}


function draw() 
{
background(city);
  //Engine.update(engine);
 planeMovement();
  
//  image (helicopter.position.x,helicopter.position.y,200,200)
//   rect(medicine.position.x,medicine.position.y,50,50)
  drawSprites();
}
function planeMovement(){
 // console.log("i am here");
  if(keyDown("UP_ARROW")){
   // console.log(" i am here too ");
      hel.position.x= hel.position.x+5;
      //console.log(hel.x)
    
     
  }
}
