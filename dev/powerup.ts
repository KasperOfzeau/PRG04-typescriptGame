import { CollisionGameObject } from "./collisiongameobject.js";

export class Powerup extends CollisionGameObject {

    constructor(tagName : string) {
        super(tagName);
        console.log("Powerup was created");

        this.create();
    }

    private create() : void {
        // Generate a random y and x value within the height of the viewport
        this.x = window.innerWidth + 50;
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));

        this.xspeed = 6;
    }   

    public update() : void {
        // Move the cloud (x-value) to the left. 
        this.x -= this.xspeed;
        // Check if the cloud is completely outside the screen (left side)
        if(this.x + this.div.clientWidth * 2 < 0) {
            // Place the cloud on the right side outside the screen
            this.x = window.innerWidth + this.div.clientWidth;
            // Generate a random y-value
            this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        }

        super.update();
    }

    public removePowerup() : void {
        this.div.remove();
    }
}