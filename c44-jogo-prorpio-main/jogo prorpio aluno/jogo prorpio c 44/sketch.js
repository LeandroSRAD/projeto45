var buraco,buracoImg;
var crianças,criançasImg;
var campo,campoImg;
var moeda,moedaImg;
var pá,páImg;
var poçaDeÁgua,poçaDeÁguaImg;
var ronaldo,ronaldoImg;
var background,backgroundImg;
var ball;

function preload() {
  buracoImg = loadImage("Buraco.gif");
  criançasImg = loadImage("Crianças.jpg");
  campoImg = loadImage("Campo.jpg");
  moedaImg = loadImage("Moeda.png");
  páImg = loadImage("Pá.jpg");
  poçaDeÁguaImg = loadImage("PoçaDeÁgua.jpg");
  ronaldoImg = loadImage("Ronaldo.jpg");
}

function setup() {
  canvas = createCanvas(2000,1000);
  crianças = createSprite(250,500,100,100);
  crianças.addImage("crianças",criançasImg);
  crianças.scale = 1.7;

}

function draw() {
  background("white");
  image(campoImg,0,0,2000,1000);

  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
