import readline from 'readline'
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})


//Ejercicio 1.
// const contra = 'abobo123@';
// let mensaje;

// rl.question("Ingrese una password: ", pass =>{
//     if (pass===contra){
//         mensaje = 'Bienvenido usuario'
//     }else{
//         mensaje = 'Intente de nuevo. Contraseña incorrecta.'
//     }
//     console.log(mensaje);
//     rl.close()
// })


//Ejercicio 2.
// let mensaje;
// rl.question("Ingrese un numero: ", num=>{
//     if (num > 0){
//         mensaje = 'Es un numero positivo.'
//     }else if (num == 0){
//         mensaje = 'El numero es cero'
//     }else{
//         mensaje= 'Es un numero negativo.'
//     }
//     console.log(mensaje)
//     rl.close()
// })



//Ejercicio 3.
//  let desc
// function calcularDescuento(monto){
//     if(monto =>100){
//         desc = 0.1 
//     }else if(monto => 50 && monto<=99){
//         desc = 0.05
//     }else {
//         desc = 0;
//     }

//     const total = monto - (monto*desc)
//     return total;
// } 


// rl.question("Ingrese el monto de su compra: ", monto=>{
//     let compra = Number(monto)
//     const totalPagar = calcularDescuento(compra)
//     console.log(`Monto de la compra es de: ${compra.toFixed(2)} el total a pagar con descuento es de: ${totalPagar}`)
//     rl.close()
// })



//Ejercicio 4.

// let nombres = ["Hector", "Oscar", "Julio"]

// function buscarNombre(name) {
//     if(nombres.includes(name)){
//         return `${name} si esta en la lista.`
//     }else {
//         return `${name} no esta en la lista`
//     }
// }

// rl.question("Ingrese un nombre: ", name=>{
//     let nombre = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//     console.log(buscarNombre(nombre))
//     rl.close()
// })



//Ejercicio 5.


function categoriaEdad(edad){
    if(edad >= 0 && edad <12){
        return  'Esta en la niñez.'
    }else if( edad >= 12 && edad < 18){
        return  'Esta en la adolescencia.'
    }else if( edad >= 18 && edad < 60){
        return  'Esta en la adultez.'
    }else{
        return  "Esta en la vejez."
    }
}

rl.question("Ingrese su edad: ", edad=>{
    console.log(categoriaEdad(edad))
    rl.close()
})