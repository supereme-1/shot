var wall,thickness;

var bullet,speed,weight;





function setup() {
  createCanvas(1600,400);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  car = createSprite(50,200,50,50);
  
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(grey);
  bullet.shapeColor = color(golden);
  bullet.velocityX = speed;
 
}

function draw() {
  background(0);
  if(wall.x-bullet.x<wall.width/2+bullet.width/2){
    bullet.velocityX = 0;
    var damage = 0.5 *weight*speed*speed/thickness*thickness*thickness;
    if(damage<10){
      wall.shapeColor= "green";
    }
    if(damage>10){

    wall.shapeColor = "red";
    }
  }
  


  
  drawSprites();
}