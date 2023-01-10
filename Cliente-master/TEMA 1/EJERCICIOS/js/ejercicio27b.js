/* dado un vector de numeros devuelve un objeto indicando la media, los numeros q estan por encima y los que estan por debajo */

let numeros = [-3, 45, 7, 3.56, 32]

const calculaMedia = array => {
    let suma = array.reduce((acumulador, valorActual) => acumulador + valorActual)
    let media = suma/array.length
    return {
        original: array,
        media: media,
        porEncima: array.filter(n => n > media),
        porDebajo: array.filter(n => n < media),
    }
}

const ordenado = array => {
    return array.sort((b, a) => a - b)
}

// programa principal
console.log(calculaMedia(numeros))
console.log(ordenado(numeros))

/* dado un array de textos crea una funcion que tenga como parametros el array y una letra y devuelva 
un nuevo array con los mismos textos pero borrando la letra pasada - usar map */

let textos = ["Ronaldo", "Messi", "Benzema", "Courtois"]

const removeChar = (array, char) => {
    return array.map(element => element.includes(char) ? element.replaceAll(char, "") : element)
}

console.log(removeChar(textos, "a"))

/* ordenar un array de letras de menor a mayor */

const ordenarTexto = array => {
    return array.sort((a,b) => a.length - b.length
    ) 
}

console.log(ordenarTexto(textos))

/* dada una url (http://www.nombredominio.com) devuelve el nombre del dominio */
const devuelveDominio = url => {
    let trozos = url.split(".")
    return trozos[1]
}

console.log(devuelveDominio("www.dominio.com"))