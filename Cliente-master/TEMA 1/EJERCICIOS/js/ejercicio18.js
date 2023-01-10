/* Programa una función que te devuelva el texto recortado según el número de caracteres
indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola". */

function recortarText(text, char) {
    let newText = ''
    for (let i = 0; i < char; i++) {
        newText += text.charAt(i)
    }
    document.write(newText)
}

recortarText('Hola Mundo', 7)