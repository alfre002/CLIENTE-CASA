/* Programa una función que dado un array numérico devuelve otro array con los números
elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25] */

const numerosCuadrado = (numeros = []) =>{
    for(let num of numeros){
        if(typeof num !== "number") return console.log (`El valor "${num}" no es un número`);
    }
    
    numeros.forEach(numero => { 
        console.log(numero * 2);
    });
    const newArr = numeros.map(el => el * el);
    return console.info(`Arreglo original ${numeros},\n Arreglo elevado al cuadrado : ${newArr}`);
}
numerosCuadrado([1,2,3]);
