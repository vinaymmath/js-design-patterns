function drawGameState(gameState = []) {
    return `
        <h3>Tic Tac Toe Game</h3>
        <div class="game-wrapper">
            <div class="game-cont">
                ${gameState.map((turn, index) => {
                    return `<div class='game-state' data-key=${index}>${turn}</div>`
                }).join('\n')}
            </div>
        </div>
        <h3 id="conclusion"></h3>
        <button id="resetBtn" class="reset-btn">Reset</button>
    `
}

function updateGameState(index, state) {
    const elements = document.getElementsByClassName('game-state');
    for(let i = 0; i < elements.length; i++){
        if(elements[i].dataset.key === index){
            elements[i].innerHTML = state;
        }
    }
}

function announceWinner(state) {
    document.getElementById('conclusion').innerHTML = `Winner is: ${state}!`
}

function announceDraw(){
    document.getElementById('conclusion').innerHTML = `End Game: Draw!`
}

export default {
    drawGameState,
    updateGameState,
    announceWinner,
    announceDraw
}