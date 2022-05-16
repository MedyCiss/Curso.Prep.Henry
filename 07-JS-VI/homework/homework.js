// Do not change any of the function names

function mayuscula(nombre) {
  // La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  // ej: Recibe "mario" ----> Devuelve "Mario"
  // Tu código:
  // .UpperCase() --> Este método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada
  //               Ej; console.log( "alphabet".toUpperCase() ); // "ALPHABET"
  // .slice() --> Este metodo devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido)
  //              Ej: var nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
  //                  var masculinos = nombres.slice(1, 3);
  //                  masculinos contiene ['Pedro','Miguel']

  // var x = nombre[0].toUpperCase() + nombre.slice(1)
  // return x;
  return nombre[0].toUpperCase() + nombre.slice(1);
}


function invocarCallback(cb) {
  // Invoca al callback `cb`
  // Tu código:
  cb();
}


function operacionMatematica(n1, n2, cb) {
  // Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  // Devolver el callback pasándole como argumentos los números recibidos.
  // Tu código:
  return cb(n1, n2);
}


function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  // Tu código:
  // var suma = 0;
  // for (numero of numeros) {
  //  suma = suma + numero;        // suma += numero;
  // }
  // cb(suma);
  var suma = numeros.reduce(function(acc, numeroActual) {
    return acc + numeroActual;
  })
  cb(suma);
}


function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  // Tu código:
  array.forEach(function(elemento) {
    cb(elemento);
  })
}


function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  // Tu código:
  var nuevoArray = [];
  array.map(function(elemento) {
    nuevoArray.push(cb(elemento));
  })
  return nuevoArray;
}


function filter(array) {
  // Filtrar todos los elementos del array que comiencen con la letra "a".
  // Devolver un nuevo array con los elementos que cumplen la condición
  // Tu código:
  // .filter() --> Este metodo crea un nuevo array con todos los elementos que cumplan la condición 
  //               implementada por la función dada
  return array.filter(function(elemento) {
    return elemento[0] === "a";
  })
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
