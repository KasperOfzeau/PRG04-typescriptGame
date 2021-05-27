export class Bullet {

    private x : number = 0;
    private y : number = 0;
    private div : HTMLElement;

    constructor() {
        console.log('Created Bullet');

        this.create();
    }

    private create() {
        this.div = document.createElement("bullet");
        document.body.appendChild(this.div);

        // Generate a random y value within the height of the viewport
        this.x = 100;
        let player = document.querySelector(".player")!.getBoundingClientRect();
        let playery = player.top;
        this.y = playery + this.div.clientHeight;
    }

    public update() {
        // Move the bullet (x-value) to the left.
        this.x += 10;
        // Check if the bullet is completely outside the screen (right side)
        if (this.x - this.div.clientWidth > window.innerWidth) {
            this.div.remove();
        }
        // Draw the bullet on the right coordinate (x, y)
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
      }
}