
var car,wall;
var speed,weight;

function setup() 
{
createCanvas(1600,400);
background("black");
 
speed=random(223,321);
weight=random(30,52);


car=createSprite(50, 200, 50, 50);
wall=createSprite(1200,200,height/2);
wall.shapeColor="gray";

car.velocityX = speed;
}

function draw() {
  background("white");  
 

  if(hasCollided(car,wall)){
    car.velocityX=0;
    var damage = 0.5*weight*speed*speed/22509;
    if(damage>10){
      wall.shapeColor="red";
    }
    if(damage<10){
      wall.shapeColor="green";
    }
     
    }
  
  
  drawSprites();
}

function hasCollided(car1,wall1){
    
  carRightEdge=car1.x +car1.width;
  wallLeftEdge=wall1.x;
  if (carRightEdge>=wallLeftEdge)
  {
      return true
  }
  return false;

}