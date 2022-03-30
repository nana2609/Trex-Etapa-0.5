var trex, trex_running, edges;
var groundImage;
var ground;

//função

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  //criando o trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adicione dimensão e posição ao trex
  ground = createSprite(200,180,400,30);
  ground.addImage ("ground",groundImage);
  trex.scale = 0.5;
  trex.x = 50;
}


function draw(){
  //definir a cor do plano de fundo 
  background("white");
  
  //registrando a posição y do trex
  ground.velocityX = -2
  if (ground.x <0 ) {
    ground.x = ground.width / 2; 
  }

  //pular quando tecla de espaço for pressionada
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
 //impedir que o trex caia
  trex.collide(ground);
  drawSprites();
}