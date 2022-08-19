var principal, principalWalk
var fundo, fundoImg
var barra, barraAtiva


function preload(){
  
  principalWalk = loadImage ("assets/Boneco1A.png")
  fundoImg = loadImage("assets/Cenário-Vila.png")
}

function setup() {
  //createCanvas(500,500);

  createCanvas(windowWidth,windowHeight);
  
    





   principal = createSprite(1458,620);
   principal.addImage("bonecoimg", principalWalk)
   principal.scale = 0.06


  

  //imageMode(CENTER)
}

function draw() {
  //background(fundoImg)
  background = createSprite(windowWidth, windowHeight)
  background.addImage("bgimg", fundoImg)
  background.scale = 0.8
  background.depth = -1
  






  
  follow();
  walk();
  showHunger()
  drawSprites();
}



