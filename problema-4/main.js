import Consulta from "./Consulta.js";

let c1 = new Consulta("Jonathan Ruiz", "Mirador", "312-111-1111", "Popular", "12345", "Estornudos frecuentes", "20/02/2019");

c1.imprimir();

console.log(c1.nombre);
console.log(c1.numSeguro);

c1.seguro = "Imss";
console.log(c1.seguro);

c1.enfermedad = "Rinitis";
console.log(c1.enfermedad);

c1.fecha = "Fecha nueva 28/02/2018";
console.log(c1.fecha);