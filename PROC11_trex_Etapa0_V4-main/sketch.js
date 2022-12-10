var jugar = 1;
var perder = 0;
var gameState=jugar;
var trex ,trex_running;
var edges;
var ground,grouding,invisible;
var nubeImg, nubes;
var cactus,cactus2,cactus3,cactus4,cactus5;
var gruponubes,grupocactus;
function preload(){
 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
grouding=loadImage("ground2.png");
nubeImg=loadImage("cloud.png");
cactus=loadImage("obstacle1.png");
cactus2=loadImage("obstacle2.png");
cactus3=loadImage("obstacle3.png");
cactus4=loadImage("obstacle4.png");
cactus5=loadImage("obstacle5.png");
cactus6=loadImage("obstacle6.png");
}

function setup(){
  createCanvas(600,200)
  //crear sprite de Trex
 trex=createSprite(50,160,20,50)
 trex.addAnimation("running",trex_running);
 trex.scale=0.7;
//piso
ground=createSprite(180,180,600,20);
ground.addImage(grouding)
invisible=createSprite(200,190,600,10)
invisible.visible=false
gruponubes=createGroup();
grupocactus=createGroup();

 edges=createEdgeSprites();
 
}


function draw(){
  background(190)
  

if (gameState === jugar){
  ground.velocityX=-2;

  if(ground.x < 0){
    ground.x=ground.width/2
  }
    if(keyDown("space") && trex.y >= 100){
      trex.velocityY=-10;
    }
      trex.velocityY=trex.velocityY+0.8;  
      trex.collide(invisible);
      crearNubes();
      crearCactus();
      if (grupocactus.isTouching(trex)){
        gameState=perder;
      }
}else if (gameState === perder){
ground.velocityX=0;
trex.velocityY=0;
}


drawSprites();
}

  
  


  
  
 

//nubes
function crearNubes (){
  if(frameCount % 60 === 0){
    var nube = createSprite(600,30,30,10);
    nube.addImage(nubeImg);
    nube.y=Math.round(random(10,70))
    nube.velocityX=-3;
    nube.depth=trex.depth;
    trex.depth=trex.depth+3;
    nube.lifetime=250
    gruponubes.add(nube);
  }
  
}

//funcion de obstaculos
function crearCactus (){
  if(frameCount % 60 === 0){
    var cactus01 = createSprite(600,160,20,10);
    var num = Math.round(random(1,6));
    switch(num){
      case 1:cactus01.addImage(cactus);break;
      case 2:cactus01.addImage(cactus2);break;
      case 3:cactus01.addImage(cactus3);break;
      case 4:cactus01.addImage(cactus4);break;
      case 5:cactus01.addImage(cactus5);break;
      case 6:cactus01.addImage(cactus6);break;
      
    }
    cactus01.velocityX=-5.1;
    cactus01.scale=0.7;
    cactus01.lifetime=150
    grupocactus.add(cactus01);
  }

}