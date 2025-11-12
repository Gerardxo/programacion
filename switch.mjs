// 1-	Crea un programa con un menú de opciones que le permita al usuario elegir una de las 5 opciones:
// •	Sumar
// •	Restar
// •	Multiplicar
// •	Dividir
// •	Salir
// Cada operación debe realizarse dentro de una función distinta (sumar, restar, etc.) y usarse un switch para elegir la operación.

import readline from 'readline'

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})


function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "No se puede dividir entre cero";
  }
  return a / b;
}

function mostrarMenu() {
  console.log("\n Menú de opciones:");
  console.log("1. Sumar");
  console.log("2. Restar");
  console.log("3. Multiplicar");
  console.log("4. Dividir");
  console.log("5. Salir");

//   rl.question("Elige una opción (1-5): ", opcion => {
//     switch (opcion) {
//       case '1':
//         pedirNumeros('sumar');
//         break;
//       case '2':
//         pedirNumeros('restar');
//         break;
//       case '3':
//         pedirNumeros('multiplicar');
//         break;
//       case '4':
//         pedirNumeros('dividir');
//         break;
//       case '5':
//         console.log("¡Hasta luego!");
//         rl.close();
//         break;
//       default:
//         console.log("Opción inválida. Intenta de nuevo.");
//         mostrarMenu();
//     }
//   });
}

// function pedirNumeros(operacion) {
//   rl.question("Ingrese el primer número: ", num1 => {
//     rl.question("Ingrese el segundo número: ", num2 => {
//       const a = parseFloat(num1);
//       const b = parseFloat(num2);
//       let resultado;

//       switch (operacion) {
//         case 'sumar':
//           resultado = sumar(a, b);
//           break;
//         case 'restar':
//           resultado = restar(a, b);
//           break;
//         case 'multiplicar':
//           resultado = multiplicar(a, b);
//           break;
//         case 'dividir':
//           resultado = dividir(a, b);
//           break;
//       }
//       console.log(`Resultado: ${resultado}`);
//       mostrarMenu();
//     });
//   });
// }

// mostrarMenu()

// 2-	Crea una función que muestre un saludo según la hora del día en que se encuentre.
// •	6 a 11:00am : Buenos días
// •	12 a 17 pm : Buenas tardes
// •	18 a 23 pm: Buenas noches
// •	0 a 5: a dormir


function saludoHora() {
  let fecha = new Date();       
  let hora = fecha.getHours();  

  if (hora >= 6 && hora <= 11) {
    console.log("Buenos días");
  } else if (hora >= 12 && hora <= 17) {
    console.log("Buenas tardes");
  } else if (hora >= 18 && hora <= 23) {
    console.log("Buenas noches");
  } else {
    console.log("A dormir");
  }
}


//saludoHora();


// 3-	Un cine desea automatizar el cálculo del precio de entrada según la edad del cliente.
// Las tarifas son las siguientes:
// •	Niños menores de 12 años: pagan $3.00
// •	Adultos de 12 a 59 años: pagan $5.00
// •	Adultos mayores de 60 años o más: pagan $2.50


function calcularPrecio(edad) {
  if (edad < 12) {
    return 3.00;
  } else if (edad >= 12 && edad <= 59) {
    return 5.00;
  } else if (edad >= 60) {
    return 2.50;
  } else {
    return null;
  }
}


// rl.question("Ingrese la edad del cliente: ", respuesta => {
//   const edad = parseInt(respuesta);

//   if (isNaN(edad) || edad < 0) {
//     console.log("Edad inválida. Intente de nuevo.");
//   } else {
//     const precio = calcularPrecio(edad);
//     console.log(`El precio de la entrada es: $${precio.toFixed(2)}`);
//   }

//   rl.close();
// });




// 4-	Crea un programa que calcule el costo del estacionamiento según las horas que el vehículo estuvo en el parqueo.
// Las tarifas son:
// 1 hora → $2
// De 2 a 4 horas → $5
// Más de 4 horas → $10
// El programa debe pedir al usuario cuántas horas estuvo estacionado y mostrar el total a pagar.
// Si el usuario ingresa un número negativo o no válido, se debe mostrar un mensaje de error.


function calcularCosto(horas) {
  if (horas === 1) {
    return 2.00;
  } else if (horas >= 2 && horas <= 4) {
    return 5.00;
  } else if (horas > 4) {
    return 10.00;
  } else {
    return null;
  }
}

rl.question("Ingrese cuántas horas estuvo estacionado: ", respuesta => {
  const horas = parseInt(respuesta);

  if (isNaN(horas) || horas < 0) {
    console.log("Error: número de horas inválido.");
  } else {
    const costo = calcularCosto(horas);
    if (costo === null) {
      console.log("Error: número de horas inválido.");
    } else {
      console.log(`El costo del estacionamiento es: $${costo.toFixed(2)}`);
    }
  }

  rl.close();
});


