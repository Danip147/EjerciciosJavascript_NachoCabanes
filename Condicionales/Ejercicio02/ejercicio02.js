/**
 * 2 - Crea una página web que pida al usuario dos números y diga cuántos de ellos son positivos
 */

let n1 = +prompt("Introduzca un número: ");
let n2 = +prompt("Introduzca otro número: ");

if(n1 > 0 ){
    document.write(n1 + " es positivo <br>");
}else {
    document.write(n1 + " es negativo <br>")
}

if(n2 > 0){
    document.write(n2 + " es positivo <br>");
}else {
    document.write(n2 + " es negativo")
}






