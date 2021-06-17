export class GameObject {

    protected y : number;
    protected x : number; 
    protected xspeed : number = 0;
    protected div : HTMLElement;

    constructor(tagName : string) {
        this.div = document.createElement(tagName);
        document.querySelector("game")?.appendChild(this.div);
    }
}