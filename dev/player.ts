import { Bullet } from "./bullet.js";
import { CollisionGameObject } from "./collisiongameobject.js";

export class Player extends CollisionGameObject {

    private yspeed : number = 0;
    public bullets : Bullet[] = [];
    private lives : number = 3;
    private shield : boolean = false;
    private skin : string = "url(./images/pigeon.gif)";

    constructor(tagName : string) {
        super(tagName);
        console.log("Player was created");

        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e));

        this.create();
    }

    private create() : void {
        this.div.classList.add("player");
        this.div.style.backgroundImage = this.skin;
        // Generate a random y value within the height of the viewport
        this.x = 100;
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
    }

    public update() : void {
        this.y += this.yspeed;
        if(this.y < 50) {
            this.y = 50;
        }

        if(this.y > window.innerHeight - this.div.clientHeight) {
            this.y = window.innerHeight - this.div.clientHeight;
        }
        super.update();
    }

    public setLive() : void {
        if(this.lives != 0) {
            this.lives -= 1; 
        }

        if(this.lives === 1) {
            const oneLifeLeft = new Audio('./sounds/oneLifeLeft.wav');
            oneLifeLeft.play();
        }
    }

    public getLives() : number {
        return this.lives;
    }

    public setShield() : void {
        if(this.shield === false) {
            this.shield = true; 
            this.skin = "url(./images/pigeon_with_shield.gif)";
            this.div.style.backgroundImage = this.skin;
        } else {
            this.shield = false; 
            this.skin = "url(./images/pigeon.gif)";
            this.div.style.backgroundImage = this.skin;
        }
    }

    public getShield() : boolean {
        return this.shield;
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