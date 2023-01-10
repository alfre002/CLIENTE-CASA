/* Realiza un formulario que tenga dos campos de texto. Deberá validar antes de enviarse
si uno de los campos es un anagrama del otro y enviarse solo si lo es. Se ignorarán
mayúsculas, minúsculas y espacios. */

// selecciono boton enviar
const btnEnviar = document.querySelector("#enviar")

// funcion comprobrar si las palabras son anagramas
const esAnagrama = () => {
    // selecciono las palabras
    const campos = document.getElementsByTagName("input")
    // convertir a array, ordenar alfabeticamente y eliminar espacios
    const campo1 = campos[0].value.toLowerCase().replace(/ /g,'').split('').sort()
    const campo2 = campos[1].value.toLowerCase().replace(/ /g,'').split('').sort()
    // compruebo si son anagramas
    console.log(campo1.toString().toLowerCase())
    console.log(campo2.toString().toLowerCase())
    if(campo1.toString()==campo2.toString()) {
        return true
    } else {
        return false
    }
}

btnEnviar.addEventListener("click", function(e) {
    if(!esAnagrama()) {
        e.preventDefault()
        alert("Las palabras no son anagramas.")
    } else {
        alert("El formulario se ha enviado correctamente.")
    }
})