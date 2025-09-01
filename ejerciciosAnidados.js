//1. Una tienda online gestiona la información de sus productos. Cada producto debe tener:

// Detalles (nombre, precio, categoria)

// Inventario (stock, proveedor, ubicacion)

// Historial (fechaIngreso, ultimaVenta, ventasTotales)

// Tareas a realizar:

// Crear el objeto producto.

// Mostrar únicamente los detalles.

// Aumentar el stock en 50 unidades.

// Cambiar la categoría a "Electrónica".

// Extraer el nombre y precio en variables separadas.

// Mostrar el objeto actualizado.

const producto = {
    Detalles:{
        nombre:"Queso",
        precio: "$4.50",
        categoria: "Lacteos"
    },

    Inventario:{
        stock: 5,
        proveedor: "Las ollitas",
        ubicacion: "Plaza mundo"
    },

    Historial:{
        fechaIngreso: "20 de marzo",
        ultimaVenta: "4 de julio",
        ventasTotales: 200

    },
}
//console.log(producto.Detalles)

//Aumentar el stock
producto.Inventario.stock = 50;

//Cambio de categoria
producto.Detalles.categoria = "Electronica"

//Nombre y precio en variables separadas
const nom = producto.Detalles.nombre
const price = producto.Detalles.precio

//console.log(producto)




//2. Una aplicación móvil necesita gestionar los perfiles de sus usuarios. Se requiere crear un objeto anidado que contenga:


// Información personal (nombre, edad, email)

// Preferencias de la aplicación (idioma, notificaciones, tema)

// Estadísticas de uso (fechaRegistro, ultimoAcceso, numeroSesiones).

// Tareas a realizar:

// Crear un objeto perfilUsuario con tres objetos anidados.

// Mostrar cada sección de información por separado.

// Cambiar el idioma de "español" a "inglés".

// Actualizar la fecha de último acceso a la fecha actual.

// Eliminar una preferencia innecesaria.

// Extraer el email y el idioma en variables separadas.

// Mostrar el perfil completo actualizado.

const perfiles = {
    Info:{
        nombre:"Danny",
        edad: 19,
        email: "Danny10@gmail.com"
    },

    Preferencias: {
        idioma: "Español",
        notificaciones: "Desactivadas",
        tema: "Oscuro"
    },

    Estadisticas: {
        fechaRegistro: "10 de octubre",
        ultimoAcceso: "20 de octubre",
        numeroSesiones: 150
    },

}
//Mostrar las 3 secciones por separado
console.log(perfiles.Info)
console.log("---------------")
console.log(perfiles.Preferencias)
console.log("---------------")
console.log(perfiles.Estadisticas)
console.log("---------------")


//cambiar el idioma
perfiles.Preferencias.idioma = "Ingles"

//Actualizar fecha
perfiles.Estadisticas.ultimoAcceso = new Date()

//Eliminar preferencia innecesaria
delete perfiles.Preferencias.tema

//email e idioma en variables separadas
const correo = perfiles.Info.email
const language = perfiles.Preferencias.idioma

//Mostrar perfil actualizado
console.log(perfiles)







//3. Una biblioteca maneja información de sus libros:

// Información (titulo, autor, genero)

// Disponibilidad (copias, prestados, ubicacion)

// Registro (fechaPublicacion, fechaIngreso, ultimaRevision)

// Tareas a realizar:

// Crear el objeto libro.

// Mostrar la información del autor.

// Calcular cuántos ejemplares disponibles quedan (copias - prestados).

// Actualizar la ultimaRevision con la fecha actual.

// Cambiar el género del libro.

// Extraer titulo y ubicacion en variables.

// Mostrar el objeto actualizado.

const libro = {
    Informacion:{
        titulo:"Harry Potter",
        autor:"J.K Rowling",
        genero:"Fantasia"
    },

    Disponibilidad:{
        copias:500,
        prestados: 250,
        ubicacion: "tercer nivel, estanteria f42"
    },

    registro:{
        fechaPublicacion:"30 octubre 1900",
        fechaIngreso: "1 de diciembre 2003",
        ultimaRevision: "20 de agosto 2025"
    },
}

//Mostrar el autor
console.log(libro.Informacion.autor)

//Ejemplares disponibles
const disponibles = libro.Disponibilidad.copias-libro.Disponibilidad.prestados
console.log(`Libros disponibles: ${disponibles}`)

//Actualizar ultima revision
libro.registro.ultimaRevision= new Date()

//Cambiar genero del libro
libro.Informacion.genero = "Ciencia ficcion"

//titulo y ubicacion en variables diferentes.
const title = libro.Informacion.titulo
const ubication = libro.Disponibilidad.ubicacion

//Mostrar objeto actualizado
console.log(libro)