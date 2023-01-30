/**
 * 1 - Crea una página web que pida al usuario su nombre y su (primer) apellido y 
 * escriba "Hola Sr. " seguido de su apellido, una coma y su nombre (por ejemplo, "Hola, Sr. Cabanes, Nacho")
 */

let nombre = prompt("Por favor introduzca su nombre: ");
let apellido = prompt("Por favor introduzca su apellido: ");

document.write("Hola, Sr." + apellido+ " , " + nombre );