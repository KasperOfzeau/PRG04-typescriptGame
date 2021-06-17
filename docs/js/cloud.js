import { GameObject } from "./gameobject.js";
export class Cloud extends GameObject {
    constructor(tagName) {
        super(tagName);
        this.scale = 0;
        console.log("Cloud was created!");
        this.create();
    }
    create() {
        this.skin = Math.floor(Math.random() * (2 - 0) + 0);
        let cloudImages = ["url(./images/cloud1.png)",
            "url(./images/cloud2.png)"];
        this.div.style.backgroundImage = cloudImages[this.skin];
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth));
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        this.scale = Math.random() * (7 - 2) + 2;
        let zIndex = Math.floor(this.scale).toString();
        this.div.style.zIndex = zIndex;
        if (this.scale > 6.5) {
            this.div.style.zIndex = "1001";
        }
        this.xspeed = this.scale / 2;
    }
    update() {
        this.x -= this.xspeed;
        if (this.x + this.div.clientWidth * 3 < 0) {
            this.x = window.innerWidth + this.div.clientWidth;
            this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        }
        this.div.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale})`;
    }
}
//# sourceMappingURL=cloud.js.map