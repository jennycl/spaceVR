var world;
var sky;
var mercury, venus, earth, mars, jupiter, saturn, saturn_planet, neptune, uranus, pluto; 
var sound, travel;
var particles = [];
var satellite;
var my_satellite, cyl, right_panel_one, right_panel_two, left_panel_one, left_panel_two;
var path_last, path_next_last, path_mid;
// offsets for movement of satellites
var xOffset = 10;
var yOffset = 2005;

function preload(){
  // load sound
  sound = loadSound('sounds/star-wars.mp3');
  travel = loadSound('sounds/move.mp3');
}

function setup() {
  // no canvas needed
  noCanvas();
  
  // Perlin noise
  noiseDetail(24);
  
  // create a VR World (tell it to look for the 'VRScene' id for our scene tag)
  world = new World('VRScene');
  
  // set the sky
  sky = select('sky');
   
  // create a new particles
  for (var i=0 ; i < 50; i++){
    var temp = new Particle(random(-2500, 2500), random(-2500, 2500), random(-2500, 2500));
  	// add to array
  	particles.push( temp );
  }
  
  // create a path to move away from planets quickly
  path_last = new Path(-1250);
  path_next_last = new Path(-750);
  path_mid = new Path(-250);
  
  // create mercury
	mercury = new Sphere({
						x:-200, y:200, z:0,
						radius: .100,
						scaleX:50,
						scaleY:50,
						scaleZ:50,
						asset:'mercury'
	});
	world.add(mercury);
	
	// create venus
	venus = new Sphere({
						x:-160, y:200, z:0,
						radius: .248,
						scaleX:50,
						scaleY:50,
						scaleZ:50,
						asset:'venus'
	});
	world.add(venus);
	
  // create earth
  earth = new Sphere({
						x:-110, y:200, z:0,
						radius: .261,
						scaleX:50,
						scaleY:50,
						scaleZ:50,
						asset:'earth',
						// if earth clicked, play sound if not already playing
						clickFunction: function(){
						  if(!sound.isPlaying()){
						    sound.play();
						  }
						}
	});
	world.add(earth);
	
  // create mars
	mars = new Sphere({
						x:-65, y:200, z:0,
						radius: .139,
						scaleX:50,
						scaleY:50,
						scaleZ:50,
						asset: 'mars'
	});
	world.add(mars);
	
  // create jupiter
	jupiter = new Sphere({
						x:200, y:200, z:0,
						radius: 2.927,
						scaleX:50,
						scaleY:50,
						scaleZ:50,
						asset:'jupiter',
						// click on jupiter to change it's color
						clickFunction: function(thePlanet){
        		  thePlanet.setRed(random(255));
        		  thePlanet.setBlue(random(255));
        		  thePlanet.setGreen(random(255));
  		      }
	});
	world.add(jupiter);
	
	// create saturn
  saturn = new Container3D({x:450, y:200, z:0,
            scaleX:50,
						scaleY:50,
						scaleZ:50,
  });
	world.add(saturn);
  
  // create saturn planet
  saturn_planet = new Sphere({
						x:3, y:0, z:0,
						radius: 2.473,
						asset:'saturn'
	});
  saturn.addChild(saturn_planet);
  
  // create saturn ring
	var saturn_ring = new Ring({
						x: 3 , y:0, z:0,
						radiusInner: 2.673,
						radiusOuter: 3.973,
					  metalness:0.25,
					  rotationY: 90,
					  rotationX: 120,
  					red:255, green:200, blue:200
	});
  saturn.addChild(saturn_ring);
  
	// create uranus
	uranus = new Sphere({
						x:950, y:200, z:0,
						radius: 1.047,
						scaleX:50,
						scaleY:50,
						scaleZ:50,
						asset:'uranus'
	});
	world.add(uranus);
	
	// create neptune
  neptune = new Sphere({
						x:1250, y:200, z:0,
						radius: 1.015,
						scaleX:50,
						scaleY:50,
						scaleZ:50,
					  asset:'neptune'
	});
	world.add(neptune);
	
	// create pluto
	pluto = new Sphere({
						x:1350, y:200, z:0,
						radius: .047,
				  	scaleX:50,
						scaleY:50,
						scaleZ:50,
					  asset:'pluto'
	});
	world.add(pluto);

  // add a satellite 3D model using a collada file
  satellite = new DAE({
    x:0, y:0, z:500,
    asset: 'model',
    scaleX:100,
	  scaleY:100,
	  scaleZ:100,
	  rotationX: 70,
	  rotationY: 110,
	  rotationZ: 20
  });
  world.add(satellite);

  // create own satellite using Box and Cylinder objects
  my_satellite = new Container3D({
    x:300, y:0, z:-200,
    scaleX:50,
	  scaleY:50,
	  scaleZ:50,
	  rotationX: 20,
	  rotationY: 10,
	  rotationZ: 20
  });
  world.add(my_satellite);

  cyl = new Cylinder({
            x:0, y:0, z:0,
						height:2,
						radius:0.05,
						// metalness: 0.5,
						red:0, green:100, blue:205
					});
	my_satellite.addChild(cyl);
	
	left_panel_one = new Box({
	          x:-0.5, y:0.7, z:0,
	          width:0.5, height:0.5, depth:0.01,
	         // metalness: 0.5,
	          red:0, green:0, blue:255
	});
	my_satellite.addChild(left_panel_one);
 
  left_panel_two = new Box({
	          x:-0.5, y:0.1, z:0,
	          width:0.5, height:0.5, depth:0.01,
	         // metalness: 0.5,
	          red:0, green:0, blue:255
	});
	my_satellite.addChild(left_panel_two);
	
	right_panel_one = new Box({
	          x:0.5, y:0.7, z:0,
	          width:0.5, height:0.5, depth:0.01,
	         // metalness: 0.5,
	          red:0, green:0, blue:255
	});
	my_satellite.addChild(right_panel_one);
 
  right_panel_two = new Box({
	          x:0.5, y:0.1, z:0,
	          width:0.5, height:0.5, depth:0.01,
	         // metalness: 0.5,
	          red:0, green:0, blue:255
	});
	my_satellite.addChild(right_panel_two);
}

// used to build path of red blocks 
function Path(z){
  this.path = new Box({
						x:0, y:0, z:z, 
						width:10, height: 12, depth: 2,
						red:255, green:0, blue:0,
						clickFunction: function(theBox){
						  world.slideToObject(theBox, 1000);
						  travel.play();
						}
	});
	world.add(this.path);
}

// build astroids
function Particle(x, y, z){
  this.randomGrey = random(255);
  this.particle = new Dodecahedron({
      x:x, y:y, z:z,
			radius: 0.5,
			scaleX:50,
			scaleY:50,
			scaleZ:50,
			red:this.randomGrey, green:this.randomGrey, blue:this.randomGrey,
			clickFuntion: function(astroid){
			  world.slideToObject(astroid,1000);
			}
  });
  world.add(this.particle);
  
  // keep track of an offset in Perlin noise space
	this.xOffset = random(1000);
	this.yOffset = random(2000, 3000);
	this.zOffset = random(3000, 4000);
	
	// have the astroid move organically with Perlin noise, but randomly choose which direction to always move in
	this.whichConstant = (int) (random(0,3));
	// function to move
	this.move = function() {
	  if(this.whichConstant == 0){
	    // the particle should always move up by a small amount in the y direction
		  var yMovement = 0.5;
		  
		  // the particle should randomly move in the x & z directions
		  var xMovement = map( noise(this.xOffset), 0, 1, -0.5, 0.5);
		  var zMovement = map( noise(this.zOffset), 0, 1, -0.5, 0.5);
		
		  // update our poistions in perlin noise space
		  this.xOffset += 0.01;
		  this.zOffset += 0.01;
	  }
	  else if(this.whichConstant == 0){
	    // the particle should always move up by a small amount in the x direction
		  var xMovement = 0.5;
		  
		  // the particle should randomly move in the y & z directions
		  var yMovement = map( noise(this.yOffset), 0, 1, -0.5, 0.5);
		  var zMovement = map( noise(this.zOffset), 0, 1, -0.5, 0.5);
		
		  // update our poistions in perlin noise space
		  this.yOffset += 0.01;
		  this.zOffset += 0.01;
	  }
	  else{
	    // the particle should always move up by a small amount in the z direction
		  var zMovement = 0.5;
		  
		  // the particle should randomly move in the x & y directions
		  var xMovement = map( noise(this.xOffset), 0, 1, -0.5, 0.5);
		  var yMovement = map( noise(this.yOffset), 0, 1, -0.5, 0.5);
		
		  // update our poistions in perlin noise space
		  this.xOffset += 0.01;
		  this.yOffset += 0.01;
	  }

		// set the position of our box (using the 'nudge' method)
		this.particle.nudge(xMovement, yMovement, zMovement);
	}
}

function draw() {
  // move forward when mouse is pressed on screen touched
  if (mouseIsPressed || touchIsDown){
    world.moveUserForward(1);
  }
  
  // move all particles/ astroids
	for (var i = 0; i < particles.length; i++) {
	  particles[i].move();
	}
    
  // the particle should always move up by a small amount in the z direction
	var zMovement = -0.1;
  // the particle should randomly move in the x & y directions
	var xMovement = map( noise(xOffset), 0, 1, -0.15, 0.15);
	var yMovement = map( noise(yOffset), 0, 1, -0.15, 0.15);
	// update our poistions in perlin noise space
	xOffset += 0.01;
	yOffset += 0.01;
	
	// move both satelites
	my_satellite.nudge(xMovement,yMovement,zMovement);
	satellite.nudge(xMovement,yMovement,zMovement);
  
  // make all the planets spin on their axis
  mercury.spinY(0.5);
  venus.spinY(0.5);
  earth.spinY(0.5);
  mars.spinY(0.5);
  jupiter.spinY(0.5);
  saturn_planet.spinY(0.5);
  neptune.spinY(0.5);
  uranus.spinY(0.4); 
  pluto.spinY(0.5);
}