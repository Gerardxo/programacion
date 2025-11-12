const estudiante = {
    nombre: "Juan",
    apellido: "Lopez",
    edad: "27 años",
    direccion:{
        pais: "El Salvador",
        calle: "Los almendros",
        numCasa: 27
    }

}

console.log(estudiante['direccion'])

//Nueva propiedad
estudiante.colorOjos = "Cafe";
console.log(estudiante)

//Nueva propiedad al objeto anidado
estudiante.direccion.postal = 503;
console.log(estudiante)

//Modificar llave
estudiante.direccion.numCasa = 30;

//Eliminar propiedad del objeto anidado
delete estudiante.direccion.numCasa
