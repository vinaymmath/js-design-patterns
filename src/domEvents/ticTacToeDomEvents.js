import DomEventsHandler from "../common/DomEventsHandler.js";
import TicTacToeModel from "../models/ticTacToeModel.js";
import ticTacToeController from "../controllers/ticTacToeController.js";
function handleStateChange() {
    DomEventsHandler.attachEventToClass('game-state', 'click', TicTacToeModel.fillCell)
}

function reset() {
    DomEventsHandler.attachEventToId('resetBtn', 'click', ticTacToeController.initialize)
}

export default {
    handleStateChange,
    reset
}