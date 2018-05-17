function draw() {
    clear()
    for (var i = 0; i < apple.length; i++) {
        apple[i].show()
    }
    player.show()
    player.checkApple()
    pointsText.show()
}