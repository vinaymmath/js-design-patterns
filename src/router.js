import InitializeHome from "./controllers/homeController.js";
import About from "./views/about.js"
import TicTacToe from "./controllers/ticTacToeController.js";

const routes = {
    '#/': TicTacToe.initialize,
    '#/about': About,
    '#/home': InitializeHome.initialize
}

function notFoundTemplate () {
    document.getElementById("app").innerHTML = `
        <h1>
            404: Not Found
        </h1>
        <br>
        <h3>
            Available routes
        </h3>
        <ul class="available-routes-list">
            ${Object.keys(routes).map(route => `
                <li>
                    <a href='${route}'>
                        ${route}
                    </a>
                </li>
                `).join('\n') }
            </ul>
        `;
}

export async function router () {
    const hash = location.hash;
    const respectiveController = routes[hash] || notFoundTemplate;
    await respectiveController();
    // document.getElementById('app').innerHTML = viewTemplate;
}