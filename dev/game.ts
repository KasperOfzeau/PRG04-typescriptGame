import { Cloud } from "./cloud.js";
import { Player } from "./player.js";
import { Powerup } from "./powerup.js";

class Game {

    private clouds : Cloud[] = [];
    private player : Player;
    private powerups : Powerup[] = [];

    constructor() {
        console.log("Game was created!");
        // Create clouds
        for (let i = 0; i < 30; i++) {
            this.clouds.push(new Cloud());
        }

        //Create player
        this.player = new Player;

        // Create powerups
        this.powerups.push(new Powerup());

        this.gameLoop();
    }

    private gameLoop() {
        // update the clouds
        for(let c of this.clouds) {
            c.update();
        }
        // update bullets
        for (let i = 0; i < this.player.bullets.length; i++) {
            this.player.bullets[i].update();
        }
        // loop trough powerups
        for (let i = 0; i < this.powerups.length; i++) {
            // update powerups
            this.powerups[i].update();

            // check collision with powerups
            let hit = this.checkCollision(this.powerups[i].getRectangle(), this.player.getRectangle());
            if(hit) {
                console.log("collision")
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