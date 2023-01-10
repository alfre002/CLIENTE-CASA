/* Programa una función que dado un array de elementos, elimine los duplicados, pe.e mi
Funcion (“x”,10,”x”,2,”10,10, true,true) devolverá [“x”,10,2,”10”,true] */

const eliminarDuplicado = (array = undefined)=>{   
    return console.log(`El array "${array}"\n sin duplicados es : ${ array =[...new Set(array)] }`)
    }

eliminarDuplicado(["x", 10, "x", 2, "10", 10, true, true]);