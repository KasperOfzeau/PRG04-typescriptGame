import { Cloud } from "./cloud.js";

class Game {

    clouds : Cloud[] = [];

    constructor() {
        console.log("Game was created!");
        // Create clouds
        for (let i = 0; i < 20; i++) {
            this.clouds.push(new Cloud());
          }

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