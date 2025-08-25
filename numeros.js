import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//rl.question("Ingrese un numero: ", (num)=>{
    //let numero = Number(num);
    //console.log(`Numero ingresado: ${numero}`);



    //1.Redondear al numero entero mas cercano
    // console.log(`Math.round(${numero}-> ${Math.round(numero)})`)


    //2.Redondear hacia abajo
    // console.log(`Math.floor(${numero}-> ${Math.floor(numero)})`)


    //.3Redondear hacia arriba
    // console.log(`Math.ceil(${numero}-> ${Math.ceil(numero)})`)


    //4.Raiz cuadrada
    // console.log(`Math.sqrt(${numero}-> ${Math.sqrt(numero)})`)


    //5.Elevar a una potencia
    // console.log(`Math.pow(${numero}-> ${Math.pow(numero,2)})`)


    //6.Muestra el valor absoluto
    //console.log(`Math.abs(${numero}-> ${Math.abs(numero)})`)


    //7.Muestra el numero mas grande
    //console.log(`Math.max(${numero}-> ${Math.max(numero,45,2)})`)


    //8.Muestra el numero mas pequeño
    //console.log(`Math.min(${numero}-> ${Math.min(numero,23,5,1,0)})`)


    //9.Genera un numero aleatorio
    //console.log(`Math.random(${numero}-> ${Math.random()})`)

    // let randomNumber = Math.floor(Math.random()*20)+1;
    // console.log(`Numero aleatorio entre 1 y 20: ${randomNumber}`)


    //10.Muestra los decimales que le indiquemos
    //console.log(`toFixed(2): ${numero.toFixed(2)}`);


    //11.Muestra cifras significativas
    //console.log(`toPrecision(4): ${numero.toPrecision(4)}`);


    //12.Covierte el numero a notacion cientifca
    //console.log(`toExponential(2): ${numero.toExponential(2)}`);


    //13.Convierte a binario, octal o hexadecimal
    // console.log(`toString(2): ${numero.toString(2)}`);
    // console.log(`toString(16): ${numero.toString(16)}`);


    // rl.close()
    
//})


//////////////////////////////////////////////////E J E R C I C I O S   P R O P U E S T O S////////////////////////////////////////////////

//1. Solicita un número al usuario y muestra el cuadrado de ese número y su raíz cuadrada. 

// rl.question("Ingrese un numero: ", (num)=>{
//     let numero = Number(num)

//     console.log(`${numero} elevado al cuadrado es igual a ${Math.pow(numero,2)}`)

//     console.log(`La raiz cuadrada de ${numero} es igual a ${Math.sqrt(numero)}`)
//     rl.close()
// })






//2. Un programa de sorteos necesita generar un número aleatorio entre 0 y 29 para asignar un premio.

//console.log(`Numero aleatorio entre 0 y 29: ${Math.floor(Math.random()*30)}`)
//rl.close()





//3.Una tienda de electrodomésticos necesita encontrar el precio más barato y el más caro de su lista de precios:
//  [30, 52, 35, 1, 12, -3].

// console.log(`El objeto mas caro dentro de la lista de precios tiene el monto de ${Math.max(30,52,35,1,12,-3)} `)
// console.log(`El objeto mas barato dentro de la lista de precios tiene el monto de ${Math.min(30,52,35,1,12,-3)} `)
// rl.close()






//4. Un edificio tiene 10 habitaciones por piso. El usuario ingreso el número de habitaciones en el que se encuentra.
//  (ejemplo: habitación 25). El programa debe calcular y mostrar en qué piso está.
//  Deberá pedir el número de la habitación, dividir el número de habitaciones entre 10 y redondear hacia arriba y mostrar el piso correspondiente.

rl.question("Ingrese el numero de la habitacion en la que se encuentra: ", (habitacion)=>{
    let habitacionNumber = Number(habitacion);
    let piso = Math.ceil(habitacionNumber/10);
    console.log(`Usted se encuentra en el piso numero: ${piso}`);
    rl.close()
})


