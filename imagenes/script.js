// Array de consolas
const productos = [
    {
      nombre: 'PlayStation 5',
      descripcion: 'Consola de nueva generación con soporte 4K y velocidad ultra rápida.',
      precio: 499.99,
      imagen: 'img1.jpg'
    },
    {
      nombre: 'Xbox Series X',
      descripcion: 'Potente consola de Microsoft con gráficos impresionantes y almacenamiento ampliable.',
      precio: 499.99,
      imagen: 'img2_1.jpg'
    },
    {
      nombre: 'Nintendo Switch',
      descripcion: 'Consola híbrida que puedes usar tanto de forma portátil como en tu televisor.',
      precio: 299.99,
      imagen: 'img3.jpg'
    },
    {
      nombre: 'PlayStation 4 Pro',
      descripcion: 'La versión mejorada de PS4, ideal para quienes buscan alta resolución y rendimiento.',
      precio: 399.99,
      imagen: 'img4.jpg'
    }
  ];
  
  // Contenedor principal donde se inyectarán las tarjetas
  const catalogo = document.getElementById('catalogo');
  
  // Función para crear una tarjeta de consola
  function crearTarjetaProducto(producto) {
    const card = document.createElement('div');
    card.className = 'producto-card';
  
    const imagen = document.createElement('img');
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;
  
    const titulo = document.createElement('h2');
    titulo.textContent = producto.nombre;
  
    const descripcion = document.createElement('p');
    descripcion.textContent = producto.descripcion;
  
    const precio = document.createElement('span');
    precio.className = 'precio';
    precio.textContent = `$${producto.precio.toFixed(2)}`;
  
    const boton = document.createElement('button');
    boton.className = 'btn-comprar';
    boton.textContent = 'Comprar';
  
    // Agregar todos los elementos a la tarjeta
    card.appendChild(imagen);
    card.appendChild(titulo);
    card.appendChild(descripcion);
    card.appendChild(precio);
    card.appendChild(boton);
  
    return card;
  }
  
  // Función para renderizar el catálogo completo
  function renderizarCatalogo() {
    productos.forEach(producto => {
      const tarjeta = crearTarjetaProducto(producto);
      catalogo.appendChild(tarjeta);
    });
  }
  
  // Llamar a la función cuando la página se haya cargado
  window.onload = renderizarCatalogo;
  