export default class Cl_vFoto {
    constructor() {
        this.vista = document.getElementById(`fotosForm`);
        this.inCodigo = document.getElementById(`fotosForm_inCodigo`);
        this.inCosto = document.getElementById(`fotosForm_inCosto`);
        this.inTipoFoto = document.getElementById(`fotosForm_inTipo`);
        this.btConfirmar = document.getElementById(`fotosForm_btConfirmar`);
    }

    get codigo() {
        return this.inCodigo.value;
    }

    get costo() {
        return +this.inCosto.value;
    }

    get tipoFoto() {
        return this.inTipoFoto.value;
    }

    montrarVistaFoto() {
        this.vista.hidden = false;
    }

    ocultarVistaFoto() {
        this.vista.hidden = true;
    }
}