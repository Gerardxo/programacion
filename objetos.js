//Creacion de objetos con object literal
const persona = {
    nombre: "Gerardo",
    edad: 19,
    altura: 1.5
}

//Imprimir el objeto
console.log(persona)

//Acceder a las propiedades del objeto
//Acceso por punto
console.log(persona.nombre)

//Acceder a las propiedades por corchete
console.log(persona['edad']);

//Agregamos mas propiedades al objeto
persona.genero = "Masculino"
console.log(persona['genero'])

//Eliminar propiedades
delete persona.altura;
console.log(persona)

//Modificamos el valor de una propiedad o llave
persona.nombre = "Jose";
console.log(persona)

//Asignar el valor de la propiedad del objeto a una variable
const nom = persona.nombre
console.log(nom);

//Destructuring
//const {nombre} = persona;
//console.log(nombre);

//const {edad} = persona;
//console.log(edad)

const {edad,nombre} = persona;
console.log(edad,nombre)