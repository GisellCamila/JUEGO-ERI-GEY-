// "TIPOS DE DATOS"
//#region Tipo cadena
// "Esta es una cadenaa con comillas dobles"
// 'Esta es una cadena con comillas simples'
// `Esta es una cadena con 
// comillas invertidas`
//#endregion
//#region Tipo numerico
// 10        numeros enteros positivos
// 0         cero
// -12       numeros enteros negativos
// 23.3      numeros decimales
//   todo tipo de numeros
//#endregion
//#region Tipo logico 
// true // -> Verdadero
// false // -> Falso
//#endregion
// arreglos y objetos

// "TIPOS DE VARIABLES"
//#region de variables
// "para definir variables siempre se debe colocar alguna de las siguientes al principio :
// const minumero = 0;
// let micasa = casa;


// var no recomendada variable pero global es como decir que yo defino
//  una variable pero cualquier persona puede acceder a ella porque es global
//#endregion

//  "OPERADORES ARITMETICOS"
//#region operadores aritmeticos
const suma = 2 + 2;
const resta = 2 - 2;
const multiplicacion = 2 * 2;
const division = 2 / 2;
const modulo = 2 % 2; //residuo de la division
const potenciacion = 2 ** 2;
//#endregion

// "OPERADORES DE COMPARACION"
//#region de operadores de comparacion 
// true - false
const mayor = 2 > 2;
const menor = 2 < 2;
const mayorIgual = 2 >= 2;
const menorIgual = 2 <= 2;

const igualdad = '2' == 2;
const igualdadEstricta = 2 === 2;
// no le importa el tipo de dato, puede comparar por ejemplo 
// cadenas y numeros pero la igualdad estricta si presta atencion a eso

const diferencia = 2 != 2;
const diferenciaEstricta = 2 != 2;
// no le importa el tipo de dato, puede comparar por ejemplo 
// cadenas y numeros pero la igualdad estricta si presta atencion a eso
//#endregion

// const AÑO_NACIMIENTO = 0;
// console.log('El año de naicmiento es:' + AÑO_NACIMIENTO);

// console.log('suma:'+ suma)
// console.log('resta:'+ resta)
// console.log('multiplicacion:'+ multiplicacion)
// console.log('division:'+ division)
// console.log('modulo:'+ modulo)
// console.log('potenciacion:'+ potenciacion)


// CONDICIONALES
//#region condicionales: if, else, switch
// if (3 > 4) {
//     console.log('3 es mayor que 2');
// } else {
//     console.log('3 no es mayor que 4');
// }

// if (3 > 7) {
//     console.log('3 es mayor que 2');
// } else if (5 == 4) {
//     console.log('Cualquier cosa');
// } else {
//     console.log('tqm')
// }

// switch (1) {
//     case 1:
//         console.log(1);
//         break;

//     case 2:
//         console.log(2);
//         break;

//     case 3:
//         console.log(3);
//         break;

//     case 4:
//         console.log(4);
//         break;

//     default:
//         console.log('defecto');
//         break;
// }
//#endregion


// CICLOS
//#region ciclos: for, while, dowhile
// console.log('PARA - FOR')
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// console.log('MIENTRAS - WHILE')
// let index = 0;
// while (index < 10) {
//     console.log(index);
//     index++  //index = index + 1
// }

// console.log('HACER MIENTRAS - DO WHILE')
// let j = 0;
// do {
//     console.log(j);
//     j++;
// } while (j < 10);
//#endregion

//#region EJERCICIO DE CONDICIONALES.
// ``let precio = parseInt(prompt("Ingresa el precio del producto: "))
// let valorDescuento = 0;

// console.log('el precio es: '+precio)
// if (precio < 10000) {
//     console.log('No se aplica descuento');
// } else if (precio <= 20000) {
//     console.log('Se aplica descuento del 7%');
//     valorDescuento = precio * 0.7;
//     precio -= precio * 0.7;
// } else if (precio <= 40000) {
//     console.log('Se aplica descuento del 12%');
//     valorDescuento = precio * 0.12;
//     precio -= precio * 0.12;
// } else {
//     console.log('Se aplica descuento del 15%');
//     valorDescuento = precio * 0.15;
//     precio -= precio * 0.15;
// }

// console.log('el valor del descuento es: '+valorDescuento);
// console.log('el precio final del producto es: '+precio);
//#endregion

//#region EJERCICIO DE CICLOS.
// const numero = parseInt(prompt("Ingresa el numero que quieres verificar: "))
// let contador = 0;

// for (let index = 1; index <= numero; index++) {
//     if (numero % index === 0) {
//         contador ++;
//     }
// }

// if (contador === 2) {
//     console.log("El numero que ingresaste ES PRIMO.")
// } else {
//     console.log("El numero que ingresaste NO ES PRIMO.")
// }
//#endregion

// "ARREGLOS O VECTORES"
//#region 
// #region informacion de vectores
// no tienen que ser homogeneos, pueden tener cualquier tipo de valor
// son constantes
//#endregion

// const numeros = [1, 2, 3, 4, 5]
// console.log(numeros[0])
// console.log(numeros[1])
// console.log(numeros[2])
// console.log(numeros[3])
// console.log(numeros[4])

//#region dos formas de recorrer arreglos:

// forma de recorrer arreglos #1:
// for (let i = 0; i < numeros.length; i = i + 1) {
//     console.log(numeros[i])
// }

// forma de recorrer arreglos #2:
// numeros.forEach((numero) => {
//     console.log(numero)
// })
//#endregion

//#region añadir elemento al final de un arreglo
// console.log('Añadiendo un elemento al final del arreglo');
// numeros.push(6)

// numeros.forEach((numero) => {
//     console.log(numero)
// })
//#endregion

//#region  eliminar elemento al final de un arreglo
// // la cantidad de veces que ponga el pop es la cantidad de datos finales que voy a borrar
// console.log('Eliminando un elemento al final del arreglo');
// numeros.pop()
// numeros.pop()
// numeros.pop()

// numeros.forEach((numero) => {
//     console.log(numero)
// })
//#endregion

//#region añadir un elemento al inicio de un arreglo
// console.log('Añadiendo un elemento al inicio del arreglo');
// numeros.unshift(1000)
// numeros.forEach((numero) => {
//     console.log(numero)
// })
//#endregion

//#region eliminar elemento al inicio de un arreglo
// console.log('Eliminando un elemento al inicio del arreglo');
// numeros.shift()
// numeros.forEach((numero) => {
//     console.log(numero)
// })
//#endregion

//#region map
// console.log('map')
// const numerosModificados = numeros.map((numero) => {
//     return `<h${numero}>${numero * 100}<h${numero}>`
// })

// numerosModificados.forEach((numero) => {
//     console.log(numero)
// })

// document.getElementById('root').innerHTML = numerosModificados.join('<br>')
//#endregion

// #endregion

// "OBJETOS"
// #region
// puede ser cualquier cosa de nuestro entorno y vida cotidiana, 
// lo que sea que podamos escribir con caracteristicas y comportamientos.

//#region Formas de definir/crear objetos:
// forma #1    RECOMENDADA Y MAS USADA
// const persona1 = {
//     nombre: 'Mariana',
//     apellido: 'Usuga',
//     edad: 29
// }
// Forma #2    MENOS USADA
// const persona2 = new Object()
// persona2.nombre = 'Jacobo'
// persona2.apellido = 'Garces'
// persona2.edad = 35

// Forma #3    SEGUNDA MAS USADA
// Pascal Case
// Esta Notacion Consiste En Que Cada Primera Letra De Cada Palabra Va En Mayuscula
// Las que tengan this son las caracteristicas del objeto
// class Persona {
//     constructor(nombre, apellido, edad) {
//         this.nombre = nombre
//         this.apellido = apellido
//         this.edad = edad
//     }
// }


// FORMAS DE IMPRIMIR/MOSTRAR UN OBJETO EN LA CONSOLA
// const persona3 = new Persona('Rosario', 'Tijeras', 300)

// console.log(persona1.nombre);
// console.log(persona1.nombre);
// console.log(persona2['apellido']);
// console.log(persona3.nombre, persona3.edad);
// console.log(persona3.nombre + persona3.edad);
// const propiedad = 'apellido'
// console.log(persona1[propiedad]);

//#endregion

//#endregion 

// "FUNCIONES"
//#region 

// function miPrimeraFuncion(nombre) {
//     console.log('Hola mundo usando funciones ' + nombre)
// }
// miPrimeraFuncion('Jean')



// function miPrimeraFuncion(nombre) {
//     return 'Hola mundo usando funciones ' + nombre
// }
// const mensaje = miPrimeraFuncion('Gisell')
// console.log(mensaje);



// const miPrimeraFuncionFlecha = (nombre) => {
//     return 'Hola mundo usando funciones ' + nombre
// }

//#endregion


//#region "COMO MODIFICAR EL INDEX DESDE EL JAVASCRIPT"
// DOM: Document Object Model => estereotipo de elementos html, pero desde js

// const titulo = document.querySelector('h1')
// titulo.innerText = "Hola, estoy modificando el HTML desde javascript"

// const subtitulo = document.getElementById('subtitulo')
// subtitulo.innerText = "Hola JC, estamos aprendiendo en octubre"

// function crearArbol() {
//     const arbol = document.getElementById('arbol')

//     let contenidoArbol = ''

//     for (let index = 1; index < 30; index++) {
//         for (let j = 1; j <= index; j++) {
//             contenidoArbol += '<span class="hojita">0</span>'
//         }
//         contenidoArbol += '<br>'
//     }

//     contenidoArbol += '<span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><br>'
//     contenidoArbol += '<span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><br>'
//     contenidoArbol += '<span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><br>'
//     contenidoArbol += '<span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><br>'
//     contenidoArbol += '<span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><br>'
//     contenidoArbol += '<span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><br>'
//     contenidoArbol += '<span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><br>'
//     contenidoArbol += '<span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><br>'
//     contenidoArbol += '<span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><br>'
//     contenidoArbol += '<span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><span class="tronco">0</span><br>'

//     arbol.innerHTML = contenidoArbol
// }

// const button = document.querySelector('button')
// button.addEventListener('click', crearArbol)
// button.addEventListener('mouseenter', () => {
//     console.log('El mouse entro')
// })
//#endregion

//#region 
function numeroAleatorio() {
    return Math.floor(Math.random() * (100 - (-100))) + (-100);
}
const buttonY = document.getElementById('btn-si')
buttonY.addEventListener('click', () => {
    const paragraph = document.querySelector('p')
    paragraph.innerText = 'Lo sabia Felicitaciones potra <3'
})

const buttonN = document.getElementById('btn-no')

buttonN.addEventListener('mouseenter', () => {
    buttonN.style.transform = `translateY(${numeroAleatorio()}px) translateX(${numeroAleatorio()}px)`
})
//#endregion
