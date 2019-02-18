export default class Reservacion {
    constructor(nombre, fecha, hora, mesa, telefono) {
        this._nombre = nombre.toUpperCase();
        this._fecha = fecha;
        this._hora = hora;
        this._mesa = mesa;
        this._telefono = telefono;
    }
    
    imprimir() {
        console.log(`${this._nombre}, ${this._fecha}, ${this._hora}, ${this._mesa}, ${this._telefono}`);
    }

    get nombre() {
        return this._nombre;
    }

    get telefono() {
        return this._telefono;
    }

    get fecha() {
        return this._fecha;
    }

    get hora() {
        return this._hora;
    }

    get mesa() {
        return this._mesa;
    }

    set fecha(fecha) {
        this._fecha = fecha;
    }

    set hora(hora) {
        this._hora = hora;
    }

    set mesa(mesa) {
        this._mesa = mesa;
    }
}