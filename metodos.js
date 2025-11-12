//Importar el modulo
import readline from 'readline'

//Creamos la interfaz

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Realizamos la pregunta
rl.question("Ingrese una frase:", (frase)=>{

    //1. Lenght
    const fraseLenght = frase.length;
    console.log(`La longitud de la cadena es de: ${fraseLenght}`)

    //2. toUpperCase
    const fraseMayus = frase.toUpperCase();
    console.log(`La frase en mayusculas es: ${fraseMayus}`)

    //3. toLowerCase
    const fraseMinus = frase.toLowerCase();
    console.log(`La frase en minusculas es: ${fraseMinus}`)

    //4. trim
    const fraseTrim = frase.trim();
    console.log(`La frase sin espacios al inicio y al final es: ${fraseTrim}`)

    //5. substring
    const subCadena = frase.substring (2,6);
    console.log(`Los primeros 5 caracteres de la frase son: ${subCadena}`);

    //6. slice
    const subCadenaSlice = frase.slice(0,5);
    console.log(`Los primeros 5 caracteres de la frase son: ${subCadenaSlice}`);
    const subCadenaSlice2 = frase.slice(-5);
    console.log(`Los ultimos 5 caracteres de la frase son: ${subCadenaSlice2}`);

    //7. Replace
    const fraseReemplazada = frase.replace('hola', 'adios');
    console.log(`La frase con 'hola' reemplazado con 'adios' es: ${fraseReemplazada}`)

    //8. ReplaceAll
    const fraseReemplazadaAll = frase.replaceAll('hola', 'adios');
    console.log(`la frase con todas las ocurrencias de 'hola' reemplazadas por 'adios' es: ${fraseReemplazadaAll}`);

    //9. Split divide la frase en palabras separandolas por un espacio
    const fraseArray = frase.split(' ');
    console.log(`La frase dividida en palabras es: ${fraseArray}`);

    //10. includes
    const incluyeHola = frase.includes('hola');
    console.log(`La frase incluye la palabra 'hola' : ${incluyeHola}`);

    //11. indexOf
    const indiceHola = frase.indexOf('hola');
    console.log(`El indice de la primera ocurrencia de 'hola' es: ${indiceHola}`);

    //12. startsWith
    const empiezaConHola = frase.startsWith('hola');
    console.log(`La frase empieza con 'hola': ${empiezaConHola}`);

    //13. endsWith
    const terminaConAdios = frase.endsWith('adios');
    console.log(`La frase termina con 'adios': ${terminaConAdios}`);

    rl.close()

    
})