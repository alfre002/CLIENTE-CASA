/* Programa una función que dada una String te devuelva un Array de textos separados por
cierto carácter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */

/* function convertArray(text='', char) {
    let array = []
    let newText = ''
    for (let i = 0; i <= text.length; i++) {
        newText += text.charAt(i)
        if(text.charAt(i)==char) {
            array.push(newText)
            newText = ''
        } else if(i==text.length) {
            array.push(newText)
        }
    }
    document.write(`Cadena inicial: ${text}<br>Array: ${array}`)
}

convertArray('Hola me llamo Alfredo', ' ')

*/

const stringToArray = ( characters = "" , separator = undefined ) => ( !characters )?
"":characters.split ( separator ) ;
let example = "hola mundo asd" , separator = " " , result ;
result = stringToArray ( example , separator ) ;
document.write(result)