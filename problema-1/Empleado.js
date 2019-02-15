export default class Empleado {
    constructor(nombre, domicilio, telefono, cedula, puesto, fechaIngreso,) {
    this._nombre = nombre.toUpperCase();
    this._domicilio = domicilio;
    this._telefono = telefono;
    this._cedula = cedula;
    this._puesto = puesto;
    this._fechaIngreso = fechaIngreso;
    }

    imprimir() {
        console.log(`${this._nombre}, ${this._domicilio}, ${this._telefono}, ${this._cedula}, ${this._puesto}, ${this._fechaIngreso}`);

    }

}