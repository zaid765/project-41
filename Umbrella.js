class Umbrella{

    constructor(x,y){
        var options = {
           isStatic:true
        }
        this.image=loadImage("images/Walking Frame/walking_1.png");
        this.body = Bodies.circle(x,y,200,options);
        World.add(world,this.body);
        this.radius = 500;
    }  
    display(){
        fill("blue");
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,500,500);
    }

}