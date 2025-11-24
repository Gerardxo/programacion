import readline from 'readline'
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

//Ejercicio 1. Solicita un número al usuario y muestra su tabla de multiplicar del 1 al 10
// rl.question("Ingrese un numero para mostrar su tabla de multiplicar: ", numero=>{
//     let num = parseInt(numero)

//     for (let i=1; i<=num;i++){
//         let multiplicacion = i*num
//         console.log(`${i} * ${num} = ${multiplicacion}`)
//     }
//     rl.close()
// })



//Ejercicio 2. Mostrar solo números impares entre 1 y 50
// for (let i = 1; i<=50; i+=2){
//     console.log(i)
// }



//Ejercicio 3. Mostrar una secuencia de números del 10 al 100 aumentando de 10 en 10
// for (let i = 10; i<=100; i+=10){
//     console.log(i)
// }



//Ejercicio 4.  Pide al usuario que ingrese 3 nombres separados por espacio. Usa for para mostrarlos uno por uno.
rl.question("Ingresa 3 nombres separados por espacio: ", respuesta=> {
  let nombres = respuesta.split(' ')

  for (let i = 0; i < 3; i++) {
    console.log(`Nombre ${i+1}: ${nombres[i]}`)
  }
  rl.close()
})