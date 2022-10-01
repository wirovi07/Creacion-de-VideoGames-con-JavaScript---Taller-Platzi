const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame);
window.addEventListener('resize', startGame);


let canvasSize;
let elementsSize;

function startGame() {

  setCanvasSize();

  console.log({ canvasSize, elementsSize });

  game.font = elementsSize + 'px Verdana';
  game.textAlign = 'end';

   for (let i = 1; i <=10; i++) {
    game.fillText(emojis['X'], elementsSize , elementsSize *i);
  }

}

function setCanvasSize() {

    if (window.innerHeight > window.innerWidth) {
      canvasSize = window.innerWidth * 0.8;
    } else {
      canvasSize = window.innerHeight * 0.8;
    } 
    
    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);  
    
    elementsSize = canvasSize / 10;
    
}