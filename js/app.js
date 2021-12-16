const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')

//snake parts for the body
class SnakePart {
  constructor(x, y) {
    this.x = x;
    this.y = y;

  }
}



let speed = 7;
let tileCount = 24;
let tileSize = canvas.width / tileCount -2
let headX = 10
let headY = 10
const snakeParts = [];
let tailLength = 0
//variable to add to your head(makes the snake longer)(tail)
let orangeX = 5
let orangeY = 5

//moving our snake
let xVelocity = 0
let yVelocity = 0

//game score
let score = 0

// game loop
function drawGame() {
  changeSnakePosition()
  let result = isGameOver()
  if(result) {
      return
  }


  clearScreen()


  checkOrangeCollision()
  drawOrange()
  drawSnake()
  drawScore()
  setTimeout(drawGame, 1000/ speed)
}
// }

function isGameOver() {
  let gameOver = false

  if(yVelocity === 0 && xVelocity === 0) {
    return false
  }


  // walls
  if(headX < 0) { // if head touches left border = GameOver
      gameOver = true
  }

  if(headX > tileCount) { // if head touches right border = gameOver
      gameOver = true
  }

  if(headY < 0) {  // if head touches up  border = gameOver
      gameOver = true
  }

  if(headY > tileCount) { // if head touches down border = gameOver
      gameOver = true
  }

  // function checkCollision() {
  //   let tail = snakeParts[length-1]
  //   if(tail.x === headX && tail.y === headY){
  //     gameOver = true
  //   }
  // }
  // let tail = snakeParts[snakeParts.length-1]
  // if(tail.x ===headX && tail.y === headY){
  //   gameOver = true
  // }
  // gameOver = checkCollision(snakeParts)
  // console.log(gameOver);
  for (let i = 0; i < snakeParts.length; i++) {
      let part = snakeParts[i]
      if(part.x === headX && part.y === headY) {
        gameOver = true
        console.log(gameOver);
        break // ending the loop
      }

      // for (let j = i; j < snakeParts.length; j++) {
      //   if(part.x === snakeParts[j] && part.y === snakeParts[j]) {
      //     gameOver = true
      //     console.log(gameOver);
      //     break // ending the loop
      //   }
      //}
      // gameOver = true
      // break // ending the loop
  }

  if (gameOver) {
    ctx.fillStyle = "White"
    ctx.font = "50px Verdana"

    ctx.fillText("Game Over!", canvas.width / 9.5, canvas.height / 8)

  }
  return gameOver

}


function drawScore() {
  ctx.fillStyle = "White"
  ctx.font = "10px Verdana"
  ctx.fillText("Score" + score, canvas.width-50, 10);
}



function clearScreen() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0,0,canvas.width,canvas.height);
// console.log(clearScreen);
}
console.log(clearScreen);

function drawSnake() {
  // ctx.fillStyle = 'green'
  // ctx.fillRect(headX * tileCount, headY * tileCount, tileSize,tileSize)

  ctx.fillStyle = 'blue'
  for (let i = 0; i < snakeParts.length; i++) {
    let part = snakeParts[i]
    ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize)
  }
  //adding to tail
  snakeParts.push(new SnakePart(headX, headY))
  if (snakeParts.length > tailLength) {
    snakeParts.shift()
  }
  ctx.fillStyle = 'yellow'
  ctx.fillRect(headX * tileCount, headY * tileCount, tileSize,tileSize)


}

function changeSnakePosition(){
  headX = headX + xVelocity
  headY = headY + yVelocity

}

function drawOrange(){
  ctx.fillStyle = 'red'
  ctx.fillRect(orangeX * tileCount, orangeY * tileCount, tileSize,tileSize)
}

//collision detection- when head eats tail. Tail will dissappear and reappear randomly on the screen
function checkOrangeCollision() {
  if (orangeX === headX && orangeY === headY) {
    orangeX = Math.floor(Math.random() * tileCount)
    orangeY = Math.floor(Math.random() * tileCount)
    tailLength++
    score++

  }
}


document.body.addEventListener('keydown', keyDown);

function keyDown(event) {
  //up arrow
  if(event.keyCode == 38){
    if (yVelocity == 1) //if you're moving down and try to move up. Nothing will happen
      return;
    yVelocity = -1;
    xVelocity = 0;
  }
  //down arrow
  if(event.keyCode == 40){
    if (yVelocity == -1) //if you're moving up and try to move down. Nothing will happen
      return;
    yVelocity = 1;
    xVelocity = 0;
  }
  //right
  if(event.keyCode == 39){
    if (xVelocity == -1) //if you're moving left and try to move right. Nothing will happen
      return;
    yVelocity = 0;
    xVelocity = 1;
  }
  //left
  //right
  if(event.keyCode == 37){
    if (xVelocity == 1) //if you're moving left and try to move right. Nothing will happen
      return;
    yVelocity = 0;
    xVelocity = -1;
  }
}





drawGame()
