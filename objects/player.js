function n(t) {
    var res = parseInt(String(random(15)).split('.')[0])
    if (res === 0) {
        res = 5
    } else if (res === 2) {
        res = 5
    } else if (res === 3) {
        res = 5
    }
    return res
}

function Player() {
    this.y = height / 2
    this.x = width / 2

    this.show = () => {
        image(playerImage, this.x, this.y, 40, 40)
    }

    this.checkApple = () => {
        for (var i = 0; i < apple.length; i++) {
            if (apple[i].y >= this.y) {
                if (apple[i].x == this.x + 7) {
                    points.increment()
                    apple[i].reset()
                } else if (apple[i].x === this.x + 6) {
                    points.increment()
                    apple[i].reset()
                } else if (apple[i].x == this.x + 5) {
                    points.increment()
                    apple[i].reset()
                } else if (apple[i].x === this.x + 4) {
                    points.increment()
                    apple[i].reset()
                } else if (apple[i].x == this.x + 3) {
                    points.increment()
                    apple[i].reset()
                } else if (apple[i].x === this.x + 2) {
                    points.increment()
                    apple[i].reset()
                } else if (apple[i].x == this.x + 1) {
                    points.increment()
                    apple[i].reset()
                } else {}
            }
        }

        this.up = () => {
            this.y -= 1 * n()
        }
        this.down = () => {
            this.y += 1 * n()
        }
        this.left = () => {
            this.x -= 1 * n()
        }
        this.right = () => {
            this.x += 1 * n()
        }
    };
}