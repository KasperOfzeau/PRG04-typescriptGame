export class StartScreen {
    constructor(game) {
        console.log("StartScreen");
        const gameElement = document.querySelector('game');
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
    gotoGameScreen() {
        var _a;
        (_a = document.querySelector('startscreen')) === null || _a === void 0 ? void 0 : _a.remove();
        this.game.showGameScreen();
    }
    update() { }
}
//# sourceMappingURL=startscreen.js.map