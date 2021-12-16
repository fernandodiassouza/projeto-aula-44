const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var ground
var groundOptions = {
  isStatic:true
}

var ball
var ballOptions = {
    restitution:1.85,
    frictionAir:0.01
}

function setup() {
  createCanvas(400,400)
  engine = Engine.create()//criando mecanismo

  world = engine.world // criando mundo

  ground = Bodies.rectangle(200,370,400,20,groundOptions)

  ball = Bodies.circle(100,10,20,ballOptions)// criar um corpo circular

  World.add(world,ball) // adicionando objeto ao mundo
  World.add(world,ground)

  rectMode(CENTER)

  ellipseMode(RADIUS)
}

function draw() 
{
  background(200)
  Engine.update(engine)// e pra atualizar meu mecanismo
  ellipse(ball.position.x,ball.position.y,20)// e pra aparecer na tela B)
  rect(ground.position.x,ground.position.y,400,20)

}

