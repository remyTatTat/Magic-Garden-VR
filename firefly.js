class Firefly {

  constructor(x, y, z, radius){

    this.r = random(215, 255)
    this.g = random(207, 233)
    this.b = random(80, 200)

    this.xOffset = random(0, 1000)
    this.yOffset = random(0, 1000)
    this.zOffset = random(0, 1000)

    this.fly = new Sphere({
  						x: x , y: y, z: z,
  						radius: 0.02,
  						red: this.r, green: this.g, blue: this.b,
  					});
  	world.add(this.fly);

  }

  move() {
    var x = map(noise(this.xOffset), 0, 1, -1, 1)
    var y = map(noise(this.yOffset), 0, 1, -1, 1)
    var z = map(noise(this.zOffset), 0, 1, -1, 1)

    if (this.fly.x >= 200 || this.fly.x <= -200) {
      x *= -1
    }
    if (this.fly.y >= 100 || this.fly.y <= 10){
      y *= -1
    }
    if (this.fly.z >= 200 || this.fly.z <= -200){
      z *= -1
    }

    this.fly.nudge(x/13, y/13, z/13)

    /*let newR = Math.floor(this.r + random(-1, 1))
    let newG = Math.floor(this.g + random(-1, 1))
    let newB = Math.floor(this.b + random(-1, 1))

    // console.log("R: " + newR + " G: " + newG + " B: " + newB)

    if (newR < 215) {
      newR = 216
    } else if (newR > 255) {
      newR = 254
    }
    if (newG < 207) {
      newG = 208
    } else if (newG > 233) {
      newg = 232
    }
    if (newB < 80) {
      newB = 81
    } else if (newB > 200) {
      newB = 199
    }

    // console.log("R: " + newR + " G: " + newG + " B: " + newB)

    // this.fly.setColor(newR, newG, newB)
    */

    this.xOffset += 0.01
    this.yOffset += 0.01
    this.zOffset += 0.01
  }

  update() {
    if (this.on) {
      this.r = 255
      this.g = 240
      this.b = 158
    } else {
      this.r = random(50, 200)
      this.g = random(20, 100)
      this.b = random(20, 50)
    }
    this.fly.setColor(this.r, this.g, this.b)
  }

}
