
var world
var ground

var seeds = []
var flowers = []
var ground = []
var grass = []
var flies = []

var skyDawn
var skyDay
var skyNoon
var skyDusk
var skyNight

var ambience

function preload() {

  music = loadSound('sounds/staleCupcakes.mp3')
  swoosh = loadSound('sounds/swoosh.mp3')
  blop = loadSound('sounds/blop.mp3')
  click = loadSound('sounds/click.mp3')

  world = new World('VRScene')

  var tree1 = new Tree(0, 13, 0, 'mother_obj', 'mother_mtl', 10)

  var tree1 = new Tree(-40, 18, -40, 'tree_obj', 'tree_mtl', 5)
  // var tree2 = new Tree(-20, 18, -40, 'tree_obj', 'tree_mtl', 5)
  var tree3 = new Tree(0, 18, -40, 'tree_obj', 'tree_mtl', 5)
  // var tree4 = new Tree(20, 18, -40, 'tree_obj', 'tree_mtl', 5)
  var tree5 = new Tree(40, 18, -40, 'tree_obj', 'tree_mtl', 5)

  var tree6 = new Tree(-40, 18, 40, 'tree_obj', 'tree_mtl', 5)
  // var tree7 = new Tree(-20, 18, 40, 'tree_obj', 'tree_mtl', 5)
  var tree8 = new Tree(0, 18, 40, 'tree_obj', 'tree_mtl', 5)
  // var tree9 = new Tree(20, 18, 40, 'tree_obj', 'tree_mtl', 5)
  var tree10 = new Tree(40, 18, 40, 'tree_obj', 'tree_mtl', 5)

  // var tree11 = new Tree(-40, 18, -40, 'tree_obj', 'tree_mtl', 5)
  // var tree12 = new Tree(-40, 18, -20, 'tree_obj', 'tree_mtl', 5)
  var tree13 = new Tree(-40, 18, 0, 'tree_obj', 'tree_mtl', 5)
  // var tree14 = new Tree(-40, 18, 20, 'tree_obj', 'tree_mtl', 5)
  // var tree15 = new Tree(-40, 18, 40, 'tree_obj', 'tree_mtl', 5)

  // var tree16 = new Tree(40, 18, -40, 'tree_obj', 'tree_mtl', 5)
  // var tree17 = new Tree(40, 18, -20, 'tree_obj', 'tree_mtl', 5)
  var tree18 = new Tree(40, 18, 0, 'tree_obj', 'tree_mtl', 5)
  // var tree19 = new Tree(40, 18, 20, 'tree_obj', 'tree_mtl', 5)
  // var tree20 = new Tree(40, 18, 40, 'tree_obj', 'tree_mtl', 5)

}

function setup() {
  frameRate(60)
  noCanvas()
  noiseDetail(24)
  this.yOffset = random(0, 1000)
  music.setVolume(0.5)
  swoosh.setVolume(0.25)
  click.setVolume(0.4)
  // music.loop()

  // skyDawn = new Sky(255, 240, 199, 500)
  // skyDay = new Sky(212, 235, 255, 505)
  // skyNoon = new Sky(170, 220, 255, 510)
  // skyDusk = new Sky(255, 180, 133, 515)
  skyNight = new Sky(13, 27, 118, 520)

  var ground = new Ground(0, 0, 0, 100, 100, 'grassGround', 100)
  // var plaza = new Ground(2, 0, 2, 10, 10, 'stone', 5)

  let grassX = -50
  let grassZ = -50
  let counter = 1

  for (let i = 0; i < 1000; i++) {
    flies.push(new Firefly(random(-5, 5), random(3, 5), random(-4, 4)))
  }

  for (let i = 0; i < 2500; i++) {
    if (grassX >= 50) {
      if (counter == 2) {
        grassX = -50
        counter++
        // console.log(2)
      } else if (counter == 3) {
        grassX = -47
        // console.log(3)
        counter = 1
      } else {
        grassX = -43
        counter++
        // console.log(1)
      }
      grassZ += 0.5
    }
    grass.push( new Grass(grassX, 0.2, grassZ) )
    grassX += 8.25
  }

}

// let firstSwoosh = true
function mousePressed() {
  blop.play()
  /*if (firstSwoosh) {
    swoosh.play()
    firstSwoosh = false
  }*/
  var newSeed = new Seed();
	seeds.push(newSeed);
  // firstSwoosh = true
}

var seedPos

var clock = 0
var timer = 0
var musicClock = 0
var musicTime = 0

let counter = 1
let musicFirst = true

function draw() {

  if (musicFirst) {
    music.play()
    musicFirst = false
  }

  if (musicClock % 60 == 0) {
    // console.log('second')
    musicTime++
    // console.log(musicTime)
  }
  if (musicTime == 152) {
    musicTime = 0
    music.stop()
    musicFirst = true
  }
  musicClock++

  clock++

  /*skyDawn.spin()
  skyDay.spin()
  skyNoon.spin()
  skyDusk.spin()*/
  skyNight.spin()

  for (let i = 0; i < flies.length; i++) {
    flies[i].move()
  }

  for (let i = 0; i < seeds.length; i++) {
		seeds[i].shoot()

		seedPos = seeds[i].seed.getWorldPosition()

		if (seedPos.x > 50 || seedPos.x < -50 || seedPos.z > 50 || seedPos.z < -50) {
			world.remove(seeds[i].container)
			seeds.splice(i, 1)
			i--
			continue
		}

    if (seedPos.y < 0) {
      seedPos.y = 0
      click.play()
      if (counter == 1) {
        // console.log('new flower')
        flowers.push( new Flower(seedPos.x, seedPos.y, seedPos.z, counter) )
      }
      seeds.splice(i, 1)
      i--;
      counter++
      if (counter == 3) {
        counter = 0
      }
    }
	}

  for (let i = 0; i < flowers.length; i++) {
    flowers[i].rotate()
    if (!flowers[i].stemFullyGrown || !flowers[i].headFullyGrown) {
      flowers[i].growStem(clock)
    }
  }

  if (clock == 60) {
    clock = 0
  }
}
