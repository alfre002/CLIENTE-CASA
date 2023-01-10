/* 1. Realiza una Web que almacene en una cookie el número de visitas que has realizado,
incrementado el valor del número de visitas a cada visita realizada. La web debe tener una
interfaz para visualizar el contenido de la cookie y para eliminar la cookie.
2. Realiza el ejercicio anterior usando LocalStorage y SessionStorage. */

const p1 = document.querySelector("#cookie")
const p2 = document.querySelector("#localstorage")
const p3 = document.querySelector("#sessionstorage")

// cookies
const getCookie = (cname) => {
    let name = cname + '='
    let ca = document.cookie.split(';')
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) == ' '){
            c = c.substring(1)
        }
        if(c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ''
}

const setCookie = (cname, cvalue, exdays) => {
    let d = new Date()
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
    let expires = 'expires=' + d.toUTCString()
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}

const checkCookie = () => {
    let contador = getCookie('contador')
    if(contador != '') {
        contador = parseInt(contador) + 1
        setCookie('contador', contador, 365)
        p1.textContent = 'Cookies: ' + contador + 'ª visita'
    } else {
        contador = 0
        if(contador !== '' && contador !== null) {
            setCookie('contador', contador, 365)
        }
    }
}

window.addEventListener('load', checkCookie)

// borrar al darle al boton
let boton = document.querySelector("#boton")

// borrar cookies
const deleteCookie = (cname) => {
    document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:01 GTM;path=/'
}

// todos al dar al boton
const borrar = () => {
    deleteCookie('contador')
    localStorage.removeItem('contador')
    sessionStorage.removeItem('contador')
    location.reload()
}

boton.addEventListener('click', borrar)

// LocalStorage
const checkLS = () => {
    if(localStorage.getItem('contador')) {
        let cont = parseInt(localStorage.getItem('contador'))
        localStorage.setItem('contador', cont + 1)
        p2.textContent = 'LocalStorage: ' + cont + 'ª visita'
    } else {
        localStorage.setItem('contador', 1)
    }
}

window.addEventListener('load', checkLS)

// SessionStorage
const checkSS = () => {
    if(sessionStorage.getItem('contador')) {
        let cont = parseInt(sessionStorage.getItem('contador'))
        sessionStorage.setItem('contador', cont + 1)
        p3.textContent = 'SessionStorage: ' + cont + 'ª visita'
    } else {
        sessionStorage.setItem('contador', 1)
    }
}

window.addEventListener("load", checkSS)