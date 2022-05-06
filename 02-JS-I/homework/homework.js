// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Mi nombre es Tomas";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 27;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código: 
  return str;
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var suma = x + y;
  return suma;
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  return x - y;
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return x * y;
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var division = x / y;
  return division;
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  // Otra forma de hacerlo
  // if (x == y) {
  //     return true;
  // } else {
  //     return false;
  // }
  if (x === y) {  
    return true;  
  }               
  return false;    
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  // Se puede hacer también como en el ejer. de arriba
  if (str1.length == str2.length) {
    return true;
  }
  return false;
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  // Se  puede hacer también poniendo else como el ejer. de arriba
  // O como el ejer. de abajo sin el if
  if (num < 90) {
    return true;
  }
  return false;
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  // Esto se puede hacer ya que al utilizar un operador de comparación, por lo que JS sabe que
  // q tiene q hacer una comparación y devolver el valor correspondiente.
  return num > 50;
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  // O se puede hacer creando un var Resto = x % y;
  //                                 return Resto;
  return x % y;
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  // O se puede hacer
  // if (num % 2 === 0) {          Se puede usar también el operador 'Distinto de...' (!==)
  //     return true;
  // } else if (num % 2 === 1) {
  //     return false;
  // }
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  // Otra forma de hacerlo distinta al ejer. de arriba
  if (num % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  // Se puede hacer:
  // var alcuadrado = Math.pow (num,2);     return Math.pow (num,2);
  // return alcuadrado;
  return num * num;
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  // Se puede hacer de las mismas formas que el ejer. de arriba
  return num * num * num;
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return Math.pow (num,exponent);
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return Math.round (num);
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil (num);
}

function numeroRandom() {
  // Generar un número al azar entre 0 y 1 y devolverlo
  // Pista: investigá qué hace el método Math.random() -- Retorna un número pseudo-aleatorio dentro 
  // del rango [0,1), el cual puede escalar hasta el rango deseado
  return Math.random (0,1);
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero > 0) {
    return "Es positivo";
  } else if (numero < 0) {
    return "Es negativo";
  } else if (numero === 0) {  // Aqui se podria poner solamente else {, ya que al tener arriba <0>,
    return false;             // la siguiente comparación será === 0
  }
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return `${str}!`;          // También se puede poner return str + "!";
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  return (nombre + " " + apellido); 
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  // Otra forma: return `Hola ${nombre}!`;
  return "Hola " + nombre + "!";     
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  return alto * ancho;
}

function retornarPerimetro(lado) {
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
 return lado * 4;
}

function areaDelTriangulo(base, altura) {
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return (base * altura) / 2;
}

function deEuroAdolar(euro) {
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí:
  // Se puede hacer 
  // var dolar = euro * 1.2;
  // return dolar;
  return euro * 1.2;
}

function esVocal(letra) {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  if (letra.length > 1) {
    return "Dato incorrecto";         // ||(Alt Gr + 1) este símbolo significa "o"
  } 
  if (
    letra === "a" || 
    letra === "e" || 
    letra === "i" || 
    letra === "o" || 
    letra === "u"
    ) {
    return "Es vocal";
  }
  return "Dato incorrecto";
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
