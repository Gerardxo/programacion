// Ejercicio 1) Calcular el cuadrado de un numero.

let numCuadrado = (num) => {
    let pow = Math.pow(num, 2)
    return pow
}

console.log(numCuadrado(5));

// Ejercicio 2) Calcular el promedio de 3 numeros.

let promedio = (n1,n2,n3) => {
    let calculo = (n1+n2+n3) / 3
    return calculo
}

console.log(promedio(10,9,8))

// Ejercicio 3) Calcule el area de un triangulo.

let area = (base,altura) => {
    let proceso = (base*altura) / 2
    return proceso
}

console.log(area(8,5))