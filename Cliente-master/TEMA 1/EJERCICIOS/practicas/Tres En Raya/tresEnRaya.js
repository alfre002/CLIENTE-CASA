/* Realiza el juego del tres en raya contra otro jugador o contra la máquina (con números aleatorios).
Puedes hacerlo usando en cada jugada las coordenadas de X u O desde 0,0 (esquina superior
izquierda) a 2,2 (esquina inferior derecha). */

let tablero = [[".",".","."], [".",".","."], [".",".","."]]
let coordenadaX = undefined, coordenadaY = undefined, coordenadaXBot = undefined, coordenadaYBot = undefined, 
ganador = false, contador = 0

printTablero = (tablero) => {
    console.table(tablero)
}

tiradaHumano = () => {
    do {
    console.log("Humano, elija una posición para colocar su ficha.")
    coordenadaX = Number(prompt("Coordenada X:"))
    coordenadaY = Number(prompt("Coordenada Y:"))
    } while (tablero[coordenadaY][coordenadaX] != ".")
    tablero[coordenadaY][coordenadaX] = "X"
    console.log(`Usted ha tirado en la posición X: ${coordenadaX} Y: ${coordenadaY}`)
}

tiradaBot = () => {
    do {
    console.log("Turno de la máquina.")
    coordenadaXBot = parseInt(Math.random() * 3)
    coordenadaYBot = parseInt(Math.random() * 3)
    } while (tablero[coordenadaYBot][coordenadaXBot] != ".")
    tablero[coordenadaYBot][coordenadaXBot] = "O"
    console.log(`La máquina ha tirado en la posición X: ${coordenadaXBot} Y: ${coordenadaYBot}`)
}

comprobarGanador = (tablero) => {
    // lineas horizontales
    if (tablero[0][0] == tablero[1][0] && tablero[1][0] == tablero[2][0] && tablero[0][0] != ".") ganador = true
    if (tablero[0][1] == tablero[1][1] && tablero[1][1] == tablero[2][1] && tablero[0][1] != ".") ganador = true
    if (tablero[0][2] == tablero[1][2] && tablero[1][2] == tablero[2][2] && tablero[0][2] != ".") ganador = true
    // lineas verticales
    if (tablero[0][0] == tablero[0][1] && tablero[0][1] == tablero[0][2] && tablero[0][0] != ".") ganador = true
    if (tablero[1][0] == tablero[1][1] && tablero[1][1] == tablero[1][2] && tablero[1][0] != ".") ganador = true
    if (tablero[2][0] == tablero[2][1] && tablero[2][1] == tablero[2][2] && tablero[2][0] != ".") ganador = true
    // lineas diagonales
    if (tablero[0][0] == tablero[1][1] && tablero[1][1] == tablero[2][2] && tablero[0][0] != ".") ganador = true
    if (tablero[0][2] == tablero[1][1] && tablero[1][1] == tablero[2][0] && tablero[0][2] != ".") ganador = true
}

// ejecución
console.log("Bienvenido al 3 en raya, empezará la jugada el humano (X) y después irá la máquina (O)")
printTablero(tablero)
do {
tiradaHumano()
tiradaBot()      
comprobarGanador(tablero)
printTablero(tablero)
contador++
console.log(contador)
} while (ganador == false && contador < 4)
if(ganador == false) {
    tiradaHumano()
    printTablero(tablero)
}
console.log("La partida ha terminado.")
