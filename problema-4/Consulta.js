export default class Consulta {
    constructor(nombre, domicilio, telefono, seguro, numSeguro, enfermedad, fecha) {
        this._nombre = nombre.toUpperCase();
        this._domicilio = domicilio;
        this._telefono = telefono;
        this._seguro = seguro;
        this._numSeguro = numSeguro;
        this._enfermedad = enfermedad;
        this._fecha = fecha;
    }

    imprimir() {
        console.log(`${this._nombre}, ${this._domicilio}, ${this._telefono}, ${this._seguro}, ${this._numSeguro}, ${this._enfermedad}, ${this._fecha}`);
    }

    get nombre() {
        return this._nombre;
    }
    get numSeguro() {
        return this._numSeguro;
    }
    get seguro() {
        return this._seguro;
    }

    get enfermedad() {
        return this._enfermedad;
    }
    get fecha() {
        return this._fecha;
    }

    set seguro(seguro) {
        this._seguro = seguro;
    }
    set enfermedad(enfermedad) {
        this._enfermedad = enfermedad;
    }
    set fecha(fecha) {
        this._fecha = fecha;
    }


}