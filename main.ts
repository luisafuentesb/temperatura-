let F = 0
basic.forever(function () {
    F = input.temperature() * (1.8 + 32)
    if (F >= -22 && F <= 14) {
        basic.showString("Permanece en casa hay fuertes nevadas")
        basic.showString("R")
    }
    if (F >= 23 && F <= 15) {
        basic.showString("Toma tus mejores esquis y diviertete ")
        basic.showString("V")
    }
    if (F >= 32 && F <= 24) {
        basic.showString("Solo podras esquiar en las partes mas altas de la montaña ")
        basic.showString("A")
    }
    if (F >= 35) {
        basic.showString("Lo siento no es temporada de esquis  ")
        basic.showString("-")
    }
})
