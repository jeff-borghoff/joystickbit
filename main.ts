let x = 0
let y = 0
joystickbit.initJoystickBit()
radio.setGroup(1)
basic.forever(function () {
    y = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.Y), 1023, 0, -100, 100)
    x = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.Y), 1023, 0, -100, 100)
    radio.sendValue("x", x)
    radio.sendValue("y", y)
})
