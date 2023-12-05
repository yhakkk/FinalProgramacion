
fetch('http://localhost:3000/api/localidad', { 
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Error buscar la localidad');
    }
    console.log('Pedido encontrado');
    return response.json();
  })
  .then(data => {
    console.log(data);
    data.forEach(localidad => {
        createOptionPedido(localidad);
      });
    

  })
  .catch(error => console.error('Error:', error));



function createOptionPedido({idLocalidad,nombreLocalidad}){
    let select = document.getElementById("localidades");
    let option = document.createElement("option");

    option.textContent = nombreLocalidad;
    option.value = idLocalidad;
    
    select.appendChild(option);
}





function buscarLocalidad(){
    let idLocalidad = document.getElementById("localidades").value
    let tabla = document.getElementById("tabla-pedidos");
    let filas = tabla.getElementsByTagName('tr');
        for (let i = filas.length - 1; i > 0; i--) {
            tabla.removeChild(filas[i]);
        }
    fetch(`http://localhost:3000/api/pedido/busqueda/${idLocalidad}`, { 
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error buscar el pedido');
        }
        console.log('Pedido encontrado');
        return response.json();
      })
      .then(data => {
        console.log(data);
        for (let index = 0; index < data.length; index++) {
            CrearRow(data[index]);
            
        }
    
      })
      .catch(error => console.error('Error:', error));
    


}










function CrearRow({idEstado,idPedido,nombre,apellido,telefono,nombreLocalidad,totalpedido,nombreestado}){
    let tabla = document.getElementById("tabla-pedidos");
    let row = document.createElement("tr");
  
    let tdidPedido = document.createElement("td");
    tdidPedido.textContent = idPedido;
    row.appendChild(tdidPedido);
  
    let tdNombre = document.createElement("td");
    tdNombre.textContent = nombre;
    row.appendChild(tdNombre);
  

    let tdApellido = document.createElement("td");
    tdApellido.textContent = apellido;
    row.appendChild(tdApellido);

    let tdTelefono = document.createElement("td");
    tdTelefono.textContent = telefono;
    row.appendChild(tdTelefono);

    let tdNombreLocalidad = document.createElement("td");
    tdNombreLocalidad.textContent = nombreLocalidad;
    row.appendChild(tdNombreLocalidad);

    let tdTotalPedido = document.createElement("td");
    tdTotalPedido.textContent = totalpedido;
    row.appendChild(tdTotalPedido);

    let tdNombreEstado = document.createElement("td");
    tdNombreEstado.textContent = nombreestado;
    row.appendChild(tdNombreEstado);

    let tdBTN = document.createElement("button");
    tdBTN.textContent = "Actualizar Estado";
    tdBTN.className = "BTNEditar";
    tdBTN.id = idPedido;
    tdBTN.onclick = function () {
        cambiarEstado(idPedido,idEstado)
    };
    row.appendChild(tdBTN);
    
    
  
    tabla.appendChild(row);
  }


  function cambiarEstado(idPedido,idEstado){

        let nuevoEstado = idEstado + 1;
        if (nuevoEstado > 3) {
            alert("No se puede actualizar");
            nuevoEstado = 3;
        }

        let datosPedido = {
            idEstado: nuevoEstado,
            idPedido: idPedido
        };
    
        fetch('http://localhost:3000/api/pedido', { 
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosPedido)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al actualizar el estado del pedido');
            }
            console.log('Estado del pedido actualizado correctamente');
            actualizarTabla();
        })
        .catch(error => console.error('Error:', error));
    }


    function actualizarTabla() {
        let idLocalidad = document.getElementById("localidades").value;
    
        fetch(`http://localhost:3000/api/pedido/busqueda/${idLocalidad}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener los pedidos');
            }
            console.log('Pedidos obtenidos correctamente');
            return response.json();
        })
        .then(data => {
            let tabla = document.getElementById("tabla-pedidos");
            let filas = tabla.getElementsByTagName('tr');
      
            for (let i = filas.length - 1; i > 0; i--) {
                tabla.removeChild(filas[i]);
            }
    
            data.forEach(pedido => {
                CrearRow(pedido);
            });
        })
        .catch(error => console.error('Error:', error));
    }
    