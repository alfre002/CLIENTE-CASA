/* Realiza un programa que cree dinámicamente una tabla de 100x100. Cada elemento
de la tabla tendrá un número único, que empezará en 1 y se irá incrementando de
1 en 1.
Esta página además tendrá un botón que será “Calcular numero casi primos”. Este botón
hará que todas las celdas de la tabla que tengan números “Casi primos” se pongan con
un fondo amarillo. */

const d = document

const boton = d.querySelector("#creaTabla")

function generaTabla() {
    const body = d.querySelector("body")
    const tabla = d.createElement("table")
    const tbody = d.createElement("tbody")
    let cont = 1
    
        for (let i = 0; i < 100; i++) {
            // crea filas
            const tr = d.createElement("tr")
            
            for (let j = 0; j < 100; j++) {
                // crea celdas
                const td = d.createElement("td")
                const textoCelda = d.createTextNode(cont)
                td.appendChild(textoCelda)
                tr.appendChild(td) 
                cont++
            }
            // agrega la fila al final de la tabla
            tbody.appendChild(tr)
        }
    tabla.append(tbody)
    body.appendChild(tabla)
    // modifica borde de la tabla
    tabla.setAttribute("border", "2")
}

boton.addEventListener("click", generaTabla)

const casiPrimos = d.querySelector("#casiPrimos")

const fCasiPrimos = () => {
    for(let i=2;i<100;i++) {      
        for(let j = 2;j<100;j++) {        
            if(j%i==0 && (i==j || i==1)) {          
                console.log(j);          
            }         
        }            
    }
}

casiPrimos.addEventListener("click", fCasiPrimos)
