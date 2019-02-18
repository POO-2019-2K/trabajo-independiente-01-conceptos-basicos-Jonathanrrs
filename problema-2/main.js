import Reservacion from "./Reservacion.js";

let r1 = new Reservacion("Jonathan Ruiz", "20/02/2019", "7:00 pm", "chica", "312-111-1111");

r1.imprimir();

console.log(r1.nombre);
console.log(r1.telefono);

r1.fecha = "Fecha nueva:25/02/2019";
console.log(r1.fecha);

r1.hora = "Nueva hora es: 9:00 pm";
console.log(r1.hora);

r1.mesa = "Grande";
console.log(r1.mesa);