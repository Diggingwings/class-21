var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
 car=createSprite(200,200,50,50)
 car.shapeColor='blue'
 car.velocityX=3
  wall=createSprite(500,200,50,100)
  wall.shapeColor='grey'
}

function draw() {
  background("white");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 
bounceoff(car,wall)
  if (isTouching(movingRect,car) || isTouching(movingRect,wall) || isTouching(movingRect,fixedRect)){
    textSize(30);
    text("They are Touching",300,300);
  }
  else{
    textSize(30);
    text("They are not",300,300);
  }

  drawSprites();
}
