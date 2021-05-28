const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var umbrella;
var maxDrops = 100;
var drops = [];
var thunder,thunder1,thunder2,thunder3,thunder4;
var thunderFrame = 0;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}
function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
    umbrella = new Umbrella(400,555)
    for(var i=0; i<maxDrops;i++){
        drops.push(new Drop(random(0,800),random(0,800)));
    }
}

function draw(){
    background(0);
    umbrella.display();
    
    if(frameCount%80 === 0){
        thunderFrame = frameCount;
        thunder = createSprite(random(10,390),random(10,30),10,10);
        thunder.addImage(thunder1);
        thunder.scale = random(0.3,0.6);
    }
    if(thunderFrame+10 === frameCount && thunder){
        thunder.destroy();
    }
    Engine.update(engine);
    for(var i=0;i<maxDrops;i++){
      drops[i].display();
      drops[i].update();  
    }   
}

