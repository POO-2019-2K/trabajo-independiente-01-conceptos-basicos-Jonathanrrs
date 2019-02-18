import Gasto from "./Gasto.js";

let g1 = new Gasto("Jonathan Ramiro", "Subjefe", "312-111-1111", "Firmar contrato", "Aeromexico", "restaurantes", "Cr7", "5000", "USA");

g1.imprimir();

console.log(g1.nombre);
console.log(g1.puesto);
console.log(g1.lugar);

g1.vuelo = 5000;
console.log(g1.vuelo);

g1.comida = 1800;
console.log(g1.comida);

g1.hotel = 3000;
console.log(g1.hotel);

g1.pasaje = 1000;
console.log(g1.pasaje);

var t = g1.vuelo + g1.comida + g1.hotel + g1.pasaje;
console.log("total: " + t);