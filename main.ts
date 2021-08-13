let minutos = 0
let segundos = 55
let horas = 3
basic.forever(function () {
    segundos += 1
    if (segundos > 59) {
        minutos += 1
        segundos = 0
        basic.showString("" + horas + "HORAS" + ":" + minutos + "MINUTOS")
        if (minutos > 59) {
            horas += 1
            minutos = 0
            basic.showString("" + horas + ":" + minutos)
            if (horas > 23) {
                horas = 0
            }
        }
    }
})
