import { CollisionGameObject } from "./CollisionGameObject.js";
export class Enemy extends CollisionGameObject {
    constructor(tagName) {
        super(tagName);
        console.log("Enemy was created!");
        this.create();
    }
    create() {
        this.skin = Math.floor(Math.random() * (2 - 0) + 0);
        let cloudImages = ["url(./images/owl.gif)",
            "url(./images/falcon.png)"];
        this.div.style.backgroundImage = cloudImages[this.skin];
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth));
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        this.xspeed = 4;
    }
    update() {
        this.x -= this.xspeed;
        if (this.x + this.div.clientWidth * 2 < 0) {
            this.x = window.innerWidth + this.div.clientWidth;
            this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        }
        super.update();
    }
    killEnemy() {
        this.x = window.innerWidth + 50;
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
//# sourceMappingURL=enemy.js.map