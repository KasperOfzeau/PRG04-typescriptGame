export class Powerup {

    private name : string;
    private y : number;
    private x : number;
    private xspeed : number = 0;
    private div : HTMLElement;

    constructor() {
        console.log("Powerup was created");

        this.create();
    }

    private create() {
        this.div = document.createElement("powerup");
        document.body.appendChild(this.div);

        // Generate a random y and x value within the height of the viewport
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth));
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));

        this.xspeed = 6;
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

        // Draw the powerup on the right coordinate (x, y)
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }

    public setPowerup() {

    }

    public getRectangle() {
        return this.div.getBoundingClientRect();
    }
}