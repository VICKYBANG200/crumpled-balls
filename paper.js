class Paper {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':1.0,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y,20,20, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0, this.width, this.height);
      pop();
    }
  };
  