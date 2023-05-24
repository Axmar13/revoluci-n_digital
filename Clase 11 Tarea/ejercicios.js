let topping
let precio
let precioFinal
helado = 13

if (topping == 'Oreo') {
  precio = 10
} else if (topping == 'KitKat') {
  precio = 15
} else if (topping == 'Kinder') {
  precio = 25
} else { 
  console.log('No tenemos este topping')
  precio = 0
}

precioFinal = precio + helado

console.log("El helado cuesta $" + precioFinal)

//------------------------------//

let pedido = 'carne'

switch (pedido) {
  case "carne":
    console.log("\nComo bebida, le ofrecemos vino tinto.\n")
    break

  case "pescado":
    console.log("\nComo bebida, le ofrecemos vino blanco.\n")
    break

  case "verdura":
    console.log("\nComo bebida, le ofrecemos agua.\n")
    break

  default:
    console.log("Por favor, elija carne, pescado o verdura.\n")
    break
}

//------------------------------//

let datos = ["Maraiana", "Graciela", "Silvia"]
  
for (let i = 0; i < datos.length; i++) {
console.log("El dato "+ (i + 1) +" es: "+ datos[i])
}

datos.push("Micaela")

console.log("Ahora los datos son: ")
for (let i = 0; i < datos.length; i++) {
console.log((i + 1) +") "+ datos[i])
}

//------------------------------//

console.log()
let num = 0

while (num < 11){
    console.log("El número "+ num +" es más chico que 11.")
    num ++
}

console.log("\nEl número "+ num +" no es más chico que 11.")