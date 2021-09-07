let headphones = document.getElementById('black_headphone')


function black(){
  headphones.src = "media/black_headphones_web.png"
}
function orange(){
  headphones.src = "media/orange_headphones_web.png"
}

function golden(){
  headphones.src = "media/golden_headphones_web.png"
}
let correct_user = "admin"
let correct_password = 1234

function log_in(){
  do{
    let user = prompt("Ingrese el usuario para continuar")
    let password = parseInt(prompt("Ingrese la contraseña para continuar"))
    if ((user != correct_user)|| (password != correct_password)){
      alert("Ingrese devuelta la contraseña")
      return false
    }else{
      alert("Genial ingresaste correctamente, bienvenido!")
      return true
    }
  }while((user == correct_user)&&(password == correct_password))
}
log_in()

let precio = 199
let monto = 0 
let iva = 1.21



function buy_now(){
  let monto = parseInt(prompt("Ingrese la cantidad que debe llevar"))
  if(validation(monto)){

    let precio_final = (precio*monto)*iva
    alert(precio_final + " Es el precio final hasta el momento!")

  }

  let coupon = prompt("Tiene codigo de descuento? Si es asi, ingreselo.").toLowerCase()

  if(coupon == "lucas"){
    let precio_final = ((precio*monto)*iva) - 20
    alert("Su precio final es " + precio_final + " con un descuento de $20")

  }else if(coupon == "tomas"){
    let precio_final = ((precio*monto)*iva) - 50
    alert("Su precio final es " + precio_final + " con un descuento de $50")
    

  }else if((coupon != "lucas")||(coupon != "tomas")){
    let precio_final = (precio*monto)*iva
    alert("Lamento que no tengas cupones, su precio final es: " + precio_final)

  }
}


function validation(value){
  if((value == "") || (isNaN(value))){
    
    return alert("Debes ingresar un numero")

  }else{

    return true

  }
}


