export class Cloud {

    private x : number = 0;
    private y : number = 0;
    private xspeed : number = 0;
    private scale : number = 0;
    private skin : number;
    private div : HTMLElement;

    constructor() {
        console.log("Cloud was created!");
        this.create();
    }

    private create() {
        this.div = document.createElement("cloud");
        document.body.appendChild(this.div);

        // Generate random skin 
        this.skin = Math.floor(Math.random() * (2 - 0) + 0);
        let cloudImages = ["url(./images/cloud1.png)",
                           "url(./images/cloud2.png)"];
        this.div.style.backgroundImage = cloudImages[this.skin];

        // Generate a random x and y value within de width and height of the viewport
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth));
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));

        // generate random scale size 
        this.scale = Math.random() * (5 - 1) + 1;

        // Set z-index based on sclae
        let zIndex = Math.floor(this.scale).toString();
        this.div.style.zIndex = zIndex;

        // Set speed based on size
        this.xspeed = this.scale / 2;
    }

    update() {
        // Move the cloud (x-value) to the left. 
        this.x -= this.xspeed;
        // Check if the cloud is completely outside the screen (left side)
        if(this.x + this.div.clientWidth * 2 < 0) {
            // Place the cloud on the right side outside the screen
            this.x = window.innerWidth + this.div.clientWidth;
            // Generate a random y-value
            this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        }

        // Draw the fish on the right coordinate (x, y)
        this.div.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale})`;
    }
}