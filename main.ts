input.onGesture(Gesture.LogoUp, function () {
    bear.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.LogoDown, function () {
    bear.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    bear.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    bear.change(LedSpriteProperty.X, 1)
})
let bear: game.LedSprite = null
let honey = game.createSprite(randint(0, 4), randint(0, 4))
bear = game.createSprite(3, 3)
basic.forever(function () {
    if (bear.isTouching(honey)) {
        game.addScore(1)
        basic.pause(100)
        honey.delete()
        honey = game.createSprite(randint(0, 4), randint(0, 4))
    }
    if (game.score() == 5) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 500, 499, 255, 0, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        game.gameOver()
    }
})
