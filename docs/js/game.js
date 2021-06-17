import { GameScreen } from "./gamescreem.js";
import { StartScreen } from "./startscreen.js";
export class Game {
    constructor() {
        this.screen = new StartScreen(this);
        this.gameLoop();
    }
    showGameScreen() {
        this.screen = new GameScreen();
    }
    gameLoop() {
        this.screen.update();
        requestAnimationFrame(() => this.gameLoop());
    }
}
new Game();
//# sourceMappingURL=game.js.map