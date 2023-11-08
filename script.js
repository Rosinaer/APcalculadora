const operando1 = document.getElementById("operando1");
const operando2 = document.getElementById("operando2");
const resultado = document.getElementById("resultado");

function sumar() {
    const valoroperando1 = parseFloat(operando1.value);
    const valoroperando2 = parseFloat(operando2.value);
    resultado.textContent = valoroperando1 + valoroperando2;
}

function restar() {
    const valoroperando1 = parseFloat(operando1.value);
    const valoroperando2 = parseFloat(operando2.value);
    resultado.textContent = valoroperando1 - valoroperando2;

}
function multiplicar() {
    const valoroperando1 = parseFloat(operando1.value);
    const valoroperando2 = parseFloat(operando2.value);
    resultado.textContent = valoroperando1 * valoroperando2;
}

function dividir() {
    const valoroperando1 = parseFloat(operando1.value);
    const valoroperando2 = parseFloat(operando2.value);
    if (operando2 === 0) {
        resultado.textContent = "Error: División por cero";
    } else {
        resultado.textContent = valoroperando1 / valoroperando2;
    }
}

/*Ejercicio 1 Tengo desarrollada la siguiente función en javascript:

function suma (a,b,callback){
    let c = a +b;
    callback( );
    }
    ¿Que es el tercer parámetro recibido?

    El tercer parametro que recibe es un callback que es una función de llamada.

    ¿En que casos es obligatorio desarrollar este tipo de funciones?

    En operaciones asincronicas, en situaciones en las que debemos esperar a que se completeuna operación antes de continuar con el resto del código.

    Realizar un llamado a la función de ejemplo.
    
         
         
            
            function suma() {
                let num1 = parseFloat(document.getElementById("num1").value); 
                let num2 = parseFloat(document.getElementById("num2").value); 
            
                suma(num1, num2, function (result) {
                    document.getElementById('resultado').innerHTML = "El resultado es: " + result;
                });
            }
            
            function suma(a, b, callback) {
                let c = a + b;
                callback(c); 
            }*/
            