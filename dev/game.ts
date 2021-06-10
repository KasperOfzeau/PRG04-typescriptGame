import { Cloud } from "./cloud.js";
import { Enemy } from "./enemy.js";
import { Player } from "./player.js";
import { Powerup } from "./powerup.js";

class Game {

    private clouds : Cloud[] = [];
    private player : Player;
    private enemies : Enemy[] = [];
    private powerups : Powerup[] = [];

    constructor() {
        console.log("Game was created!");
        // Create clouds
        for (let i = 0; i < 30; i++) {
            this.clouds.push(new Cloud("cloud"));
        }

        //Create player
        this.player = new Player("player");

        // Create enemies
        for (let i = 0; i < 5; i++) {
            this.enemies.push(new Enemy("enemy"));
        }

        // Create powerup on random time
        setTimeout(() => {
            this.powerups.push(new Powerup("powerup"));
        }, Math.floor(Math.random() * (25000 - 15000) + 15000));

        this.gameLoop();
    }

    private gameLoop() {
        if(this.player.getLives() != 0) {
            // update the clouds
            for(let c of this.clouds) {
                c.update();
            }
            // update the enemies
            for(let e of this.enemies) {
                e.update();

                // check collision with player
                let hit = this.checkCollision(e.getRectangle(), this.player.getRectangle());
                if(hit) {
                    e.killEnemy();
                    if(this.player.getShield() === false) {
                        this.player.setLive();
                    }
                }
            }
            // update bullets
            for (let b of this.player.bullets) {
                b.update();

                // Check collision with enemies
                for(let e of this.enemies) {
                    let hit = this.checkCollision(b.getRectangle(), e.getRectangle());
                    if(hit) {
                        e.killEnemy();
                        b.removeBullet();
                    }
                }
            }
            // loop trough powerups
            for (let p of this.powerups) {
                // update powerups
                p.update();

                // check collision with powerups
                let hit = this.checkCollision(p.getRectangle(), this.player.getRectangle());
                if(hit) {
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
            // update player 
            this.player.update();

            requestAnimationFrame(() => this.gameLoop());
        } else {
            let game = document.querySelector("body");
            let gameOverTitle = document.createElement("h1");
            game?.appendChild(gameOverTitle);

            gameOverTitle.innerText = "Game Over";
            gameOverTitle.classList.add("gameover");

            const gameOver = new Audio('./sounds/gameOver.wav');
            gameOver.play();
        }
    }

    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
     }
}

new Game();