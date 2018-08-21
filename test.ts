SGBotic.thermal_printer_setSerial(SerialPin.P14, SerialPin.P15)

input.onButtonPressed(Button.A, () => {
    SGBotic.printTestPage()
})

