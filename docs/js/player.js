import { Bullet } from "./bullet.js";
export class Player {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.yspeed = 0;
        this.bullets = [];
        console.log("Player was created");
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
        this.create();
    }
    getRectangle() {
        return this.div.getBoundingClientRect();
    }
    create() {
        this.div = document.createElement("player");
        this.div.classList.add("player");
        document.body.appendChild(this.div);
        this.x = 100;
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
    }
    update() {
        this.y += this.yspeed;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
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