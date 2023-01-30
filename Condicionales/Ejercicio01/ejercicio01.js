/**
 * 1 - Crea una página web que pida al usuario dos números y muestre su división,
 *  pero sólo en caso de que el segundo no sea cero; si el segundo es cero, deberá escribir 
 * "No se puede dividir entre cero"
 */

let n1 = +prompt("Introduzca un número: ");
let n2 = +prompt("Introduzca otro número: ");

if(n2 == 0){
     document.write("No se puede dividir entre cero")
}else{
    document.write("El resultado de dividir : " + n1 + " / " +n2+ " es: " + (n1/n2));
}