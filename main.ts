let segundos = 0
let minutos = 0
let horas = 0
basic.forever(function () {
    segundos += 1
    if (segundos > 59) {
        minutos += 1
        segundos = 0
        basic.showString("1:01")
        if (minutos > 59) {
            horas += 1
            minutos = 0
            basic.showString("2:00")
            if (horas > 23) {
                horas = 0
            }
        }
    }
})
