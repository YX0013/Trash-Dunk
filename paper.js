class Paper {
    constructor(x,y) {
        var options={
            isStatic: false,
            restitution: 0.3,
            friction: 0,
            density: 1.2
		}
		this.x=x;
		this.y=y;
		this.r=20;
        this.image = loadImage("paper.png");
		this.body=Bodies.circle(x, y, 30, options);
 		World.add(world, this.body);
    }
    display() {
        var paperPos=this.body.position;		
        push();
	    translate(paperPos.x, paperPos.y);
		imageMode(CENTER);
		fill(128,128,128)
		image(this.image, 0, 0, 100, 100);
		pop();
    }
}