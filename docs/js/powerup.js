export class Powerup {
    constructor() {
        this.xspeed = 0;
        console.log("Powerup was created");
        this.create();
    }
    create() {
        this.div = document.createElement("powerup");
        document.body.appendChild(this.div);
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
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    setPowerup() {
    }
    getRectangle() {
        return this.div.getBoundingClientRect();
    }
}
//# sourceMappingURL=powerup.js.map