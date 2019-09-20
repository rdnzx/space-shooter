class Game {
    constructor () {
        this.bg = {
            x: 0,
            y: 0,
            w: 1920,
            h: 900,
        }
        this.asteroid = [];
        this.powerup = [];
    }

    animate (callback) {
        window.requestAnimationFrame(callback);
    }
    run () {
        this.generate();
        this.start();

        this.playAudio();
    }

    generate () {
        this.generateAsteroids();
    }

    generateAsteroids() {
            let randomY = Math.abs(Math.floor(Math.random() * ch));
            this.asteroid.push(new Asteroid(cw, randomY, 50, 50));

            setTimeout(() => { this.generateAsteroids() }, 2000)
    }
    
    start () {
        this.animate( () => this.start () );

        pen.clearRect(0, 0, cw, ch);

        this.draw();
        this.update();
    }

    draw () {
        this.drawBackground();
        pen.drawImage(media.plane, 10,(ch / 2 - 50), 100, 100);
        
        this.asteroid.forEach(asteroid => {
            asteroid.draw();
        })

    }
    drawBackground() {
        this.bg.x -= 5;
        if (this.bg.x + this.bg.w <= cw){
            this.bg.x = 0;
        }
        pen.drawImage(
            media.bg,
            this.bg.x,
            this.bg.y,
            this.bg.w,
            this.bg.h
        );
    }

    update () {}
}