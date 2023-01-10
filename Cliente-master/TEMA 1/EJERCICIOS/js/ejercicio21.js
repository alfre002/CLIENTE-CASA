/* Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola
Mundo") devolverá "odnuM aloH". */

 const invertWords = (text="") =>  {

    let char = text.length
    
    for (char; char >= 0; char--) {

        document.write(text.charAt(char))
    
    }
}

invertWords("Perfecto") 

/*

function invertWords(text="") {
    let char = text.length
    let newText = ""
    for (char; char >= 0; char--) {
        newText += text.charAt(char)
    }
    document.write(newText)
}

invertWords("Hola Mundo")

*/

/* MANERA ÓPTIMA CON FUNCIONES
const reverseText = (text ="") => text.split("").reverse().join("")//convertimos en un array, le damos la vuelta y lo volvemos a convertir a cadena
let example="hola mundo", result;
result=reverseText(example);
(result==="")? console.log("No hay cadena"): console.log(`La cadena ${example} invertida es ${result}`);
*/

