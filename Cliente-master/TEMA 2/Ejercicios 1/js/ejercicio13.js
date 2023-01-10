/* Realiza un formulario con dos elementos “select”. Al cambiar el primero, se actualizará
el segundo. Al enviar el formulario, se comprobará que ambos han sido marcados.
Cuando no tengan ninguna selección previa, los “select” mostrarán “Select no
seleccionado”.
Los valores del primer “select” serán “Alicante”, “Castellón”, “Valencia”.
Por defecto no habrá ninguno seleccionado.
Los valores del segundo “select” son:
● Para Alicante: “Alicante Capital”, “Elche”, “Orihuela”.
● Para Castellón: “Castellón Capital”, “Oropesa”, “Vinaroz”.
● Para Valencia: “Valencia Capital”, “Torrent”, “Mislata”. (Aquí saldrá por defecto
seleccionado “Mislata”). */

// funcion cargar provincias
const cargarProvincias = () => {
  var array = ["Alicante", "Castellón", "Valencia"];
  addOptions("provincia", array);
};

// funcion agregar option a un select
const addOptions = (elemento, array) => {
  var selector = document.getElementsByName(elemento)[0];
  for (provincia in array) {
    var option = document.createElement("option");
    option.text = array[provincia];
    option.value = array[provincia].toLowerCase();
    selector.add(option);
  }
};

// funcion cargar pueblos
const cargarPueblos = () => {
  var listaPueblos = {
    Alicante: ["Alicante Capital", "Elche", "Orihuela"],
    castellon: ["Castellón Capital", "Oropesa", "Vinaroz"],
    valencia: ["Valencia Capital", "Torrent", "Mistala"],
  };
  var provincias = document.getElementById("provincia");
  var pueblos = document.getElementById("pueblo");
  var provinciaSeleccionada = provincias.value;
  // se limpia
  pueblos.innerHTML = '<option value="">Seleccione Un Pueblo</option>';
  if (provinciaSeleccionada != "") {
    // seleccionar pueblos
    provinciaSeleccionada = listaPueblos[provinciaSeleccionada];
    // insertar pueblos
    provinciaSeleccionada.foreach(function (pueblo) {
      let opcion = document.createElement("option");
      opcion.value = pueblo;
      opcion.text = pueblo;
      pueblos.add(opcion);
    });
  }
};

// evento 
const selectProv = document.getElementById("provincia")
selectProv.addEventListener("change", function() {
  cargarPueblos()
})

cargarProvincias();