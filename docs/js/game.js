import { Cloud } from "./cloud.js";
class Game {
    constructor() {
        this.clouds = [];
        console.log("Game was created!");
        for (let i = 0; i < 20; i++) {
            this.clouds.push(new Cloud());
        }
        this.gameLoop();
    }
    gameLoop() {
        for (let c of this.clouds) {
            c.update();
        }
        requestAnimationFrame(() => this.gameLoop());
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
}
new Game();
//# sourceMappingURL=game.js.map