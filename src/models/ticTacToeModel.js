import TicTacToeController from "../controllers/ticTacToeController";

let gameArray;
let currentState = "X";

const winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]

let winner;
let isGameDone = false;

function initializeState(){
    gameArray = new Array(9);
    gameArray.fill('');
    currentState = 'X';
    winner = null;
    isGameDone = false;
    return gameArray;
}

function changeCurrentState() {
    currentState = currentState === 'X' ? 'O': 'X';
}

function announceDraw(){
    TicTacToeController.announceDraw()
}
function announceWinner(state) {
    TicTacToeController.announceWinner(state)
}

function evaluateWinner() {
  for (let i = 0; i < winStates.length; i++) {
    const evalState = winStates[i];
    if (
        gameArray[evalState[0]] !== '' &&
        gameArray[evalState[0]] === gameArray[evalState[1]] &&
        gameArray[evalState[1]] === gameArray[evalState[2]]
    ) {
        winner = gameArray[evalState[0]]
        announceWinner(winner);
        break;
    }
    evaluateEndGame();
  }
}

function evaluateEndGame(){
    isGameDone = !gameArray.some(element => element === '');
    if(isGameDone){
        announceDraw();
    }
}
function fillCell(e){
    if(!winner && e.target.innerHTML === ''){
        gameArray[e.target.dataset['key']] = currentState;
        TicTacToeController.changeState(e.target.dataset['key'], gameArray[e.target.dataset['key']]);
        changeCurrentState();
        evaluateWinner();
    }
}


export default{
    initializeState,
    fillCell
}