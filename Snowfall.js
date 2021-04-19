class Snowfall{
constructor(x,y){
var options = {
isStatic:false          
}
        
this.image = loadImage("snow4.webp")
this.snow = Bodies.circle(x,y,20,options);
this.radius = 30;
World.add(world,this.snow);
}

update(){
if(this.snow.position.y>height){
Matter.Body.setPosition(this.snow,{x:random(0,1300),y:random(0,100)});
}
}
display() {
var pos = this.snow.position;
imageMode(CENTER);
image(this.image,pos.x,pos.y,this.radius,this.radius);
}
}
  