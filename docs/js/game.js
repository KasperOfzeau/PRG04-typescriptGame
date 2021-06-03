import { Cloud } from "./cloud.js";
import { Enemy } from "./enemy.js";
import { Player } from "./player.js";
import { Powerup } from "./powerup.js";
class Game {
    constructor() {
        this.clouds = [];
        this.enemies = [];
        this.powerups = [];
        console.log("Game was created!");
        for (let i = 0; i < 30; i++) {
            this.clouds.push(new Cloud("cloud"));
        }
        this.player = new Player("player");
        for (let i = 0; i < 5; i++) {
            this.enemies.push(new Enemy("enemy"));
        }
        this.powerups.push(new Powerup("powerup"));
        this.gameLoop();
    }
    gameLoop() {
        for (let c of this.clouds) {
            c.update();
        }
        for (let e of this.enemies) {
            e.update();
            let hit = this.checkCollision(e.getRectangle(), this.player.getRectangle());
            if (hit) {
                console.log("Enemy collision with player");
            }
        }
        for (let b of this.player.bullets) {
            b.update();
            for (let e of this.enemies) {
                let hit = this.checkCollision(b.getRectangle(), e.getRectangle());
                if (hit) {
                    console.log("Bullet collision with enemy");
                }
            }
        }
        for (let p of this.powerups) {
            p.update();
            let hit = this.checkCollision(p.getRectangle(), this.player.getRectangle());
            if (hit) {
                console.log("player collision with powerup");
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