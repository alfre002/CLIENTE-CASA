/* Programa una función que cuente el número de caracteres de una cadena de texto, pe.
miFunción("Hola Mundo") devolverá 10. */

function countChar(text='') {
    let cuenta = 0
    for (let i = 0; i < text.length; i++) {
        if(text.charAt(i)!=' ') {
            cuenta++
        }
    }
    document.write(`El texto contiene ${cuenta} caracteres.`)
}

countChar('siete    o tres')