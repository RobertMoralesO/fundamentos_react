// var vs let vs const

/** 
var edad = 10;
var edad = 20;
console.log(edad); //20

let edad2 = 10;
//let edad2 = 20
console.log(edad2);

let edad3 = 50;
edad3 = 40;
console.log(edad3);

const ed = 10;
// const ed = 20
// ed = 30;
**/
// Escope de var, let y const

/**
 
var edad = 10;
if (true) {
  var edad = 20;
  console.log(edad); //20
}
console.log(edad); //20
**/

/**
let edad = 10;
if (true){
  let edad = 20;
  console.log(edad);
}
console.log(edad);
**/

/**
 * const edad = 10
if(true){
  const edad = 20
  console.log(edad)
}
console.log(edad)
 */

/*
var edades = [10, 20, 30]
var edades = [40, 50, 60]
console.log(edades)
*/

/*
let edades = [10, 20, 30]
edades = [40, 50, 60]
console.log(edades)
*/

const edades = [10, 20, 30];
edades.push(50);
console.log(edades);

const persona = {
  nombre: "Roberto",
  apellido: "Morales",
  edad: 32
};

persona.edad = 33;
persona.nombre = "Sergio";
console.log(persona);

// Funciones

/*
function sumar(num1, num2) {
  console.log(num1 + num2);
}
*/

//sumar(10, 20)
//const s = sumar;
//s(10, 20);

// Función Flecha
const sumar = (num1, num2) => {
  console.log(num1 + num2);
};
//sumar(10, 20)

const sumarDos = num1 => {
  console.log(num1);
};

const sumarDos2 = () => {
  console.log('No tiene parámetros');
};

//sumarDos(50);

/*const sumarTres = num1 =>{
  return num1
}

console.log(sumarTres(5))
*/

const SumarTres = num1 => num1 * 4

console.log(SumarTres(5))

const sumarCuatro = (num1, num2) => {
  return 'La suma es: ' + (num1 + num2)
}

console.log(sumarCuatro(10, 20))

const sumarCinco = (num1, num2) => 'La suma es: '+(num1 + num2)


console.log(sumarCinco(10, 20))


// Template String

const numero = (num) => {
  return "el número es: " + num;
};

const resultado = numero(10)
console.log(resultado)

//backtick
const numero2 = (num) => {
  return `el número es: ${num}`;
};