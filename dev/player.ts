export class Player {

    private x : number = 0;
    private y : number = 0;
    private yspeed : number = 0;
    private div : HTMLElement;

    constructor() {
        console.log("Player was created");
        this.create();
    }

    create() {

        this.div = document.createElement("player");
        document.body.appendChild(this.div);

        // Generate a random y value within the height of the viewport
        this.x = 100;
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        
        // Draw the fish on the right coordinate (x, y)
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}