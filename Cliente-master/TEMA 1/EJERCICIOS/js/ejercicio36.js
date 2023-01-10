/* Programa una función que dado un array devuelva el número más alto y el más bajo de dicho
array, p.e. miFuncion([1,5,34,99,-2]) devolverá [99,-60] */

const maxMin = (ArrayNum = undefined) =>{
    for(let num of ArrayNum){
        if(typeof num !== "number") return console.log (`El valor "${num}" no es un número`);
    }
    let numeroAlto = Math.max(...ArrayNum);
    let numeroBajo = Math.min(...ArrayNum);
    const minMax = [];
    minMax.push(numeroAlto);
    minMax.push(numeroBajo);
    return console.info(`El array de maximo y minimo es: [${minMax}]`);
}
maxMin([1,4,5,99,-60]);
