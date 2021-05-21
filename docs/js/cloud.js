export class Cloud {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xspeed = 0;
        this.scale = 0;
        console.log("Cloud was created!");
        this.create();
    }
    create() {
        this.div = document.createElement("cloud");
        document.body.appendChild(this.div);
        this.skin = Math.floor(Math.random() * (2 - 0) + 0);
        let cloudImages = ["url(./images/cloud1.png)",
            "url(./images/cloud2.png)"];
        this.div.style.backgroundImage = cloudImages[this.skin];
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth));
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        this.scale = Math.random() * (4 - 1) + 1;
        this.xspeed = this.scale / 2;
    }
    update() {
        this.x -= this.xspeed;
        if (this.x + this.div.clientWidth < 0) {
            this.x = window.innerWidth;
            this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        }
        this.div.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale})`;
    }
}
//# sourceMappingURL=cloud.js.map