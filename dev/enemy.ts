export class Enemy {

    private y : number;
    private x : number; 
    private xspeed : number = 0;
    private skin : number;
    private div : HTMLElement;

    constructor() {
        console.log("Enemy was created!");
        this.create();
    }

    private create() {
        this.div = document.createElement("enemy");
        document.body.appendChild(this.div);

        // Generate random skin 
        this.skin = Math.floor(Math.random() * (2 - 0) + 0);
        let cloudImages = ["url(./images/owl.gif)",
                           "url(./images/falcon.png)"];
        this.div.style.backgroundImage = cloudImages[this.skin];

        // Generate a random x and y value within de width and height of the viewport
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth));
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));

        this.xspeed = 4;
    }

    public update() {
        // Move the cloud (x-value) to the left. 
        this.x -= this.xspeed;
        // Check if the cloud is completely outside the screen (left side)
        if(this.x + this.div.clientWidth * 2 < 0) {
            // Place the cloud on the right side outside the screen
            this.x = window.innerWidth + this.div.clientWidth;
            // Generate a random y-value
            this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        }

        // Draw the fish on the right coordinate (x, y)
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }

    public killEnemy() {

    }

    public getRectangle() {
        return this.div.getBoundingClientRect();
    }
}