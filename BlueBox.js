class BlueBox{
  constructor(x, y, width, height){
    var options={
      isStatic:false,
      restitution:1
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    this.visibility = 255;
    World.add(world,this.body);
  }
  display(){
    var angle = this.body.angle;
    if(this.body.speed<3){
      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      fill("lightblue");
      rect(0, 0, this.width, this.height);
      pop();
    }
    else{
      World.remove(world,this.body);
      push();
      this.visibility=this.visibility-5;
      tint(255,this.visibility);
      pop();
    }
  }
    score(){
      if(this.visibility<0&&this.visibility>-105){
        score++;
      }
    }
  
};
