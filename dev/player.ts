import { Bullet } from "./bullet.js";
import { CollisionGameObject } from "./CollisionGameObject.js";

export class Player extends CollisionGameObject {

    private yspeed : number = 0;
    public bullets : Bullet[] = [];
    private lives : number = 3;

    constructor(tagName : string) {
        super(tagName);
        console.log("Player was created");

        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e));

        this.create();
    }

    private create() : void {
        this.div.classList.add("player");
        // Generate a random y value within the height of the viewport
        this.x = 100;
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
    }

    public update() : void {
        this.y += this.yspeed;
        super.update();
    }

    public setLive() : void {
        if(this.lives != 0) {
            this.lives -= 1; 
            console.log(this.lives)
        }
    }

    public getLives() : number {
        return this.lives;
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
            case " ":
                this.bullets.push(new Bullet());
                    break
        }
    }
}