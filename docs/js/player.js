import { Bullet } from "./bullet.js";
import { CollisionGameObject } from "./CollisionGameObject.js";
export class Player extends CollisionGameObject {
    constructor(tagName) {
        super(tagName);
        this.yspeed = 0;
        this.bullets = [];
        console.log("Player was created");
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
        this.create();
    }
    create() {
        this.x = 100;
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
    }
    update() {
        this.y += this.yspeed;
        super.update();
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
            case " ":
                this.bullets.push(new Bullet());
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
        }
    }
}
//# sourceMappingURL=player.js.map