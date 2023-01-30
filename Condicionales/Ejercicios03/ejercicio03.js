/**
 * 3 - Crea una página web que pida al usuario tres números y diga si son iguales o, en caso contrario, cual es el mayor de ellos
 */

let n1 = +prompt("Introduzca número 1: ");
let n2 = +prompt("Introduzca número 2: ");
let n3 = +prompt("Introduzca número 3: ");

if(n1 == n2 && n2 == n3){
    document.write("Los 3 números son iguales")
}else {
    if(n1 > n2 && n1 > n3){
        document.write(n1 + " es el mayor de los 3");
    }else if (n2 >n1 && n2 > n3){
        document.write(n2 + " es el mayor de los 3");
     }else {
        document.write(n3 + " es el mayor de los 3");
    }
}

