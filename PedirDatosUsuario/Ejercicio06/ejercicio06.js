/**
 * 6 - Crea una página web que pida al usuario el ancho y el alto de un rectángulo y 
 * escriba cuanto es su perímetro (la suma de todos los lados) y su superficie (base por altura)
 */

let ancho = +prompt("Introduzca un ancho: ");
let alto = +prompt("Introduzca un alto: ");

document.write("El perímetro de rectángulo es: " + (ancho+alto)*2 +"<br>");
document.write("La superficie del rectángulo es: " + (ancho*alto));
