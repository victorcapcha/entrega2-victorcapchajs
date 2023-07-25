// Función para ver el listado de todas las bebidas disponibles
function verListadoBebidas() {
  resultado = "Listado de Bebidas:\n";
  bebidas.forEach(bebida => {
    resultado += `\nNombre: ${bebida.nombre} | Precio: $${bebida.precio} | Sabor: ${bebida.sabor} | Marca: ${bebida.marca} | Tamaño: ${bebida.tamaño} | Stock: ${bebida.stock}`;
  });
  console.log(resultado);
  alert(resultado);
}

// Función para buscar una bebida por su nombre
function buscarBebida() {
  const nombreBuscado = prompt("Ingrese el nombre de la bebida a buscar:");
  const bebidaEncontrada = bebidas.find(bebida => bebida.nombre === nombreBuscado);
  if (bebidaEncontrada) {
    resultado = "Bebida encontrada:\n";
    resultado += `\nNombre: ${bebidaEncontrada.nombre} | Precio: $${bebidaEncontrada.precio} | Sabor: ${bebidaEncontrada.sabor} | Marca: ${bebidaEncontrada.marca} | Tamaño: ${bebidaEncontrada.tamaño} | Stock: ${bebidaEncontrada.stock}`;
  } else {
    resultado = `No se encontró una bebida con el nombre "${nombreBuscado}"`;
  }
  console.log(resultado);
  alert(resultado);
}

// Función para filtrar bebidas por sabor
function filtrarBebidas() {
  const saborFiltrado = prompt("Ingrese el sabor de las bebidas que desea filtrar:");
  const bebidasFiltradas = bebidas.filter(bebida => bebida.sabor === saborFiltrado);
  if (bebidasFiltradas.length > 0) {
    resultado = `Bebidas con sabor "${saborFiltrado}":\n`;
    bebidasFiltradas.forEach(bebida => {
      resultado += `\nNombre: ${bebida.nombre} | Precio: $${bebida.precio} | Sabor: ${bebida.sabor} | Marca: ${bebida.marca} | Tamaño: ${bebida.tamaño} | Stock: ${bebida.stock}`;
    });
  } else {
    resultado = `No se encontraron bebidas con el sabor "${saborFiltrado}"`;
  }
  console.log(resultado);
  alert(resultado);
}

// Función para realizar una compra de bebida, actualizando el stock
function realizarCompra() {
  const nombreCompra = prompt("Ingrese el nombre de la bebida que desea comprar:");
  const cantidadCompra = parseInt(prompt("Ingrese la cantidad que desea comprar:"));
  const bebidaSeleccionada = bebidas.find(bebida => bebida.nombre === nombreCompra);
  
  if (bebidaSeleccionada) {
    if (cantidadCompra <= bebidaSeleccionada.stock) {
      bebidaSeleccionada.stock -= cantidadCompra;
      resultado = `Compra realizada:\nHa comprado ${cantidadCompra} unidades de ${nombreCompra}.`;
    } else {
      resultado = `No hay suficiente stock de ${nombreCompra}. Stock actual: ${bebidaSeleccionada.stock}`;
    }
  } else {
    resultado = `No se encontró una bebida con el nombre "${nombreCompra}"`;
  }
  console.log(resultado);
  alert(resultado);
}
