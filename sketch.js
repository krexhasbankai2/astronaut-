function preload() {
  bg=loadImage("iss.png")
  sleep=loadAnimation("sleep.png")
  brush=loadAnimation("brush.png")
  gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
  eat =loadAnimation("eat1.png","eat2.png")
  drink=loadAnimation("drink1.png","drink2.png")
  move=loadAnimation("move.png","move1.png")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  astronaut=createSprite(300,230)
  astronaut.addAnimation("sleeping",sleep);
  astronaut.addAnimation("brushing",brush);
  astronaut.scale=0.1;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  

if(keyIsDown(UP_ARROW)){
  
  astronaut.changeAnimation("brushing",brush);
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}
  if(keyIsDown(DOWN_ARROW)){
    
    astronaut.changeAnimation("sleeping",sleep);
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0; 

}

if(keyIsDown(LEFT_ARROW)){
  astronaut.changeAnimation("drinking",drink);
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;

}
}