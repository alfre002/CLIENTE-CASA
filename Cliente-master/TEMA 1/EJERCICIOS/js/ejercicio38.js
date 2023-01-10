/* Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos,
el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma
descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] } */

const subeBaja = (numeros = undefined) =>{
    for(let num of numeros){
        if(typeof num !== "number") return console.log (`El valor "${num}" no es un número`);
    }
   
     console.log({
         numeros,
         asc:numeros.map(el => el).sort((a,b)=>a-b),
         desc:numeros.map(el => el).sort((a,b)=>a-b).reverse()
     });
}
subeBaja([7, 5,7,8,6,200])