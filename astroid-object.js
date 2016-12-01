// variable to hold a reference to our A-Frame world
var world;
var myDAE;
var astroid;

function setup() {
  noCanvas();
  world = new World('VRScene');
  // set our sky to the newly selected image
  // var sky = select('#theSky');
  myDAE = new DAE({asset:'model'});
  astroid = new Astroid(0,0,0);
}

function draw() {
  astroid.move();
}

function Astroid(x,y,z){
  this.myAstroid = new Container3D({
              x:x, y:y, z:z
  });

  this.randomTilt = function(){
    return random(0,1500)
  }
  this.tilt = this.randomTilt();
  this.astroidParts = new TorusKnot({
              x:x, y:y, z:z,
              rotationX: this.tilt,
              rotationZ: this.tilt,
              rotationY: this.tilt,
              radius:0.5,
              radiusTubular: 0.05,
              material: {
                red: 255, green: 0, blue: 0
              }
  });

  for(var i = 0; i < 20; i++){
	  this.myAstroid.addChild(this.astroidParts);
	  this.astroidParts.rotationX = this.randomTilt();
	  this.astroidParts.rotationY = this.randomTilt();
	  this.astroidParts.rotationZ = this.randomTilt();
	}
  world.add(this.myAstroid);
  
  // keep track of an offset in Perlin noise space
	this.yOffset = random(1000);
	this.zOffset = random(2000, 3000);
  
  this.move = function(){
    var xMovement = 0.01;
    var yMovement =  map( noise(this.yOffset), 0, 1, -0.05, 0.05);
    var zMovement =  map( noise(this.zOffset), 0, 1, -0.05, 0.05);
    
		this.yOffset += 0.01;
		this.zOffset += 0.01;
    
    this.myAstroid.nudge(xMovement, yMovement, zMovement);
  }
}
