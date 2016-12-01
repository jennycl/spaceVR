// our VR world object
var world;
var container;

var  mercury, venus, earth, mars, jupiter, saturn, neptune, uranus, pluto; 

var sound; 

var particles = [];

function preload(){
  sound = loadSound('meow.wav');
}


function setup() {
  
 
  // no canvas needed
  noCanvas();
    var sky = select("sky");
  
  var startX= 0;
  // create a VR World (tell it to look for the 'VRScene' id for our scene tag)
  world = new World('VRScene');
  var k = 0; 
   // always create a new particle
  for (var i =0 ; i < 10; i++){
	  var temp = new Particle(0, 0, k);
  	// add to array
  	particles.push( temp );
  	k++;
  }

  
  	// sphere primitive
	mercury = new Sphere({
						x:-10, y:5, z:0,
						radius: .1,
						material:{
						  asset:'mercury'
						}
						
					});
	world.add(mercury);
	
	  	// sphere primitive
	venus = new Sphere({
						x:-7, y:5, z:0,
						radius: .2,
						material:{
						  asset:'venus'
						}
					});
	world.add(venus);
	
	  	// sphere primitive
 earth = new Sphere({
						x:-5, y:5, z:0,
						radius: .4,
						material:{
						  asset:'earth'
						},
						clickFunction: function(){
						  sound.play();
						}
					});
	world.add(earth);
	
	  	// sphere primitive
	mars = new Sphere({
						x:-3, y:5, z:0,
						radius: .4,
						material:{
						  asset:'mars',
						}
					});
	world.add(mars);
	
	  	// sphere primitive
	jupiter = new Sphere({
						x:-1, y:5, z:0,
						radius: 1,
						material:{
						  asset:'jupiter',
						}
					});
	world.add(jupiter);
	
  container = new Container3D({x:1, y:5, z:0});
	
	world.add(container);
	
	  	// sphere primitive
 saturn = new Sphere({
						x:3, y:0, z:0,
						radius: 1,
						material:{
						  asset:'saturn',
						}
					});

  container.addChild(saturn);
		// ring primitive
	var ring = new Ring({
						x: 3 , y:0, z:0,
						radiusInner:1.2,
						radiusOuter: 1.8,
					  rotationX:-40, metalness:0.25,
						material : {
  						red:255, green:200, blue:200
						}
					});
  container.addChild(ring);
  
	  	// sphere primitive
	uranus = new Sphere({
						x:8, y:5, z:0,
						radius: .6,
						material:{
						  asset:'uranus',
						}
					});
	world.add(uranus);
	
	  	// sphere primitive
  neptune = new Sphere({
						x:9, y:5, z:0,
						radius: .5,
						material:{
						  asset:'neptune',
						}
					});
	world.add(neptune);
	
		
	  	// sphere primitive
	pluto = new Sphere({
						x:10, y:5, z:0,
						radius: .1,
					  material:{
					    asset:'pluto'
					  }
					});
	world.add(pluto);
 
  // textureLoader.load('images/earth.jpg',function(texture)){
    
  // }
 
}

function Particle(x, y, z){
  
  this.thing = new Dodecahedron({
      x: -4, y:1, z:0,
			radius: 0.5,
			red:random(255), green:random(255), blue:random(255),
  });
  
  world.add(this.thing);
  
  // keep track of an offset in Perlin noise space
	this.xOffset = random(1000);
	this.zOffset = random(2000, 3000);
	
	// function to move our box
	this.move = function() {
		// compute how the particle should move
		// the particle should always move up by a small amount
		var yMovement = 0.01;
		
		// the particle should randomly move in the x & z directions
		var xMovement = map( noise(this.xOffset), 0, 1, -0.05, 0.05);
		var zMovement = map( noise(this.zOffset), 0, 1, -0.05, 0.05);
		
		// update our poistions in perlin noise space
		this.xOffset += 0.01;
		this.yOffset += 0.01;
		
		// set the position of our box (using the 'nudge' method)
		this.thing.nudge(xMovement, yMovement, zMovement);
	}
  
}


function draw() {
/*
  if (mouseIsPressed){
    world.moveUserForward(.1);
  }
  */
  
  // draw all particles
	for (var i = 0; i < particles.length; i++) {
	  particles[i].move();
		
	}
    
  mercury.spinX(0.5);
  venus.spinX(0.5);
  earth.spinY(0.5);
  mars.spinY(0.5);
  jupiter.spinY(0.5);
  saturn.spinY(0.5);
  neptune.spinY(0.5);
  uranus.spinY(0.4); 
  pluto.spinY(0.5);

  
}