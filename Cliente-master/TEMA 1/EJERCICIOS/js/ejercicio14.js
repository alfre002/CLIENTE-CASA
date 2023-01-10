/* Programa una función que devuelva el monto final después de aplicar un descuento a una
cantidad dada, pe. miFuncion(1000, 20) devolverá 800 */

function finalPVP(pvp, descuento) {
    console.log(pvp - (pvp * (descuento/100)))
}

finalPVP(1000, 20)