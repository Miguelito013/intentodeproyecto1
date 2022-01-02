var box
function setup() {
  createCanvas(800,800);
  box=createSprite(200,200,50,50);
}

function draw() 
{
  background(30);

  if(keyIsDown(RIGHT_ARROW)){
  box.position.x=box.position.x+5;
  }

  if(keyIsDown(LEFT_ARROW)){
 box.position.x=box.position.x-5;
  }
drawSprites();

}




