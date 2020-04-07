export class BouncingObject {
    constructor(p, initialPosition) {
        this.position =
            initialPosition || p.createVector(p.width / 2, p.height / 2);
        this.vel = p.createVector(0, 0);
        this.gravity = p.createVector(0, 1.5);
    }

    applyForce() {
        this.vel.add(this.gravity);
        this.position.add(this.vel);
    }

    update(p) {
        if (this.position.y > p.height) {
            this.position.y = p.height;
            this.vel = this.vel.mult(-1);
        }
    }
}

export class RandomPathObject {
    constructor(p, initialPosition) {
        this.position =
            initialPosition || p.createVector(p.width / 2, p.height / 2);
    }

    update(p) {
        this.position.x += p.random(-3, 3);
        this.position.y += p.random(-3, 3);
        if (this.position.x < 0) {
            this.position.x += p.width;
        } else if (this.position.x > p.width) {
            this.position.x -= p.width;
        } else if (this.position.y < 0) {
            this.position.y += p.height;
        } else if (this.position.y > p.height) {
            this.position.y -= p.height;
        }
    }
}
