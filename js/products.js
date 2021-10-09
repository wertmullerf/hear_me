const jsonProducts2 = "../json/productos.json"
$.getJSON(jsonProducts2, function(respuesta, estado){
  if(estado === "success"){
    let misDatos = respuesta
    for(const product of misDatos){
      $("#lista-productos").prepend(
          `
          <div class="card" style="width: 18rem;">
            <img src=${product.img} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${product.product}</h5>
              <p class="card-text">${product.description}</p>
              <p class="card-price">$${product.price}</p>
              <button href="#" class="agregar-carrito" data-id="${product.id}">Buy now</button>
            </div>
          </div>
          `
      )
    }
  }
})