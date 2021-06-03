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

        // Create powerups
        this.powerups.push(new Powerup("powerup"));

        this.gameLoop();
    }

    private gameLoop() {
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
                console.log("Enemy collision with player")
            }
        }
        // update bullets
        for (let b of this.player.bullets) {
            b.update();

            // Check collision with enemies
            for(let e of this.enemies) {
                let hit = this.checkCollision(b.getRectangle(), e.getRectangle());
                if(hit) {
                    console.log("Bullet collision with enemy")
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
                console.log("player collision with powerup")
            }
        }
        // update player 
        this.player.update();

        requestAnimationFrame(() => this.gameLoop());
    }

    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
     }
}

new Game();