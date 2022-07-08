
class Grass {

  constructor(x, y, z) {

    this.x = x
    this.y = y
    this.z = z

    this.patch = new Plane({
      x: this.x, y: this.y, z: this.z,
      red: 50, green: 50, blue: 50,
      width: 8, height: 0.4,
      asset: 'grass', opacity: 0.9,
      repeatX: 2, side: 'double'
    })
    world.add(this.patch)

  }

}
