function Apple() {
    /*
    this.y = height / 2
    this.x = width / 2
    */
    this.y = parseInt(String(random(height)).split('.')[0])
    this.x = parseInt(String(random(width)).split('.')[0])

    function generateNew() {

    }

    this.show = () => {
        console.log('Apple: ' + this.x + 'x' + this.y)
        image(appleImage, this.x, this.y, 40, 40)
    }
    this.hide = () => {
        this.x = 10000
        this.y = 10000
    }
    this.reset = () => {
                this.y = parseInt(String(random(height)).split('.')[0])
        this.x = parseInt(String(random(width)).split('.')[0])
    }
    this.display = () => {}
}