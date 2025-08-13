import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/////////GUIA PRACTICA/////////

//Ejercicio 1.
// rl.question("Ingrese su nombre completo:", (nombre)=>{
//     const usuario = nombre.trim();
//     const nombreReplace = nombre.replaceAll(" ","");
//     const caracteres = nombreReplace.length

//     console.log(`Nombre: ${usuario}.`)
//     console.log(`Nombre sin espacios ${nombreReplace}`)
//     console.log(`El nombre posee ${caracteres} caracteres.`)

//     rl.close()
// })




//Ejercicio 2.
// rl.question("Ingrese su correo electronico: ", (correo)=>{
//     const minus = correo.toLowerCase();
//     const verificacion = minus.includes('@gmail.com');
//     console.log(`El correo electronico es: ${minus}`)
//     console.log(`Dominio valido: ${verificacion}`)

//     rl.close()
// })



//Ejercicio 3.
// rl.question("Ingrese un codigo: ", (codigo)=>{
//     const num4 = codigo.slice(-4)
//     console.log(`El codigo es ${codigo}`)
//     console.log(`Los ultimos 4 digitos son ${num4}`)
// })



//Ejercicio 4.
rl.question("Escriba un mensaje...", (mensaje)=>{
    const posicion = mensaje.indexOf('error')
    console.log(`La palabra "error" se encuentra en la posicion ${posicion}`)
})