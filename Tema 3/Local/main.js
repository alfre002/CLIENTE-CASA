/* 1. Realiza una Web que almacene en una cookie el número de visitas que has realizado,
incrementado el valor del número de visitas a cada visita realizada. La web debe tener una
interfaz para visualizar el contenido de la cookie y para eliminar la cookie.
2. Realiza el ejercicio anterior usando LocalStorage y SessionStorage. */

const p1 = document.querySelector("#local")
const p2 = document.querySelector("#session")

const checkLS = () => {
    if(localStorage.getItem('contador')) {
        let cont = parseInt(localStorage.getItem('contador'))
        localStorage.setItem('contador', cont + 1)
        p1.textContent = 'Local Storage - Visita nº ' + cont
    } else {
        localStorage.setItem('contador', 1)
    }
}

window.addEventListener('load', checkLS)

const checkSS = () => {
    if(sessionStorage.getItem('contador')) {
        let cont = parseInt(sessionStorage.getItem('contador'))
        sessionStorage.setItem('contador', cont + 1)
        p2.textContent = 'Session Storage - Visita nº ' + cont
    } else {
        sessionStorage.setItem('contador', 1)
    }
}

window.addEventListener('load', checkSS)

// borrar cookies al pulsar el boton reiniciar
let boton = document.querySelector("#boton")

const borrar = () => {
    localStorage.removeItem('contador')
    sessionStorage.removeItem('contador')
    location.reload()
}

boton.addEventListener('click', borrar)