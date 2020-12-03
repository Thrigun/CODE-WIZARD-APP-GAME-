var player_Running,player,Out_player;

var invisible_ground,ground;

var coins,coins_Up,CoinsGroup,spawnCoins;

var score=0;

var gameState=PLAY;

var END=1;

var PLAY=0;

var Rocks,RockImg,RockGroup,spawnRocks;

var Bird_fly,bird,spawnBirds,BirdGroup;

var Trophy;

var jumpSound;

function preload() {
  
  
   RockImg=
     loadImage("stone.png");
                          
      BackgroundMusic=loadSound("ringtones_don_old-Don-Ringtone.mp3")                    
  

  
  
  player_Running = loadAnimation("Player1.JPG", "Player1 (2).JPG", "Player1 (3).JPG", "Player1 (4).JPG", "Player1(5).JPG", "Player1(6).JPG", "Player1 (7).JPG", "Player1(8).JPG");
  
  
  
  coins_Up=loadAnimation("Coin1.JPG","Coin2.JPG","Coin3.JPG","Coin4.JPG","Coin5.JPG","Coin6.JPG");
  
  
  Out_player=loadAnimation("Player1 (2).JPG")
  
  
  
 groundImg=loadImage("Ground for game.JPG");
  
  TrophyImg=loadImage("Trophy.JPG");
  
  Bird_fly=loadAnimation("Bird1.png","Bird2.png","Bird3.png","Bird4.png","Bird5.png","Bird6.png","Bird7.png","Bird8.png","Bird9.png")
  
}

function setup() {
  createCanvas(400, 400);
  
  BackgroundMusic.loop();
  
  CoinsGroup = new Group();
  RocksGroup = new Group();
  BirdGroup = new Group();
  
  
  ground=createSprite(300,365,100,10);
  ground.addImage(groundImg);
  ground.scale=1.5;
  
  player = createSprite(25, 300, 10, 10);
  player.addAnimation("run", player_Running);
  player.addAnimation("Out",Out_player)
  player.scale = 1.0;

  invisible_ground = createSprite(20, 325, 600, 5);
  invisible_ground.visible = false;
  
  player.setCollider("rectangle",0,0,30,player.height);
  player.debug=false;
}



function draw() {
  
background("white");

    
    
   
    
    
  
  

  
  
  drawSprites();
  
  textSize(20);
  fill("red");
  stroke("blue");
  text("Press Space to Jump",150,60);
  
  textSize(20);
  fill("gold");
  text("Take that Trophy!  by reaching score of 25!",10,30)
   
 if (keyDown("space")&&player.y>=280) {
     
     

    player.velocityY = -20;
    

  }
    player.velocityY=player.velocityY+1.0;
    ground.velocityX=-(4 + 3* score/2);
 
    
  
  
  if(ground.x<10){
    ground.x=300;
  }
 

  player.collide(invisible_ground);
  
  
  if(CoinsGroup.isTouching(player)){
    CoinsGroup.destroyEach();
    score=score+1;
  }
   
  
  if(score==10){
   
   
    spawnBirds();
  }
  
  

  spawnCoins();
  spawnRocks();
  
  
  
  fill("blue");
  stroke("red");
  textSize(20);
  text("Score:"+score,60,60);
    
      if(RocksGroup.isTouching(player)||BirdGroup.isTouching(player)||score==25){
    
        gameState=END;
       
  }
  
  
   
   if (gameState===END){
     
   
     
     textSize(25);
     fill("red");
     text(" Press'F'to restart",100,250);
     textSize(20);
     text("Game Over!",150,200);
     
      RocksGroup.destroyEach();
  CoinsGroup.destroyEach();
     BirdGroup.destroyEach();
   ground.velocityX=0;
     player.changeAnimation("Out",Out_player);
     
     
     if (keyDown("space")&&player.y>=280) {

    player.velocityY = 0;

  }
     
     if(keyDown("f")){
       player.changeAnimation("run",player_Running);
       gameState=PLAY;
       score=0;
      
     }
 }
 
     
     if(gameState===END&&score==25){
       
       
       
       
    Trophy=createSprite(100,100,100,10);
    Trophy.addImage(TrophyImg);
    Trophy.scale=1.0;
       
       
      textSize(25);
     fill("red");
      stroke("golden");
     text("Wow! You Won",100,300);
     }
     
     
     
  
  
  
 
  
   
} 
   
  
  
  
  
    
   
   

   
   
  

   
  

  
 
  
 function spawnRocks(){
  if(World.frameCount%80===0){
    Rocks=createSprite(430,300,10,10);
    Rocks.addImage(RockImg);
    Rocks.scale=0.2;
    Rocks.lifetime=600;
    Rocks.velocityX=-7;
    RocksGroup.add(Rocks)
  }
}



function spawnCoins(){
  if(World.frameCount%100==0){
  coins = createSprite(400, 130, 10, 10);
  coins.y=Math.round(random(100,160));
  coins.addAnimation("catch", coins_Up);
  coins.scale = 0.5;
  coins.lifetime=600;
  coins.velocityX=-5;
    CoinsGroup.add(coins);
  }
  
}
   

 function spawnBirds(){
  if(World.frameCount%100==0){
  bird = createSprite(420, 100, 10, 10);
  bird.y=Math.round(random(100,150));
  bird.addAnimation("fly", Bird_fly);
  bird.scale = 0.5;
  bird.lifetime=600;
  bird.velocityX=-5;
    BirdGroup.add(bird);
  }
  
}
  
 
   
    
    

  






  
  


