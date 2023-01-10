/* Programa una función para convertir números de base binaria a decimal y viceversa, 
pe. miFuncion(100,2) devolverá 4 base 10. */

const convertBinary = (numero = undefined  ,base = undefined)=>{    
    if (base === 2 ){
        return console.log(`El numero ${numero} en base ${base} = ${parseInt(numero,base)} base 10`);
    }else if(base === 10){
        return console.log(`El numero ${numero} en base ${base} es = ${(numero.toString(2))} base 2`);
    }else{
        return console.log('El tipo de base no es valido');
    }
}
convertBinary(4,10);