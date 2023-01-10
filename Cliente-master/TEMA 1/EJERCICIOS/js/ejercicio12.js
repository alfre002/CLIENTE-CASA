/* Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe.
miFuncion(0,"C") devolverá 32°F */


function changeMedida(grados, medida) {
    if(medida == 'C') {
        grados = (grados * 9 / 5) + 32
        console.log(`${grados}ºF`)
    } else if(medida == 'F') {
        grados = (grados - 32) * 5 / 9
        console.log(`${grados}ºC`)
    } else {
        console.log("La unidad de medida introducida no es válida.")
    }
}

changeMedida(105,'F');