/* 1. dado un array de numeros, devuelve un objeto 
indicando la Media, los numeros que esten por 
encima y los numeros que esten por debajo */

let numeros = [1.2, 45, -2.98, 3.1415, 78]

let operaciones = array => {
    let sumaTotal = array.reduce((acum, valorActual) => acum + valorActual)
    let media = sumaTotal/array.length
    return {
        media: media,
        porEncima: array.filter(n => n > media),
        porDebajo: array.filter(n => n < media)
    }
}

console.log(operaciones(numeros))

// 2. ordena el array de mayor a menor

let ordenar = array => {
    return array.sort((b,a) => a-b)
}

console.log(ordenar(numeros))

/* 3. dado un array de texto crea la funcion 
que devuelva un nuevo array que elemine los
caracteres que se indiquen a las palabras */

let texto = ["el nove nove", "Real Madrid", "Benzema"]

const eliminaChar = (texto, char) => {
    return texto.map(valor => valor.includes(char) ? valor.replaceAll(char, '') : valor)
}

console.log(eliminaChar(texto, 'a'))

/* 4.ordena por caracteres array=['enhorabuena','hola','que tal']; */

const ordenaTexto = array => {
    return array.sort((a,b) => b.length - a.length)
}

console.log(ordenaTexto(texto))

/* 5.obtener nombre de dominio de una url
console.log(obtenerNombre("https://www.google.es/%22)); */

const obtenerDominio = dominio => {
    let array = dominio.split('.')
    return array[1]
}

console.log(obtenerDominio("https://www.google.es/%22"))

/* 6.ortener los numeros finales de un url
console.log(obtenerNumeroFinal("https://www.google.es/../../847%22)); */

const obtenerNumeroFinal = dominio => {
    let array = dominio.split('/')
    return array[5]
}

console.log(obtenerNumeroFinal("https://www.google.es/../../847"))

// MINI EXAMEN

let entrada = [1,'2', 'cuatro','hola que haces',8,7,22,11,'Dumbo','pala'];

/* 1.Crea una función que devuelva cuántos 
textos y cuántos números hay. */

const cuentaTextosNumeros = array => {
    return {
        textos: array.filter(valor => typeof(valor) === 'string').length,
        numeros: array.filter(valor => typeof(valor) === 'number').length
    }
}

console.log(cuentaTextosNumeros(entrada))

/* 2.Crea una función que devuelva todos 
los números que sean primos. [3 p] */

const primos = array => {
    if(typeof(array) === 'number') {
        for (let i = array - 1; i >= 2; i--) {
            if(array % i === 0) return false
        }
        return true
    } else {
        return false
    }
}

let primo = entrada.filter((valor) => primos(valor))
console.log(primo)

/* 3.Crea una función que devuelva todas las 
palabras que tengan un carácter repetido (ya sea 
mayúscula o minúscula), al menos, dos veces, 
que se le pase por parámetro. El carácter 
es una constante que se modifica en el código 
y debe estar debidamente indicada
*/

const ocurrencia = (array, expresion) => {
    let cuenta = array.match(expresion);
    if(cuenta === null) {
        return 0
    } else {
        return cuenta.length
    }
}

const final = (array, expresion) => {
    array = array.filter(valor => typeof valor === 'string') // me quedo con los string
    let expReg = new RegExp(expresion, 'ig') // ignore case - global
    return array.filter(valor => ocurrencia(valor, expReg) >= 2) // me quedo con los q se repitan +2 veces
}

console.log(final(entrada, 'a'))