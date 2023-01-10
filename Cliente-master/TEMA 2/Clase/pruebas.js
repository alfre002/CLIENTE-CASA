const d = document

// introducir una contraseña (cifrada) y descifrarla con un evento
const password = d.querySelector("#pass")
const descifrada = d.querySelector("#descifrada")

const obtenerPass = (e) => {
    descifrada.value += `${e.key}`
}

password.addEventListener("keypress" , obtenerPass)