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

// Destructuring Objects

const mascota = {
  nombre: 'Tom',
  edad: 10,
  vivo: true,
  razas: ['peludo', 'negro']
}

console.log(mascota.razas[0])
console.log(mascota.nombre)

const {nombre, vivo, razas} = mascota
console.log(nombre)
console.log(vivo)
console.log(razas[0])

const web = {
  nombre: 'certika.co',
  links: {
    enlace: 'www.certika.co'
  },
  redesSociales:{
    youtube:{
      enlace: 'youtube.com/certika',
      nombre: 'certika yb'
    },
    facebook:{
      enlace: 'facebook.com/certika',
      nombre: 'Certika fb'
    }
  }
}

const enlaceYT = web.redesSociales.youtube.enlace
console.log(enlaceYT)
const {enlace} = web.redesSociales.youtube
const {redesSociales} = web
console.log(redesSociales.youtube.enlace)


//Promesa
/*
fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((data) => {
    data.results.forEach((element) => {
      console.log(element);
    });
  });
*/

const obtenerPersonajes = async () => {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();
    const results = await data.results;
    const personajesMujeres = results.filter(p => p.gender === 'Female');
    console.log(personajesMujeres);
  } catch (error) {
    console.log(error);
  }
};

obtenerPersonajes();


//Objeto Literal

const persona = {
  nombre: 'Roberto',
  apellido: 'Morales',
  edad: 32,
  direccion:{
    ciudad: 'Barranquilla',
    pais: 'Colombia'
  }
}

const persona2 = {...persona}

persona2.nombre = 'Carlos'
console.log(persona)
console.log(persona2)

//Arreglos

const arreglo = [1, 2, 3, 4];
const arreglo2 = [...arreglo, 100];

arreglo[0] = 50;

//console.log(arreglo);
//console.log(arreglo2);

const a = new Array(100);
//console.log(a)

// FUNCIÓN MAP

console.log("Antes del map: " + arreglo);
const map = arreglo.map(function () {
  return 5;
});

const map2 = arreglo.map(() => {
  return 5;
});

const map3 = arreglo.map(() => 5);

const map4 = arreglo.map(() => 5);
console.log(map);
console.log("Después del map: " + map4);

// Crear un array que dado un array inicial regrese
// la multiplicación de sus elementos por 2

const arreglo3 = [1, 2, 3, 4];

const respuesta = arreglo3.map((item) => item * 2);
console.log("Arreglo Inicial: " + arreglo3);
console.log("Respuesta: " + respuesta);

// FUNCIÓN FIND

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12

// FUNCIÓN FILTER

const array2 = [5, 12, 8, 130, 44];

const found2 = array2.filter(element => element > 10);

console.log(found2);
// expected output: 12, 130, 44

// OPERADOR TERNARIO

function getFee(isMember) {
  return (isMember ? '$2.00' : '$10.00');
}

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(null));
// expected output: "$10.00"

console.log(getFee(0));
// expected output: "$10.00"

console.log(getFee(50));
// expected output: "$10.00"