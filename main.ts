input.onPinPressed(TouchPin.P0, function () {
    ESP8266_IoT.connectWifi("Buffalo-A-2E18", "fvdfri4d3xchi")
})
input.onButtonPressed(Button.A, function () {
    basic.showString("HOUGAKU")
    hougaku = 1
    basic.showNumber(input.compassHeading())
    while (!(input.logoIsPressed())) {
        led.plotBarGraph(
        Math.abs(input.compassHeading() - 180),
        180
        )
    }
    hougaku = 0
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Lite Mode")
    basic.showString("Mode The Exit For A Boton")
    while (!(input.buttonIsPressed(Button.A))) {
        power.fullPowerOn(FullPowerSource.B)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("KION/OND")
    basic.showString("" + (input.temperature()))
})
let hougaku = 0
basic.showString("Hello")
basic.showString("Reseting...")
basic.showIcon(IconNames.No)
basic.showIcon(IconNames.Asleep)
basic.showIcon(IconNames.Asleep)
basic.showIcon(IconNames.Surprised)
basic.showIcon(IconNames.Happy)
basic.showString("Reset The Complert")
basic.showIcon(IconNames.Yes)
if (ESP8266_IoT.wifiState(true)) {
    basic.showString("succesd")
} else {
    datalogger.setColumnTitles("Process error, error code: 404 Received error message. Description: A connection to the specified network was not possible. It seems that there is a problem with the network environment, such as the router or modem. Restart the program in an environment where the specified Wi-Fi is connected.")
    datalogger.log(datalogger.createCV("Process error, error code: 404 Received error message. Description: A connection to the specified network was not possible. It seems that there is a problem with the network environment, such as the router or modem. Restart the program in an environment where the specified Wi-Fi is connected.", 404))
    basic.showString("log the created!!")
}
basic.forever(function () {
	
})
basic.forever(function () {
	
})
