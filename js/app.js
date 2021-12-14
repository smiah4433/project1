const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')

let speed = 7;

function drawGame() {
  // console.log('draw game');
  clearScreen()
  setTimeout(drawGame, 1000/ speed)

}

function clearScreen() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0,0,canvas.width,canvas.height);
// console.log(clearScreen);
}
console.log(clearScreen);


drawGame()
