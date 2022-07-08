
class Flower {

  constructor(x, y, z, count) {

    this.x = x
    this.y = y
    this.z = z
    this.width = 0.01
    this.heightHead = 0.01
    this.heightStem = 0.01
    this.stemFullyGrown = false
    this.headFullyGrown = false

    // console.log("X: " + this.x + " Z: " + this.z)

    this.yHead = 1
    this.maxWidth = 0.4
    this.maxHeightStem = 2
    this.maxHeightHead = 0.4

    if ((this.x >= -5 && this.x <= 8) && (this.z >= -8 && this.z <= 8)) {
      // console.log('close! 1')
      this.maxWidth = 2
      this.maxHeightHead = 2
      this.maxHeightStem = 7
      this.yHead = 3.5
    } else if ((this.x >= -12.5 && this.x <= 12.5) && (this.z >= -12.5 && this.z <= 12.5)) {
      // console.log('close! 2')
      this.maxWidth = 1.35
      this.maxHeightHead = 1.35
      this.maxHeightStem = 5.5
      this.yHead = 2.25
    } else if ((this.x >= -15 && this.x <= 15) && (this.z >= -15 && this.z <= 15)) {
      // console.log('close! 3')
      this.maxWidth = 1
      this.maxHeightHead = 1
      this.maxHeightStem = 4
      this.yHead = 2
    } else if ((this.x >= -17.5 && this.x <= 17.5) && (this.z >= -17.5 && this.z <= 17.5)) {
      // console.log('close! 4')
      this.maxWidth = 0.5
      this.maxHeightHead = 0.5
      this.maxHeightStem = 2.5
      this.yHead = 1.25
    }

    this.flowerVal = random(1, 10)
    this.flowerType = 'flower' + Math.floor(this.flowerVal).toString()

    this.stem = new Plane({
      x: this.x, y: this.y, z: this.z - 0.2,
      red: 70, green: 8, blue: 8,
      width: 0.01, height: this.heightStem,
      side: 'double'
    })
    world.add(this.stem)

    this.head = new Plane({
      x: this.x, y: this.yHead, z: this.z - 0.189,
      red: 120, green: 120, blue: 120,
      width: this.width, height: this.heightHead,
      asset: this.flowerType, opacity: 0.9,
      side: 'double'
    })
    world.add(this.head)

  }

  growStem(clock) {

    if (this.heightStem < this.maxHeightStem) {
      this.heightStem *= 1.03
    } else if (this.heightStem >= this.maxHeightStem) {
      this.heightStem = this.maxHeightStem
      this.stemFullyGrown = true
    }

    this.stem.setHeight(this.heightStem)

    //console.log(this.heightStem)

    if (this.stemFullyGrown) {

      if (this.width < this.maxWidth) {
        this.width *= 1.01
        this.heightHead *= 1.01
      } else if (this.width >= this.maxWidth) {
        this.width = this.maxWidth
        this.heightHead = this.maxHeightHead
        this.headFullyGrown = true
      }
      this.head.setWidth(this.width)
      this.head.setHeight(this.heightHead)

    }

    if (clock % 1 == 0) {

      /*if (this.y < 1) {
        this.head.setY(this.y += 0.01)
      } else if (this.y >= 1) {
        this.head.setY(1)
      }*/
    }

  }

  rotate() {
    this.head.spinZ(0.5)
  }

}
