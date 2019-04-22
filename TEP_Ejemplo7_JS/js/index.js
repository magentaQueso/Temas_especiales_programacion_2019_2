
//declaramos la función getData
function getData(operacion) {

    //Variables donde se guardarán las entradas del input.
    // Se utiliza parseFloat, para que pueda parsear a flotante el
    // numero introducido.

    var numero_1 = parseFloat(document.getElementsByTagName('input')[0].value);
    var numero_2 = parseFloat(document.getElementsByTagName('input')[1].value);

    //Realiza una validación. Si alguno de los valores solicitados se 
    // no es un número, entonces solicitará nuevamente que se introduzca
    // un número.
    if (isNaN(numero_1) && isNaN(numero_2)) {
        return alert('no son numeros');
    }

    //En esta parte se harán evaluaciones respecto al parámetro que
    // está recibiendo. Según lo que reciba, mandará a llamar a la 
    //función que corresponda.
    if (operacion == 'suma') {
        alert(suma(numero_1, numero_2));
    } else if (operacion == 'resta') {
        alert(resta(numero_1, numero_2));
    } else if (operacion == 'multiplica') {
        alert(multiplica(numero_1, numero_2));
    } else if (operacion == 'divide') {
        alert(divide(numero_1, numero_2));
    }
}

//Funciones que realizan las operaciones aritméticas. Se mandarán a llamar en 
// la función getData.
function suma(numero_1, numero_2) {
    return numero_1 + numero_2;
}

function resta(numero_1, numero_2) {
    return numero_1 - numero_2;
}

function multiplica(numero_1, numero_2) {
    return numero_1 * numero_2;
}

function divide(numero_1, numero_2) {
    return numero_1 / numero_2;
}