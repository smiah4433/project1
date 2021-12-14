const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')

let speed = 7;
tileCount = 20;
let tileSize = canvas.width / tileCount -2
let headX = 10
let headY = 10

//moving our snake
let xVelocity = 0
let yVelocity = 0

// game loop
function drawGame() {
  // console.log('draw game');
  clearScreen()
  changeSnakePosition()
  drawSnake()
  setTimeout(drawGame, 1000/ speed)

}

function clearScreen() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0,0,canvas.width,canvas.height);
// console.log(clearScreen);
}
console.log(clearScreen);

function drawSnake() {
  ctx.fillStyle = 'orange'
  ctx.fillRect(headX * tileCount, headY * tileCount, tileSize,tileSize)
}

function changeSnakePosition(){
  headX = headX + xVelocity
  headY = headY + yVelocity

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
