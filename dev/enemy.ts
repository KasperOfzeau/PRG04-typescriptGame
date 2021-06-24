import { CollisionGameObject } from "./collisiongameobject.js";

export class Enemy extends CollisionGameObject {

    private skin : number;

    constructor(tagName : string) {
        super(tagName);
        console.log("Enemy was created!");
        this.create();
    }

    private create() {
        // Generate random skin 
        this.skin = Math.floor(Math.random() * (2 - 0) + 0);
        let cloudImages = ["url(./images/owl.gif)",
                           "url(./images/falcon.gif)"];
        this.div.style.backgroundImage = cloudImages[this.skin];

        // Generate a random x and y value within de width and height of the viewport
        this.x = window.innerWidth + 50;
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));

        this.xspeed = Math.floor(Math.random() * (9 - 4) + 4);
    }

    public update() {
        // Move the enemy (x-value) to the left. 
        this.x -= this.xspeed;
        // Check if the enemy is completely outside the screen (left side)
        if(this.x + this.div.clientWidth * 2 < 0) {
            // Place the enemy on the right side outside the screen
            this.x = window.innerWidth + this.div.clientWidth;
            // Generate a random y-value
            this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        }

        super.update();
    }

    public killEnemy() {
        // Generate a random x and y value within de width and height of the viewport
        this.x = window.innerWidth + 50;
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        // Draw the GameObject on the right coordinate (x, y)
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}