function Points() {

    this.points = 0

    this.start = (value) => {
        if (value) {
            this.points = value
        } else {
            this.points = 0
        }
    }
    this.increment = (what) => {
        if (!what) {
            this.points += 1
        } else {
            this.points += what
        }
    }
    this.value = () => {
        return this.points
    }
}