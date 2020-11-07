class Pentagon{
    constructor(x, y){
      var options={
        isStatic:false,
        restitution:1
      }
      this.body=Bodies.circle(x,y,50,options);
      this.radius=50;
      this.image=loadImage("1024px-Full_pentagon.svg.png");
      this.visibility = 255;
      World.add(world,this.body);
    }
    display(){
            var pos=this.body.position;
            imageMode(CENTER);
            image(this.image,pos.x,pos.y,50,50);
            pop();
          }
    
  };