import { GameScreen } from "./gamescreem.js"
import { StartScreen } from "./startscreen.js"

export class Game {

    private screen : StartScreen | GameScreen;

    constructor(){
        this.screen = new StartScreen(this);
        this.gameLoop();
    }

    public showGameScreen(){
        this.screen = new GameScreen();
    }

    private gameLoop(){
        this.screen.update();
        requestAnimationFrame(()=>this.gameLoop());
    }
}

new Game();