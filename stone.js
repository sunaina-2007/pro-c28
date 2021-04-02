class stone
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
		
		this.image=loadImage("sprites/stone.png");
		
		World.add(world, this.image);

	}
	display()
	{
var stonepos=this.image.position;		
push()
translate(stonepos.x, stonepos.y);
imageMode(CENTER)
rotate(this.image.angle)
fill(255,0,255)
imageMode(CENTER);
image(this.image, 0,0,this.r*2, this.r*2)
pop()
			
	}

}