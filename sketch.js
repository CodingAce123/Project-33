const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var maxSnow = 25;
var snowarray=[];
var bg="snow3.jpg";
var bgimg;

function preload(){
bgimg = loadImage("snow3.jpg");
//getTime();
}

function setup(){
createCanvas(1300,700);

engine = Engine.create();
world = engine.world;

for(var i=0; i<maxSnow; i++){
snowarray.push(new Snowfall(random(0,600),random(0,100)));
}
}

function draw(){
background(bgimg);
Engine.update(engine);

for(var i=0; i<maxSnow; i++){
snowarray[i].display();
snowarray[i].update();
}

drawSprites();
}

async function getTime(){
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJSON = await response.json();
var dateTime = responseJSON.datetime;
var hour = dateTime.slice(11,13);
if(hour<=06 && hour>=1930){
bg = "snow2.jpg";
}
else{
bg = "snow3.jpg";
}
bgimg = loadImage(bg);
}

