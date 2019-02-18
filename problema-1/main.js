import Empleado from "./Empleado.js";
 let e1 = new Empleado("Jonathan Ruiz", "Mirador", "312-111-1111", "12345", "programador", "12/10/2000");

 e1.imprimir();

 console.log(e1.nombre);
 console.log(e1.cedula);

 e1.puesto = "Jefe del equipo";
 
 console.log(e1.puesto);