function pointsText() {
    this.show = () => {
        fill(100, points.value(), points.value());
        
        text('Points : ' + points.value(), 10, 10);
    }
}