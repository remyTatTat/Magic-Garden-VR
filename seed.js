
class Seed {

	constructor() {

		var userPosition = world.getUserPosition()
		var userRotation = world.getUserRotation()

		this.container = new Container3D({
			x: userPosition.x,
			y: userPosition.y,
			z: userPosition.z,
			rotationX: userRotation.x,
			rotationY: userRotation.y,
			rotationZ: userRotation.z
		});
		world.add(this.container);

    this.seed = new Sphere({
      x: 0, y: 0, z: 0,
      red: 20, green: 0, blue: 0,
      radius: 0.05
    })
    this.container.addChild(this.seed)
	}

	shoot() {
		this.seed.nudge(0,0,-0.1)
    if (this.seed.getY >= 0) {
      this.seed.setY(0)
    }
	}

}
