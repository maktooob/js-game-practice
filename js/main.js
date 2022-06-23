
class Game {
    constructor(){
        this.player = null; // will store an instance of the class Player
        this.obstacleArr = []; // will store multiple instances of the class Obstacle
    }
    start(){
        this.player = new Player();
        this.attachEventListeners();

        // interval to create obstacles
        setInterval(() => {
            const newObstacle = new Obstacle();
            this.obstacleArr.push(newObstacle);
        }, 3000);

        // move obstacles
        setInterval(() => {
            this.obstacleArr.forEach((obstacleInstance) => {
                obstacleInstance.moveDown();
            });

        }, 50);
        
    }
    attachEventListeners(){
        document.addEventListener("keydown", (event) => {
            if(event.key === "ArrowLeft"){
                this.player.moveLeft();
            } else if(event.key === "ArrowRight"){
                this.player.moveRight();
            }
        });
    }
}


class Player {
    constructor(){
        this.positionX = 45;
        this.positionY = 0;
        
        // this.domElement = null;
        // this.createDomElement();

        this.domElement = this.createDomElement();

    }
    createDomElement(){
        // create dom element
        const newElm = document.createElement('div');

        // set id and css 
        newElm.id = "player";
        newElm.style.left = this.positionX + "vw";
        newElm.style.bottom = this.positionY + "vh";

        // append to the dom
        const boardElm = document.getElementById("board"); //
        boardElm.appendChild(newElm);

        return newElm;
    }
    moveLeft(){
        this.positionX--;
        this.domElement.style.left = this.positionX + "vw";
    }
    moveRight(){
        this.positionX++;
        this.domElement.style.left = this.positionX + "vw";
    }
}


class Obstacle {
    constructor(){
        this.positionX = 45;
        this.positionY = 90;

        this.domElement = this.createDomElement();

    }
    createDomElement(){
        // create dom element
        const newElm = document.createElement('div');

        // set id and css 
        newElm.className = "obstacle";
        newElm.style.left = this.positionX + "vw";
        newElm.style.bottom = this.positionY + "vh";

        // append to the dom
        const boardElm = document.getElementById("board"); //
        boardElm.appendChild(newElm);

        return newElm;
    }
    moveDown(){
        this.positionY--;
        this.domElement.style.bottom = this.positionY + "vh";
    }
}



const game = new Game();
game.start();


