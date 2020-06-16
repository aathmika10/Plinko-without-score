var particles = [];
var plinkos = [];
var divider = [];

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var score =0;
var engine, world;
var dividerHeight=300
function setup() {
  createCanvas(800,800);
  engine= Engine.create();
  world= engine.world;

  for(var k=0; k<=width; k=k+80){
 divider.push(new Divider(k, height-dividerHeight/2, 10, dividerHeight));
}

for (var j = 75; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,75));
}

for (var j = 50; j <=width-10; j=j+50) 
{

   plinkos.push(new Plinko(j,175));
}

 for (var j = 75; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,275));
}

 for (var j = 50; j <=width-10; j=j+50) 
{

   plinkos.push(new Plinko(j,375));
}
  ground = new Ground(400,height,800,20);
  
}

function draw() {
  background("black");  
  textSize(20);
  //text("score:"+score,20,30);
  Engine.update(engine);
  fill("brown")
  ground.display();
 for (var i = 0; i < plinkos.length; i++) {
     
  plinkos[i].display();
  
}
if(frameCount%60===0){
  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  score++;
}
for (var j = 0; j < particles.length; j++) {
   
  particles[j].display();
}

for(var k=0; k<divider.length; k++){

  divider[k].display();

}
}