export default class Cl_servicio {
    constructor(codigo, costo) {
        this.codigo = codigo;
        this.costo = costo;
    }
    set codigo(codigo) {
        this._codigo = codigo;
    }
    set costo(costo) {
        this._costo = +costo;
    }
    get codigo() {
        return this._codigo;
    }
    get costo() {
        return this._costo;
    }
    incremento() {
        return 0
    }
    precio() {
        return this.costo;
    }

}