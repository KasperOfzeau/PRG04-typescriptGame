export class Player {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.yspeed = 0;
        console.log("Player was created");
        this.create();
    }
    create() {
        this.div = document.createElement("player");
        document.body.appendChild(this.div);
        this.x = 100;
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
//# sourceMappingURL=player.js.map