import { Cloud } from "./cloud.js";
import { Player } from "./player.js";

class Game {

    clouds : Cloud[] = [];
    player : Player;

    constructor() {
        console.log("Game was created!");
        // Create clouds
        for (let i = 0; i < 20; i++) {
            this.clouds.push(new Cloud());
        }

        //Create player
        this.player = new Player;

        this.gameLoop();
    }

    gameLoop() {
        // update the clouds
        for(let c of this.clouds) {
            c.update();
        }

        requestAnimationFrame(() => this.gameLoop());
    }

    checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
     }
}

new Game();