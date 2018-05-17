var player
var playerImage
var apple = [] 
var appleImage
var pointsText
var eatEffect
var points

function setup() {
    background(0)

    createCanvas(1000, 500)
    
    for (var i = 0; i < 1; i++) {
        apple[i] = new Apple()
    }
    
    playerImage = loadImage('../assets/player.png')
    appleImage = loadImage('../assets/apple.png')
    player = new Player()
    pointsText = new pointsText()
    points = new Points()

    points.start(0);
   // eatEffect = loadSong('../assets/eat.mp3')
   // eatEffect.play()
}