export class StartScreen {
    constructor(game) {
        console.log("StartScreen");
        const gameElement = document.querySelector('game');
        this.element = document.createElement("startscreen");
        gameElement.appendChild(this.element);
        this.game = game;
        const holder = document.createElement("div");
        this.element.appendChild(holder);
        const text = document.createElement("h1");
        const btn = document.createElement("button");
        holder.appendChild(text);
        holder.appendChild(btn);
        text.innerText = "Pigeon Shooter";
        btn.innerText = "START GAME";
        btn.addEventListener("click", () => this.gotoGameScreen());
    }
    gotoGameScreen() {
        this.element.remove();
        this.game.showGameScreen();
    }
    update() { }
}
//# sourceMappingURL=startscreen.js.map