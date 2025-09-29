import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});


//Ejercicio 1
//let nombres = [];

// rl.question("Ingrese el primer nombre: ", (nombre1) =>{
//     nombres.push(nombre1)
//     rl.question("Ingrese el segundo nombre: ", (nombre2)=>{
//         nombres.push(nombre2)
//         rl.question("Ingrese el tercer nombre: ", (nombre3)=>{
//             nombres.push(nombre3)
//             console.log("Los nombres ingresados son:")
//             console.log("Primer nombre: ", nombres[0])
//             console.log("segundo nombre: ", nombres[1])
//             console.log("tercer nombre: ", nombres[2])
//             rl.close()
//         })
//     })
// })


//Ejercicio 2
// let nums = [];

// rl.question("Ingrese el primer numero: ", (num1)=>{
//     nums[0]= parseFloat(num1);
//     rl.question("Ingrese el segundo numero: ", (num2)=>{
//         nums[1]= parseFloat(num2);
//         rl.question("Ingrese el tercer numero: ", (num3)=>{
//             nums[2]= parseFloat(num3);

//             const promedio = (nums[0]+nums[1]+nums[2])/3
//             console.log("El promedio de las 3 notas es: ", promedio)
//             rl.close()
//         })
//     })
// })



//Ejercicio 3

let temperaturas = [];

rl.question("Ingresa la temperatura del primer dia: ", (temp1)=>{
    temperaturas[0]= parseFloat(temp1);
    rl.question("Ingrese la temperatura del segundo dia: ", (temp2)=>{
        temperaturas[1]= parseFloat(temp2);
        rl.question("Ingresa la temperatura del tercer dia: ", (temp3)=>{
            temperaturas[2]= parseFloat(temp3);
            let numMax = Math.max(temperaturas[0],temperaturas[1],temperaturas[2])
            console.log(`La temperatura mas alta fue ${numMax}.`)
            rl.close()
        })
    })
})