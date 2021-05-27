import { Cloud } from "./cloud.js";
import { Player } from "./player.js";
import { Powerup } from "./powerup.js";
class Game {
    constructor() {
        this.clouds = [];
        this.powerups = [];
        console.log("Game was created!");
        for (let i = 0; i < 30; i++) {
            this.clouds.push(new Cloud());
        }
        this.player = new Player;
        this.powerups.push(new Powerup());
        this.gameLoop();
    }
    gameLoop() {
        for (let c of this.clouds) {
            c.update();
        }
        for (let i = 0; i < this.player.bullets.length; i++) {
            this.player.bullets[i].update();
        }
        for (let i = 0; i < this.powerups.length; i++) {
            this.powerups[i].update();
            let hit = this.checkCollision(this.powerups[i].getRectangle(), this.player.getRectangle());
            if (hit) {
                console.log("collision");
            }
        }
        this.player.update();
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