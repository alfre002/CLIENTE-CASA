/* Programa una función que reciba un número y evalúe si es 
capicúa o no (que se lee igual en un sentido que en otro), 
pe. miFuncion(2002) devolverá true. */

const isCapicua = (num = '') => {
    let longitud = num.length
    let numAlReves = ""

    for (longitud; longitud >= 0; longitud--) {
        numAlReves += num.toString().charAt(longitud)
    }
    
    if(num==numAlReves) {
        document.write("El número es capicúa.")
    } else {
        document.write("El número no es capicúa.")
    }
}

isCapicua('2003')