//IMPORTAMOS EL MODULO
//const readline = require ('readline');
//import readline from 'readline'


//CREAMOS UNA INTERFAZ
//const rl = readline.createInterface({
    //input : process.stdin,
    //output : process.stdout
//})

//REALILZAR PREGUNTA AL USUARIO
//rl.question("Como te llamas?", (nombre)=> {
    //console.log(`Hola, buen dia ${nombre}`)
    //rl.close();
//})

/////////////////////EJERCICIO 1 /////////////////
import readline from 'readline'

const rl = readline.createInterface ({
    input : process.stdin,
    output : process.stdout
});

// rl.question ("En que ciudad vives?", (ciudad)=>{
//     console.log(ciudad);
//     rl.close()
// })



//////////////EJERCICIO 2 ////////////
// rl.question ("Cual es tu color favorito?", (color)=>{
//     console.log(color)
//     rl.close
// })


/////////////EJERCICIO 3//////////////
// rl.question("Ingresa la primer palabra:", (palabra1)=>{
//     rl.question ("Ingres la segunda palabra:", (palabra2) =>{
//         console.log(palabra1, palabra2)
//         rl.close()
//     })
// })


//////////////////EJERCICIO 4 //////////////////
// rl.question("Ingrese el primer numero:", (n1) =>{
//     rl.question("Ingrese el segundo numero:", (n2) =>{
//         let sum = parseInt(n1)+parseInt(n2)
//         console.log(sum)
//         rl.close()
//     })
// })


//////////////////////EJERCICIO 5 //////////////////
// rl.question("Ingrese una temperatura en Celsius para convertir a fahrenheit: ", (celsius)=>{
//     let c = parseFloat(celsius);
//     let conversion = (c*9/5)+32;
//     console.log(`${c}°C equivale a ${conversion}°F`)
//     rl.close()  
// })


/////////////////EJERCICIO 6///////////////////
// rl.question("Ingrese la medida de la base: ", (base)=>{
//     rl.question("Ingrese la altura: ", (altura)=>{
//         let b = parseFloat(base);
//         let a = parseFloat(altura);
//         let area = b*a
//         console.log(area)
//         rl.close()
//     })
// })




/////////////////////////////////////////GUIA PRACTICA DE EJERCICIOS//////////////////////////////////////

//1. Ingrese 3 notas e imprima el promedio.

// rl.question("Ingresa la primera nota: ", (nota1)=>{
//     rl.question("Ingresa la segunda nota: ", (nota2)=>{
//         rl.question("Ingresa la tercer nota: ", (nota3)=>{
//             let promedio = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3
//             console.log(`El promedio es de ${promedio}`)
//             rl.close()
//         })
//     })
// })




//2. Kilometros a millas.

// rl.question("Ingrese el kilometraje a convertir: ", (km)=>{
//     let millas = parseFloat(km) * 0.621371;
//     console.log(`${km}KM equivale a ${millas.toFixed(2)}mi`)
//     rl.close()
// })



//3. Costo total de compra.
rl.question("Ingrese el precio del producto: ", (precio)=>{
    rl.question("Ingrese la cantidad a comprar: ", (cantidad)=>{
        let compra = parseFloat(precio)*parseInt(cantidad);
        console.log(compra)
        rl.close()
    })
})
