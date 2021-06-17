import { Game } from "./game.js";

export class StartScreen {

    private game : Game;
    private element : HTMLElement;
    
    constructor(game:Game) {
        console.log("StartScreen")
        const gameElement = document.querySelector('game') as HTMLElement;
        this.element = document.createElement("startscreen");
        gameElement.appendChild(this.element);

        this.game = game;
        
        const text = document.createElement("div");
        const btn = document.createElement("button");

        this.element.appendChild(text);
        this.element.appendChild(btn);

        text.innerText = "Robot Clicker";
        btn.innerText = "START GAME";
        
        btn.addEventListener("click", () => this.gotoGameScreen());
    }

    private gotoGameScreen(){
        document.querySelector('startscreen')?.remove();
        this.game.showGameScreen();
    }

    public update() {}

}