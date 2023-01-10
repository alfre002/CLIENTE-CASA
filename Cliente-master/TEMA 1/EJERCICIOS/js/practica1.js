/* Realiza un programa para implementar el juego de Piedra, Papel y Tijera en el modo de un jugador contra otro.
La entrada de datos se realizará mediante prompt y ganará la partida aquel jugador que gane tres jugadas 
(si empatan en una jugada gana nadie) y el programa terminará mostrando un resumen de la partida. Después de cada jugada 
debes mostrar una alerta con información sobre: número de jugadas, jugadas ganadas por J1, jugadas ganadas por J2 y 
jugadas empatadas y quien ha ganado o empatado la jugada. */

// presentacion
alert("Bienvenido a Piedra, Papel o Tijera.")
let jugador1 = prompt("Jugador 1, introduzca su nombre.")
let jugador2 = prompt("Jugador 2, introduzca su nombre.")
let ganadas1 = 0, ganadas2 = 0, empatadas = 0
let numJugadas = 0
let tirada1, tirada2

// funcion pedir tirada jugador 1
const pedirTirada1 = () => {
    tirada1 = prompt(`${jugador1}, realice su tirada.`)
}
// funcion pedir tirada jugador 2
const pedirTirada2 = () => {
    tirada2 = prompt(`${jugador2}, realice su tirada.`)
}

// funcion comprobar ganador
const comprobarGanador = (tirada1, tirada2) => {
    if(tirada1==tirada2) {
        alert("Empate")
        empatadas++
    } else if(tirada1=="Piedra" && tirada2=="Papel") {
        alert(`Ha ganado ${jugador2}`)
        ganadas2++
    } else if(tirada1=="Piedra" && tirada2=="Tijera") {
        alert(`Ha ganado ${jugador1}`)
        ganadas1++
    } else if(tirada1=="Tijera" && tirada2=="Piedra") {
        alert(`Ha ganado ${jugador2}`)
        ganadas2++
    } else if(tirada1=="Tijera" && tirada2=="Papel") {
        alert(`Ha ganado ${jugador1}`)
        ganadas1++
    } else if(tirada1=="Papel" && tirada2=="Piedra") {
        alert(`Ha ganado ${jugador1}`)
        ganadas1++
    } else if(tirada1=="Papel" && tirada2=="Tijera") {
        alert(`Ha ganado ${jugador2}`)
        ganadas2++
    }
    numJugadas++
}

// funcion resumen partida
const resumen = () => {
    alert(`Número de Jugadas: ${numJugadas}\nJugadas Ganadas de ${jugador1}(J1): ${ganadas1}\nJugadas Ganadas de ${jugador2}(J2): ${ganadas2}\nJugadas Empatadas: ${empatadas}`)
}

// funcion quien gana
const ganador = (ganadas1, ganadas2) => {
    if(ganadas1==3) {
        alert(`${jugador1} ES EL GANADOR.`)
    } else if(ganadas2==3) {
        alert(`${jugador2} ES EL GANADOR.`)
    }
}


// ejecución
do {
pedirTirada1()
pedirTirada2()
comprobarGanador(tirada1, tirada2)
resumen()
} while(ganadas1<3 && ganadas2<3)
ganador(ganadas1, ganadas2)

