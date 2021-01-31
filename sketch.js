var fixedRect, movingRect;
var car1,car2,car3, wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car1 = createSprite(200, 200, 80, 50);
  car2 = createSprite(200, 300, 80, 50);
  car3 = createSprite(200, 500, 80, 50);
  wall = createSprite(1000, 400, 20, 700);
  car1.velocityX=4;
}

function draw() {
  background(0,0,0); 
  
 
  car2.x = World.mouseX;
  car2.y = World.mouseY;

  
  
  if(istouching(car2,wall)){
    car2.shapeColor = "red";
    wall.shapeColor = "red";
  }
  else{
    car2.shapeColor = "green";
    wall.shapeColor = "green";
  }
bounceoff(car1,wall);

  drawSprites();
}
