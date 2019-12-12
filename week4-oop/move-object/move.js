function Hero(image, top, left, size, speed){
    this.image = image;
    this.size = size;
    this.top = top;
    this.left = left;
    this.speed = speed;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px; position:absolute;"/>';
    }
    this.moveRight = function(){
        this.left += speed;
        console.log('ok: ' + this.left);
    }
    this.moveLeft = function () {
        this.left -= speed;
    }
    this.moveUp = function () {
        this.top -= speed;
    }
    this.moveDown = function () {
        this.top += speed;
    }
    // this.speedUp = function () {
    //     this.speed += 10;
    // }
}

let hero = new Hero('voimamut.jpg', 200, 500, 100, 100);

function start(){
    if(hero.left < window.innerWidth - hero.size){
        console.log(window.innerWidth);
        hero.moveDown();
        // hero.moveLeft();
        // hero.moveUp();
        // hero.moveRight();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();