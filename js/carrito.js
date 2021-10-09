class Carrito{
    //add product to cart
    comprarProducto(e){
        e.preventDefault()
        if(e.target.classList.contains('agregar-carrito')){
            const producto = e.target.parentElement.parentElement
            this.leerDatosProducto(producto)
        }
    }
    leerDatosProducto(producto){
        const infoProducto = {
            imagen : producto.querySelector('.card-img-top').src,
            titulo : producto.querySelector('.card-title').textContent,
            precio : producto.querySelector('.card-price').textContent,
            id : producto.querySelector('button').getAttribute('data-id'),
            cantidad: 1
        }
        let productosLS = this.obtenerProductosLocalStorage()
        productosLS.forEach(function(productoLS){
            if(productoLS.id === infoProducto.id){
                productosLS = productoLS.id
            }
        })
        if(productosLS === infoProducto.id){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'This product has already been added !',
            })
        }else{
            this.insertarCarrito(infoProducto)
        }
    }
    insertarCarrito(producto){
        const row = document.createElement('tr')
        row.innerHTML = ` 
            <td>
                <img src = "${producto.imagen}" width = 100>
            </td>
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td>
                <a href = "#" class = "borrar-producto fas fa-times-circle" data-id = "${producto.id}"</a>
            </td>
        ` 
        listaProductos.appendChild(row)
        this.guardarProductosLocalStorage(producto)
    }
    eliminarProducto(e){
        e.preventDefault()
        let producto, productoID
        if(e.target.classList.contains('borrar-producto')){
            e.target.parentElement.parentElement.remove()
            producto =  e.target.parentElement.parentElement
            productoID = producto.querySelector('button').getAttribute('data-id')
        }
        this.eliminarProductoLocalStorage(productoID)
    }
    vaciarCarrito(e){
        e.preventDefault()
        while(listaProductos.firstChild){
            listaProductos.removeChild(listaProductos.firstChild)
        }
        this.vaciarLocalStorage()
        return false

    }

    guardarProductosLocalStorage(producto){
        let productos;
        //Toma valor de un arreglo con datos del Local Storage
        productos = this.obtenerProductosLocalStorage();
        //Agregar el producto al carrito
        productos.push(producto);
        //Agregamos al Local Storage
        localStorage.setItem('productos', JSON.stringify(productos));
    }

    obtenerProductosLocalStorage(){
        let productoLS;

        //Comprobar si hay algo en LS
        if(localStorage.getItem('productos') === null){
            productoLS = [];
        } else {
            productoLS = JSON.parse(localStorage.getItem('productos'));
        }
        return productoLS;
    }

    eliminarProductoLocalStorage(productoID){
        let productosLS
        productosLS = this.obtenerProductosLocalStorage()
        productosLS.forEach(function(productoLs, index){
            if(productosLS.id === productoID){
                productosLS.splice(index, 1)
            }
        })
        localStorage.setItem('productos', JSON.stringify(productosLS))
    }

    leerLocalStorage(){
        let productosLS
        productosLS = this.obtenerProductosLocalStorage()
        productosLS.forEach(function(producto){
            const row = document.createElement('tr')
            row.innerHTML = ` 
                <td>
                    <img src = "${producto.imagen}" width = 100>
                </td>
                <td>${producto.titulo}</td>
                <td>${producto.precio}</td>
                <td>
                    <a href = "#" class = "borrar-producto fas fa-times-circle" data-id = "${producto.id}"</a>
                </td>
            ` 
            listaProductos.appendChild(row)
            
        })
    }

    vaciarLocalStorage(){
        localStorage.clear()
    }
    
    procesarPedido(){
        e.preventDefault()
        location.href = "payment.html"
    }
}

