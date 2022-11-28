/* Realiza un formulario con dos elementos “select”. Al cambiar el primero, se actualizará
el segundo. Al enviar el formulario, se comprobará que ambos han sido marcados.

CFGS. DESARROLLO DE APLICACIONES WEB UT2 - PÁGINA.3
Cuando no tengan ninguna selección previa, los “select” mostrarán “Select no
seleccionado”.
Los valores del primer “select” serán “Alicante”, “Castellón”, “Valencia”.
Por defecto no habrá ninguno seleccionado.
Los valores del segundo “select” son:
● Para Alicante: “Alicante Capital”, “Elche”, “Orihuela”.
● Para Castellón: “Castellón Capital”, “Oropesa”, “Vinaroz”.
● Para Valencia: “Valencia Capital”, “Torrent”, “Mislata”. (Aquí saldrá por defecto
seleccionado “Mislata”). */

// provincia seleccionada
const provincia = document.getElementById("primero")

// evento provincia
provincia.addEventListener("change", function(e) {
    const municipios = document.getElementById("segundo")
    // eliminar options
    const options = document.querySelectorAll(".nuevo")
    options.forEach(e => {
        e.remove()
    })

    // crear options con su correspondiente clase
    const option1 = document.createElement("option")
    option1.setAttribute("class", "nuevo")
    const option2 = document.createElement("option")
    option2.setAttribute("class", "nuevo")
    const option3 = document.createElement("option")
    option3.setAttribute("class", "nuevo")

    // index de la provincia seleccionada
    const sel = provincia.selectedIndex

    if(provincia.options[sel].value=="Alicante") {
        option1.text = "Alicante Capital"
        option2.text = "Elche"
        option3.text = "Orihuela"
        municipios.appendChild(option1)
        municipios.appendChild(option2)
        municipios.appendChild(option3)
    } else if(provincia.options[sel].value=="Castellon"){
        option1.text = "Castellón Capital"
        option2.text = "Oropesa"
        option3.text = "Vinaroz"
        municipios.appendChild(option1)
        municipios.appendChild(option2)
        municipios.appendChild(option3)
    } else if(provincia.options[sel].value=="Valencia") {
        option1.text = "Valencia Capital"
        option2.text = "Torrent"
        option3.text = "Mislata"
        municipios.appendChild(option1)
        municipios.appendChild(option2)
        municipios.appendChild(option3)
    }
})

// enviar formulario
const submit = document.querySelector(".formulario")
submit.addEventListener("submit", function(e) {
    let select1 = document.querySelector("#primero");
  let select2 = document.querySelector("#segundo");
 
  let sel1 = primero.selectedIndex;
  let sel2 = segundo.selectedIndex;
 
if (select1.options[sel1].value=="Ninguno seleccionado" || select2.options[sel2].value=="Ninguno seleccionado"){
  e.preventDefault();
  alert("Debe seleccionar los dos campos para poder enviar");
}

})