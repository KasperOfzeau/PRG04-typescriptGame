import { Bullet } from "./bullet.js";
import { CollisionGameObject } from "./collisiongameobject.js";
export class Player extends CollisionGameObject {
    constructor(tagName) {
        super(tagName);
        this.yspeed = 0;
        this.bullets = [];
        this.lives = 3;
        console.log("Player was created");
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
        this.create();
    }
    create() {
        this.div.classList.add("player");
        this.x = 100;
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
    }
    update() {
        this.y += this.yspeed;
        super.update();
    }
    setLive() {
        if (this.lives != 0) {
            this.lives -= 1;
            console.log(this.lives);
        }
    }
    getLives() {
        return this.lives;
    }
    onKeyDown(e) {
        switch (e.key.toUpperCase()) {
            case "W":
            case "ARROWUP":
                this.yspeed = -5;
                break;
            case "S":
            case "ARROWDOWN":
                this.yspeed = 5;
                break;
        }
    }
    onKeyUp(e) {
        switch (e.key.toUpperCase()) {
            case "W":
            case "S":
            case "ARROWUP":
            case "ARROWDOWN":
                this.yspeed = 0;
                break;
            case " ":
                this.bullets.push(new Bullet());
                break;
        }
    }
}
//# sourceMappingURL=player.js.map