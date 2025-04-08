import Cl_servicio from "./Cl_servicio.js";

export default class Cl_mVideo extends Cl_servicio {
    constructor({codigo, costo, formatoHD}) {
        super(codigo, costo);
        this.formatoHD = formatoHD;
    }
    set formatoHD(formatoHD) {
        this._formatoHD = formatoHD.toUpperCase();
    }
    get formatoHD() {
        return this._formatoHD;
    }
    set costo(costo) {
        this._costo = +costo;
    }
    get costo() {
        return this._costo;
    }
    incremento() {
        if (this.formatoHD === "SI") {
            return this.costo * 0.20;
        } else {
            return "No aplica";
        }
    }
    precio() {
        if (this.formatoHD === "SI") {
            return this.costo + this.incremento();
        } else {
            return this.costo;
        }
    }
}