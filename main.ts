let Movmentsensore = 0
makerbit.connectLcd(39)
basic.forever(function () {
    Movmentsensore = pins.digitalReadPin(DigitalPin.P0)
    if (Movmentsensore == 1) {
        makerbit.showStringOnLcd1602("Movement detected", makerbit.position1602(LcdPosition1602.Pos1), 16)
    } else {
        makerbit.showStringOnLcd1602("no movement", makerbit.position1602(LcdPosition1602.Pos1), 16)
    }
})
