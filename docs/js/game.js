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
        setTimeout(() => {
            this.powerups.push(new Powerup("powerup"));
        }, Math.floor(Math.random() * (25000 - 15000) + 15000));
        this.gameLoop();
    }
    gameLoop() {
        if (this.player.getLives() != 0) {
            for (let c of this.clouds) {
                c.update();
            }
            for (let e of this.enemies) {
                e.update();
                let hit = this.checkCollision(e.getRectangle(), this.player.getRectangle());
                if (hit) {
                    e.killEnemy();
                    if (this.player.getShield() === false) {
                        this.player.setLive();
                    }
                }
            }
            for (let b of this.player.bullets) {
                b.update();
                for (let e of this.enemies) {
                    let hit = this.checkCollision(b.getRectangle(), e.getRectangle());
                    if (hit) {
                        e.killEnemy();
                        b.removeBullet();
                    }
                }
            }
            for (let p of this.powerups) {
                p.update();
                let hit = this.checkCollision(p.getRectangle(), this.player.getRectangle());
                if (hit) {
                    this.player.setShield();
                    p.removePowerup();
                    const shieldActivated = new Audio('./sounds/shieldActivated.wav');
                    shieldActivated.play();
                    setTimeout(() => {
                        this.player.setShield();
                        const shieldDown = new Audio('./sounds/shieldDown.wav');
                        shieldDown.play();
                        setTimeout(() => {
                            this.powerups.push(new Powerup("powerup"));
                        }, Math.floor(Math.random() * (100000 - 15000) + 15000));
                    }, 15000);
                }
            }
            this.player.update();
            requestAnimationFrame(() => this.gameLoop());
        }
        else {
            let game = document.querySelector("body");
            let gameOverTitle = document.createElement("h1");
            game === null || game === void 0 ? void 0 : game.appendChild(gameOverTitle);
            gameOverTitle.innerText = "Game Over";
            gameOverTitle.classList.add("gameover");
            const gameOver = new Audio('./sounds/gameOver.wav');
            gameOver.play();
        }
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