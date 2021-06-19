let index = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(0)
    index = 0
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    index += 1
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(0 + index)
    }
})
