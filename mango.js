class mango{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		
		this.image=loadImage("sprites/mango.png");
		World.add(world, this.image);
	}

	display()
	{
		var mangoPos=this.image.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		imageMode(CENTER);
		rotate(this.image.angle)
		fill(255,0,255)
		imageMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
}