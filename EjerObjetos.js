//1. Declara un objeto animal, con las propiedades raza, tamaño y color muestra el objeto en consola
//  y luego imprime cada propiedad por separado. 

const animal = {
    raza: "pitbull",
    tamaño: 0.5,
    color: "cafe"
}

console.log(animal)
const {raza, tamaño, color} = animal
console.log(raza)
console.log(tamaño)
console.log(color)

//2. Al objeto animal agrega una nueva propiedad (la que desees) imprímela en consola y luego elimina la propiedad raza.
animal.genero = "Macho"
console.log(animal['genero'])
delete animal.raza


//3. Crea un objeto usuario con las propiedades usuario, email y rol,
//  usa destructuring para crear variables con esas propiedades y mostrarlas en consola.

const user = {
    usuario: "Gerardo",
    email: "gerarjose11@gmail.com",
    rol: "Admin"
}

const {usuario, email, rol} = user;
console.log(usuario, email, rol)