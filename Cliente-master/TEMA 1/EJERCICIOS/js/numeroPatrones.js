/* Realiza una aplicación web que solicite una cadena de texto.
El programa debe decir cuántas veces ocurre cada uno de estos patrones sin distinguir mayúsculas y
minúsculas: “00” “101”, “ABC”, “HO”.
Un carácter puede formar parte de más de un patrón encontrado. Por ejemplo:
En la cadena “000” el patrón “00” aparece dos veces (una empieza en la posición 0 y otra empieza en
la posición 1).
Internamente el programa realizará la cuenta de patrones con una función definida como
function numeroPatrones(texto)
que devolverá un número entero con el número de patrones encontrados. */

const numeroPatrones = (texto = "") => {
    let patron1 = "00", patron2 = "101", patron3 = "ABC", patron4 = "HO"
    let patronesEncontrados = 0
    let min = 0, max2 = 2, max3 = 3
    for (let i = 0; i < texto.length; i++) {
        let subcadena2 = texto.substring(min, max2)
        let subcadena3 = texto.substring(min, max3)
        if(subcadena2 === patron1 || subcadena2 === patron4) {
            patronesEncontrados++
        }
        if(subcadena3 === patron2 || subcadena3 === patron3) {
            patronesEncontrados++
        }
        min++
        max2++
        max3++
    }
    return patronesEncontrados
}
gey
console.log(numeroPatrones("ABC00"))