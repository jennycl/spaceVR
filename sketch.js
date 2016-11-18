// our VR world object
var world;

function setup() {
  // no canvas needed
  noCanvas();
    var sky = select("sky");
  
  // create a VR World (tell it to look for the 'VRScene' id for our scene tag)
  world = new World('VRScene');
  
  	// sphere primitive
	var mercury = new Sphere({
						x:-10, y:5, z:0,
						radius: .1,
						material:{
						  asset:'mercury'
						}
						
					});
	world.add(mercury);
	
	  	// sphere primitive
	var venus = new Sphere({
						x:-7, y:5, z:0,
						radius: .2,
						material:{
						  asset:'venus'
						}
					});
	world.add(venus);
	
	  	// sphere primitive
	var earth = new Sphere({
						x:-5, y:5, z:0,
						radius: .4,
						material:{
						  asset:'earth'
						}
					});
	world.add(earth);
	
	  	// sphere primitive
	var mars = new Sphere({
						x:-8, y:5, z:0,
						radius: .4,
						material:{
						  asset:'mars',
						}
					});
	world.add(mars);
	
	  	// sphere primitive
	var jupiter = new Sphere({
						x:-3, y:5, z:0,
						radius: 1,
						material:{
						  asset:'jupiter',
						}
					});
	world.add(jupiter);
	
	  	// sphere primitive
	var saturn = new Sphere({
						x:-1, y:5, z:0,
						radius: 1,
						material:{
						  asset:'saturn',
						}
					});
	world.add(saturn);
	  	// sphere primitive
	var uranus = new Sphere({
						x:3, y:5, z:0,
						radius: .6,
						material:{
						  asset:'uranus',
						}
					});
	world.add(uranus);
	
	  	// sphere primitive
	var neptune = new Sphere({
						x:5, y:5, z:0,
						radius: .5,
						material:{
						  asset:'neptune',
						}
					});
	world.add(neptune);
	
		
	  	// sphere primitive
	var pluto = new Sphere({
						x:5, y:5, z:0,
						radius: .1,
					  material:{
					    asset:'pluto'
					  }
					});
	world.add(pluto);
	
	
	
	// ring primitive
	var r = new Ring({
						x: 8 , y:1, z:0,
						radiusInner:0.5,
						radiusOuter: 1,
						side: 'double',
						red:random(255), green:random(255), blue:random(255),
					});
	world.add(r);
	
 
  // textureLoader.load('images/earth.jpg',function(texture)){
    
  // }
 
}



function draw() {
    /*
  if (mouseIsPressed){
    world.moveUserForward(.1);
  }*/
  
}