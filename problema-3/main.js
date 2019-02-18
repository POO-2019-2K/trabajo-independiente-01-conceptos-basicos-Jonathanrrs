import Cuenta from "./Cuenta.js";

let c1 = new Cuenta("Jonathan Ruiz", "Villa Izcalli", "312-111-1111", "12345", "15,500");

c1.imprimir();

console.log(c1.nombre);
console.log(c1.telefono);
console.log(c1.cuenta);

c1.domicilio = "Nuevo domicilio: Mirador";
console.log(c1.domicilio);

c1.saldo = "Saldo nuevo; 12,200";
console.log(c1.saldo);
