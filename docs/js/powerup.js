import { CollisionGameObject } from "./collisiongameobject.js";
export class Powerup extends CollisionGameObject {
    constructor(tagName) {
        super(tagName);
        console.log("Powerup was created");
        this.create();
    }
    create() {
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth));
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        this.xspeed = 6;
    }
    update() {
        this.x -= this.xspeed;
        if (this.x + this.div.clientWidth * 2 < 0) {
            this.x = window.innerWidth + this.div.clientWidth;
            this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        }
        super.update();
    }
    setPowerup() {
    }
}
//# sourceMappingURL=powerup.js.map