import { Bullet } from "./bullet.js";

export class Player {

    private x : number = 0;
    private y : number = 0;
    private yspeed : number = 0;
    public bullets : Bullet[] = [];
    private div : HTMLElement;

    constructor() {
        console.log("Player was created");

        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e));

        this.create();
    }

    public getRectangle() {
        return this.div.getBoundingClientRect();
    }

    private create() {
        this.div = document.createElement("player");
        this.div.classList.add("player");
        document.body.appendChild(this.div);

        // Generate a random y value within the height of the viewport
        this.x = 100;
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
    }

    public update() {
        this.y += this.yspeed
        // Draw the player on the right coordinate (x, y)
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    private onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "W":
            case "ARROWUP" :
                this.yspeed = -5
                break
            case "S":
            case "ARROWDOWN":
                this.yspeed = 5
                break
            case " ":
                this.bullets.push(new Bullet());
                break
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "W":
            case "S":
            case "ARROWUP":
            case "ARROWDOWN":
                this.yspeed = 0
                break
        }
    }
}