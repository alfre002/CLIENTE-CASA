/* Realiza un programa que tenga 3 elementos <p> y al hacer salir el puntero del ratón
sobre ellos desaparezcan (se oculten) y al hacer doble clic (los elimine del DOM).
También deberá tener un botón “Reaparecer” que hará que aparezcan todos los
elementos desaparecidos (pero no los eliminados). */

// selecciono las etiquetas p
const parrafos = document.getElementsByTagName("p")

// evento desaparecer
for(let p of parrafos) {
    p.addEventListener("mouseout", function() {
        p.style.display = "none"
    })
}

// evento eliminar
for(let p of parrafos) {
    p.addEventListener("dblclick", function() {
        p.remove()
    })
}

// evento reaparecer
const btnReaparecer = document.querySelector("#reaparecer")
    for(let p of parrafos) {
        btnReaparecer.addEventListener("click", function() {
            p.style.display = "block"
        })
    }