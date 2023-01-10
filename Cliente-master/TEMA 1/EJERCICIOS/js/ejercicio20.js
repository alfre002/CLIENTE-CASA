/* Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá
Hola Mundo Hola Mundo Hola Mundo. */

function repiteText(text, times) {
    let newText = ''
    for (let i = 0; i < times; i++) {
        for (let j = 0; j < text.length; j++) {
            newText += text.charAt(j)
        }
        document.write(newText)
        newText = ' '
    }
    
}

repiteText('Hola Mundo', 6)