
class Ground {

  constructor(x, y, z, w, h, asset, repeat) {

    this.x = x
    this.y = y
    this.z = z
    this.w = w
    this.h = h
    this.asset = asset
    this.repeat = repeat

    this.ground = new Plane({
      x: this.x, y: this.y, z: this.z,
      red: 120, green: 120, blue: 120,
      width: this.w, height: this.h,
      rotationX: -90, repeatX: this.repeat, repeatY: this.repeat,
      asset: this.asset
    })
    world.add(this.ground)

  }

  adjustHeight() {
    // test
  }

}
