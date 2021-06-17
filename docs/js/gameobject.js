export class GameObject {
    constructor(tagName) {
        var _a;
        this.xspeed = 0;
        this.div = document.createElement(tagName);
        (_a = document.querySelector("game")) === null || _a === void 0 ? void 0 : _a.appendChild(this.div);
    }
}
//# sourceMappingURL=gameobject.js.map