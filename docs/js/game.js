import { Cloud } from "./cloud.js";
import { Enemy } from "./enemy.js";
import { Player } from "./player.js";
import { Powerup } from "./powerup.js";
let game = document.querySelector("body");
class Game {
    constructor() {
        var _a, _b;
        this.clouds = [];
        this.enemies = [];
        this.powerups = [];
        this.gameScore = 0;
        console.log("Game was created!");
        this.gameStats = document.createElement("gamestats");
        game === null || game === void 0 ? void 0 : game.appendChild(this.gameStats);
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
        let liveHolder = document.createElement("lives");
        for (let i = 0; i < this.player.getLives(); i++) {
            let life = document.createElement("life");
            life.style.backgroundImage = "url(./images/life.png)";
            liveHolder.appendChild(life);
        }
        (_a = this.gameStats) === null || _a === void 0 ? void 0 : _a.appendChild(liveHolder);
        let scoreHolder = document.createElement("score");
        (_b = this.gameStats) === null || _b === void 0 ? void 0 : _b.appendChild(scoreHolder);
        let scoreString = `Score: 0`;
        scoreHolder.innerHTML = scoreString;
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
                    let liveHolder = document.querySelector("lives");
                    liveHolder.innerHTML = "";
                    for (let i = 0; i < this.player.getLives(); i++) {
                        let life = document.createElement("life");
                        life.style.backgroundImage = "url(./images/life.png)";
                        liveHolder.appendChild(life);
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
                        this.gameScore += 50;
                        console.log(this.gameScore);
                        let scoreHolder = document.querySelector("score");
                        let scoreString = `Score: ${this.gameScore}`;
                        scoreHolder.innerHTML = scoreString;
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
            let gameOverTitle = document.createElement("h1");
            let yourScore = document.createElement("h2");
            game === null || game === void 0 ? void 0 : game.appendChild(gameOverTitle);
            game === null || game === void 0 ? void 0 : game.appendChild(yourScore);
            gameOverTitle.innerText = "Game Over";
            yourScore.innerText = `Your score: ${this.gameScore}`;
            gameOverTitle.classList.add("gameover");
            yourScore.classList.add("yourscore");
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