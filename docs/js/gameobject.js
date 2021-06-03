export class GameObject {
    constructor(tagName) {
        this.xspeed = 0;
        this.div = document.createElement(tagName);
        document.body.appendChild(this.div);
    }
}
//# sourceMappingURL=gameobject.js.map