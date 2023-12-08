//En vez de el a uso directamente el onClick en el html y acá la función para que reediriga
// function agregarProveedor() {
//   window.location.href = "agregarProveedor.html";
// }

function abrirForm(idForm){
  localStorage.setItem("idForm", JSON.stringify(idForm));
  window.location.replace("agregarProveedor.html");
}

let tablaProveedores = localStorage.getItem("tablaProveedoresStorage");
tablaProveedores = JSON.parse(tablaProveedores);
if (tablaProveedores == null) {
  tablaProveedores = [];
}

function listar() {

  console.log("Ingresando a listar");

  let dataFila = "";

  //Si la tabla que saco del localStorage es mayor a 0 voy a ir sacando las filas.
  if(tablaProveedores.length > 0){
    for(const i in tablaProveedores){
      let varProveedores = JSON.parse(tablaProveedores[i]);
      dataFila += "<tr>";
      // dataFila += "<td>"+varProveedores.idProveedor+"</td>";
      dataFila += "<td>"+varProveedores.proveedor.razonSocial+"</td>";
      dataFila += "<td>"+varProveedores.proveedor.rubro+"</td>";
      dataFila += "<td>"+varProveedores.proveedor.telefono+"</td>";
      dataFila += "<td>"+varProveedores.proveedor.nombreResponsable+""+varProveedores.proveedor.apellidoResponsable+"</td>";
      dataFila += "<td>"+
                  "<button type='button' class='btn btn-warning' onclick='abrirForm("+varProveedores.proveedor.idProveedor+")'>Editar</button>"+
                  "</td>";
      dataFila += "</tr>";

    }
    document.getElementById("dataProveedores").innerHTML = dataFila;
  }


}

