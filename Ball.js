class Ball{
    constructor(x,y,radius){
       var options={
     restitution:0.3,
         friction:0.7,
         density:0.8
       }
       this.body=Bodies.circle(x,y,radius,options);
       this.radius=20

       

       World.add(world,this.body)
    }
    display(){
        rectMode(CENTER)
        var pos=this.body.position
        circle(pos.x,pos.y,20);
    }
}