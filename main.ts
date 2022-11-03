input.onButtonPressed(Button.A, function () {
    radio.sendString("PREVIOUS")
    basic.showArrow(ArrowNames.West)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("NEXT")
    basic.showArrow(ArrowNames.East)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("SHUFFLE")
    basic.showIcon(IconNames.Diamond)
})
radio.setGroup(55)
