// variables
const d = document
const tiempo = d.querySelector("#cuadro-tiempo")
const temperaturas = d.querySelector("#temperaturas")
const $hoy = d.querySelector("#hoy")
const $mañana = d.querySelector("#mañana")

// funcion para ver el tiempo de las ciudades
const verCiudades = (json) => {
    let ciudades = json['ciudades']

    for(let i = 0; i < ciudades.length; i++) {
        let div = d.createElement('div')
        div.className = 'ciudades'
        let h1 = d.createElement('h1')
        let p = d.createElement('p')
        h1.textContent = ciudades[i].name
        div.appendChild(h1)

        let tiempo2 = ciudades[i].stateSky
        for(let j = 0; j < Object.keys(tiempo2).length; j++) {
            p.textContent = tiempo2.description
            div.appendChild(p)
        }
        tiempo.appendChild(div)
    }
}

// funcion para ver las temperaturas
const tiempoHoy = (json) => {
    let ciudades = json['ciudades']
    let div = d.createElement('div')
    for(let i = 0; i < ciudades.length; i++) {
        let temperaturas = ciudades[i].temperatures
        let p = d.createElement('p')
        p.textContent = ciudades[i].name + ' - Temperatura Máxima: ' + temperaturas.max + ' ; Temperatura Mínima: ' + temperaturas.min
        div.appendChild(p)
    }
    $hoy.insertAdjacentElement("afterend", div)
}

// muestro los datos por pantalla
fetch("https://www.el-tiempo.net/api/json/v2/home")
.then(res => res.json())
.then(json => {
    verCiudades(json)
    $hoy.addEventListener("click", function() {
        tiempoHoy(json)
        // deshabilito el botón para que solo se pueda pulsar una vez
        $hoy.disabled = true
    })
})