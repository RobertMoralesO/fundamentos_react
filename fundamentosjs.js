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