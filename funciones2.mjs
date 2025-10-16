import readline from 'readline'

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

//Ejercicio 1   (Saludo y resta.)
function saludar(nombre) {
    console.log(`Hola ${nombre}, bienvenido a Javascript.`)
}

let resta = (n1,n2) =>{
    let res = n1-n2
    return res
}

// rl.question("Ingrese su nombre para saludarlo: ", (nom)=>{
//     rl.question("Ingrese el primer numero: ", (num1)=>{
//         rl.question("Ingrese el segundo numero: ", (num2)=>{

//             saludar(nom)

//             console.log("La resta de ambos numeros es: ", resta(num1,num2))
//             rl.close()
//         })
//     })
// })



//Ejercicio 2. (Calcular area de un rectanculo.)
function calcularArea(base,altura) {
    let calculo = parseFloat(base*altura)
    return calculo
}

// rl.question("Ingrese la base del rectangulo: ", base =>{
//     rl.question("Ingrese la altura del rectangulo: ", altura=>{
        
//         let result = calcularArea(base,altura)
//         console.log(`El area del rectangulo es ${result}.`)
//         rl.close()
//     })
// })



//Ejercicio 3. (Calcular el descuento de un producto.)
function  calcularDescuento(precio,descuento) {
    
    let des = parseFloat(precio*descuento)
    let totalPagar = precio-des

    console.log(`El descuento del producto obtenido es de $${des} \n Total a pagar es de $${totalPagar}`)
}

rl.question("Ingrese el precio del producto: ", precio =>{
    rl.question("Ingrese el descuento a aplicar, expresado en decimales Ej: 0.2 para el 20% ", descuento=>{

        calcularDescuento(precio,descuento)
        rl.close()
    })
})