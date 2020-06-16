class Plinko{
    constructor(x,y){
        var options={
            'restitution':1,
            'friction':0,
            'isStatic':true
        }
        this.x=x;
        this.y=y;
        this.r=10;
        this.body=Bodies.circle(this.x,this.y,(this.r),options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0,0,this.r,this.r)
        pop();
    }
  }