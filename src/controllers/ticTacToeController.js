import TicTacToeModel from '../models/ticTacToeModel.js';
import TicTacToeView from '../views/tictactoe.js';
import ticTacToeDomEvents from '../domEvents/ticTacToeDomEvents.js';

function registerDomEvents() {
    ticTacToeDomEvents.handleStateChange();
    ticTacToeDomEvents.reset()
}

function announceWinner(state) {
    TicTacToeView.announceWinner(state);
}
function announceDraw() {
    TicTacToeView.announceDraw();
}

function initialize () {
    const gameArray = TicTacToeModel.initializeState();
    document.getElementById('app').innerHTML = TicTacToeView.drawGameState(gameArray);
    registerDomEvents();
}

function changeState (index, state) {
    TicTacToeView.updateGameState(index, state);
}
export default {
    initialize,
    changeState,
    announceWinner,
    announceDraw
}