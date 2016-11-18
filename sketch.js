// our VR world object
var world;

var container;

function setup() {
  // no canvas needed
  noCanvas();
  var sky = select("sky");
  
  var startX =0; 
  
  // create a VR World (tell it to look for the 'VRScene' id for our scene tag)
  world = new World('VRScene');
  
  	  	// sphere primitive
	var sun = new Sphere({
						x:startX-14, y:0, z:0,
						radius: 7,
						red:200, green:0, blue:0
					});

  world.add(sun);
  
  	// sphere primitive
	var mercury = new Sphere({
						x:startX-8, y:0, z:0,
						radius: .1,
						red:random(255), green:random(255), blue:random(255),
					});
	world.add(mercury);
	
	  	// sphere primitive
	var venus = new Sphere({
						x:startX-6, y:0, z:0,
						radius: .2,
						red:random(255), green:random(255), blue:random(255),
					});
	world.add(venus);
	
	  	// sphere primitive
	var earth = new Sphere({
						x:startX-4, y:0, z:0,
						radius: .3,
						red:0, green: 0, blue:255,
					});
	world.add(earth);
	
	  	// sphere primitive
	var mars = new Sphere({
						x:startX-2, y:0, z:0,
						radius: .35,
						red:random(255), green:random(255), blue:random(255),
					});
	world.add(mars);
	
	  	// sphere primitive
	var jupiter = new Sphere({
						x:startX, y:0, z:0,
						radius: 1,
						red:random(255), green:random(255), blue:random(255),
					});
	world.add(jupiter);
	
	/*
  container = new Container3D({
	  x: startX+8, y: 0, z:0
	});*/
	
	container = new Container3D({x:startX+4, y:0, z:0});
	
	world.add(container);
	
	  	// sphere primitive
	var saturn = new Sphere({
						x:0, y:0, z:0,
						radius: 1,
						red:200, green:0, blue:0
					});

  container.addChild(saturn);
		// ring primitive
	var r = new Ring({
						x: 0 , y:0, z:0,
						radiusInner:1.2,
						radiusOuter: 1.5,
						side: 'double',
						rotationX:-70,
						red:random(255), green:random(255), blue:random(255),
					});
  container.addChild(r);


	  	// sphere primitive
	var uranus = new Sphere({
						x:startX+8, y:0, z:0,
						radius: .6,
						red:random(255), green:random(255), blue:random(255)
					});
	world.add(uranus);
	
	  	// sphere primitive
	var neptune = new Sphere({
						x:startX+10, y:0, z:0,
						radius: .5,
						red:random(255), green:random(255), blue:random(255)
					});
	world.add(neptune);
	
		
	  	// sphere primitive
	var pluto = new Sphere({
						x:startX+12, y:0, z:0,
						radius: .1,
						red:random(255), green:random(255), blue:random(255)
					});
	world.add(pluto);
  
  // torusKnot primitive
	var tok = new TorusKnot({
						x: 12 , y:1, z:0,
						radius:0.5,
						radiusTubular: 0.05,
						red:random(255), green:random(255), blue:random(255),
					});
	world.add(tok);	
	
 
}

function draw() {


  	if (mouseIsPressed || touchIsDown) {
		world.moveUserForward(0.05);
	}
	
}