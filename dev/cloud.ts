export class Cloud {

    private x : number = 0;
    private y : number = 0;
    private xspeed : number = 0;
    private scale : number = 0;
    private div : HTMLElement;

    constructor() {
        console.log("Cloud was created!");
        this.create();
    }

    private create() {
        this.div = document.createElement("cloud");
        document.body.appendChild(this.div);

        // Generate a random x and y value within de width and height of the viewport
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth));
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));

        // generate random scale size 
        this.scale = Math.random() * (3 - 1) + 1;

        // generate speed 
        this.xspeed = this.scale / 2;

    }

    update() {
        // Move the cloud (x-value) to the left. 
        this.x -= this.xspeed;
        // Check if the cloud is completely outside the screen (left side)
        if(this.x + this.div.clientWidth < 0) {
            // Place the fish on the right side outside the screen
            this.x = window.innerWidth;
            // Generate a random y-value
            this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        }

        // Draw the fish on the right coordinate (x, y)
        this.div.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale})`;
    }
}