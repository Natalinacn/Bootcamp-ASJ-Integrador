let tablaProveedores = localStorage.getItem("tablaProveedoresStorage");
tablaProveedores = JSON.parse(tablaProveedores);
if (tablaProveedores == null) {
  tablaProveedores = [];
}

//Saco el dato con getItem

var idForm = localStorage.getItem("idForm");
idForm = JSON.parse(idForm);
if(idForm == null){
    var idForm = 0;
}

cargarProveedores();



function guardar() {
  console.log("PRESIONO GUARDAR");
  const objProveedor = JSON.stringify({
    proveedor: {
      idProveedor: inputIdProv,
      razonSocial: document.getElementById("inputRazon").value,
      rubro: document.getElementById("inputRubro").value,
      calleAltura: document.getElementById("inputDir").value,
      codigoPostal: document.getElementById("inputZip").value,
      localidad: document.getElementById("inputLoc").value,
      provincia: document.getElementById("inputProv").value,
      pais: document.getElementById("inputPais").value,
      sitioWeb: document.getElementById("inputSitio").value,
      telefono: document.getElementById("inputTel").value,
      email: document.getElementById("inputEmail1").value,
      cuit: document.getElementById("inputCuit").value,
      condicionIVA: document.getElementById("inputIva").value,
      nombreResponsable: document.getElementById("inputNombre").value,
      apellidoResponsable: document.getElementById("inputApellido").value,
      telefonoResponsable: document.getElementById("inputTel2").value,
      emailResponsable: document.getElementById("inputEmail2").value,
      rolResponsable: document.getElementById("inputRol").value,
    },
  });
  console.log(objProveedor);

  //NUEVOS PROVEEDORES

  tablaProveedores.push(objProveedor);

  localStorage.setItem(
    "tablaProveedoresStorage",
    JSON.stringify(tablaProveedores)
  );
  window.location.replace("proveedores.html");
}


function cargarProveedores(){
    if(idForm > 0){
        //SACAR DATOS DE LA FILA DE LA TABLA Y PONERLO EN EL FORMULARIO
    }

}


