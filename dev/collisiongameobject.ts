import {GameObject} from "./gameobject.js";

export class CollisionGameObject extends GameObject {

    constructor(tagName : string) {
        super(tagName);
    }

    public getRectangle() {
        return this.div.getBoundingClientRect();
    }

    public update() {
        // Draw the GameObject on the right coordinate (x, y)
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}