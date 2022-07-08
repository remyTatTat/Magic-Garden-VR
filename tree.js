
class Tree {

  constructor (x, y, z, obj, mtl, scale) {

    this.x = x
    this.y = y
    this.z = z
    this.obj = obj
    this.mtl = mtl
    this.scale = scale

    this.tree = new OBJ({
  		asset: this.obj,
  		mtl: this.mtl,
  		x: this.x, y: this.y, z: this.z,
      red: 150, green: 150, blue: 105,
  		 rotationX: 0, rotationY: 45,
  		scaleX: this.scale, scaleY: this.scale, scaleZ: this.scale,
  	});
  	world.add(this.tree);

  }

}
