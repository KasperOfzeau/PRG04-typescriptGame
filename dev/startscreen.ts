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
        
        const holder = document.createElement("div");
        this.element.appendChild(holder);

        const text = document.createElement("h1");
        const btn = document.createElement("button");
        holder.appendChild(text);
        holder.appendChild(btn);

        text.innerText = "Pigeon War";
        btn.innerText = "START GAME";
        
        btn.addEventListener("click", () => this.gotoGameScreen());
    }

    private gotoGameScreen(){
        this.element.remove();
        this.game.showGameScreen();
    }

    public update() {}

}