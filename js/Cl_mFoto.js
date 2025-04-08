import Cl_servicio from "./Cl_servicio.js";

export default class Cl_mFoto extends Cl_servicio {
    constructor({codigo, costo, tipoFoto}) {
        super(codigo, costo);
        this.tipoFoto = tipoFoto;
    }
    set tipoFoto(tipoFoto) {
        this._tipoFoto = tipoFoto.toUpperCase();
    }
    get tipoFoto() {
        return this._tipoFoto;
    }
    set costo(costo) {
        this._costo = +costo;
    }
    get costo() {
        return this._costo;
    }
    descuento() {
        if (this.tipoFoto === "D") {
            return this.costo * 0.18;
    } else {
            return "No aplica";
        }
    }
    incremento() {
        if (this.tipoFoto === "I") {
            return this.costo * 0.13;
    } else {
            return "No aplica";
        }
    }
    precio() {
        if (this.tipoFoto === "D") {
            return this.costo - this.descuento();
    } else {
            return this.costo + this.incremento();
        }
    }
}