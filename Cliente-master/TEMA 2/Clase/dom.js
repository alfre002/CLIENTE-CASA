const $d = document

const button = $d.querySelector("#saludar")
console.log(button)

button.addEventListener("click", function() {
    const nombre = $d.querySelector("#nombre")
    const apellido = $d.querySelector("#apellido") 
    const p = $d.createElement("p")
    p.textContent = "Hola " + nombre.value + " " + apellido.value
    $d.body.appendChild(p)
})