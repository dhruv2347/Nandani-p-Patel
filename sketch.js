var plane,planeImg
var cloud,cloudImg

function preload(){
 planeImg=loadImage("A1.png")
cloudImg=loadImage("cloud.jpg")
}

function setup(){
 createCanvas(2000,1000)

 cloud=createSprite(1000,500,2000,1000)
 cloud.addImage(cloudImg)
 cloud.scale=4.5

 plane=createSprite(100,500,10,10)
 plane.addImage(planeImg)
 plane.scale=0.5

 ground=createSprite(1000,989,2000,20)
 ground.shapeColor="green"
}

function draw(){
  background("black")
  if(keyDown("up_arrow")&& plane.y>=250){
    plane.velocityY=-10
  }
  plane.velocityY=plane.velocityY+0.5

  plane.collide(ground)
drawSprites()
}
