import { GameObject } from "./gameobject.js";
export class CollisionGameObject extends GameObject {
    constructor(tagName) {
        super(tagName);
    }
    getRectangle() {
        return this.div.getBoundingClientRect();
    }
    update() {
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
//# sourceMappingURL=collisiongameobject.js.map