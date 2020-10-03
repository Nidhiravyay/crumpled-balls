class Ball {
    constructor(x,y) {
        var options = {
            restitution : 0.5,density : 0.3
        }
        this.body = Bodies.circle(x,y,30,options);
        this.radius = 30;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("tomato");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }

}