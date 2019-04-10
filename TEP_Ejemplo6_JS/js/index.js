//Se declaran las variables vacias.
var nombre = '';
var apellido = '';
var edad = '';
var pasatiempo = '';

// Se declaran las funciones a las que llamara el evento onclick. Cada una de
// ellas hace uso de su variable, la cual traera una ventana prompt para que el 
// usuario inserte los datos solicitados. 
function getNombre() {
     nombre = prompt("Escribe tu nombre");
}

function getApellido() {
     apellido = prompt("Escribe tu apellido");
}

function getEdad() {
     edad = prompt("Escribe tu edad");
}

function getPasatiempo() {
     pasatiempo = prompt("Escribe tu pasatiempo");
}

// Se imprime en una funcion toda la información que se extrajo desde las ventanas prompt
// y que se almacenaron en sus respectivas variables. Se concatenan las variables con +
function imprimir() {
     alert('Tu nombre es: ' + nombre + ' ' + apellido + ' tu edad es: ' + edad + ' y tu pasatiempo es: ' + pasatiempo);
}



