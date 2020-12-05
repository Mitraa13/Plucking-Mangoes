class tree
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.treeWidth=500;
		this.treeHeight=600;
		this.wallThickness=10;
		
		this.image=loadImage("images/tree.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.treeWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(0, this.y-this.treeHeight/2, this.wallThickness, this.treeHeight, {isStatic:false})
		this.rightWallBody=Bodies.rectangle(this.x+this.treeWidth/2, this.y-this.treeHeight/2, this.wallThickness, this.treeHeight, {isStatic:false})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var pos=this.bottomBody.position;
			push()
			translate(pos.x, pos.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.treeHeight/2,this.treeWidth, this.treeHeight)
			pop()
			
	}

}