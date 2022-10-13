input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.magneticForce(Dimension.Strength))
})
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) < 200) {
        basic.showIcon(IconNames.Sword)
        music.playTone(587, music.beat(BeatFraction.Breve))
    } else {
        basic.clearScreen()
    }
})
