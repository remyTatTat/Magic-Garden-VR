
class Sky {

  constructor(r, g, b, radius) {

    this.r = r
    this.g = g
    this.b = b
    this.radius = radius

    this.sky = new Sphere({
  	 		x: 0, y: 0, z: 0,
  	 		red: 130, green: 130, blue: 130,
  	 		radius: this.radius, asset: 'clouds',
        rotationX: -180,
        repeatX: 15, repeatY: 15
  	 	})
   	world.add(this.sky)

  }

  spin() {
    this.sky.spinY(0.05)
  }

  update(clock) {

  }

}
