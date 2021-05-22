export class Bullet {
    constructor() {
        this.x = 0;
        this.y = 0;
        console.log('Created Bullet');
        this.create();
    }
    create() {
        this.div = document.createElement("bullet");
        document.body.appendChild(this.div);
        this.x = 100;
        let player = document.querySelector(".player").getBoundingClientRect();
        let playery = player.top;
        this.y = playery + this.div.clientHeight;
    }
    update() {
        this.x += 10;
        if (this.x - this.div.clientWidth > window.innerWidth) {
            this.div.remove();
        }
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
//# sourceMappingURL=bullet.js.map