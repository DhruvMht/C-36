var canvas, database, backgroundImg;
var gameState = 0;
var playerCount;
var form, game, player;
var allPlayers;

function setup(){
  database = firebase.database();
  canvas = createCanvas(displayWidth, displayHeight);

 }

function draw(){
  background("white");
  
   
    drawSprites();
  
}


