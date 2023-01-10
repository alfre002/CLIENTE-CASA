/* Realiza un programa que tenga una imagen de una bola de papel y una papelera vacía.
Cuando se arrastre la bola de papel a la papelera vacía, deberá cambiar la imagen de la
papelera vacía a una papelera llena. */

// selecciono la bola de papel
const bola = document.querySelector("#bola")
// hacemos la bola arrastrable
bola.draggable = true

// selecciono la papelera
const papelera = document.querySelector("#papelera")

// para cuando la bola se ponga encima de la papelera
papelera.addEventListener("dragover", e=>{
    e.preventDefault()
})

// para cuando se suelte la bola dentro de la papelera
papelera.addEventListener("drop", e=>{
    papelera.appendChild(bola)
    papelera.src = "../js/img/papelerallena.png"
    papelera.style.marginTop = "150px"
})