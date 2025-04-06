export default class Cl_vFoto {
    constructor() {
        this.vista = document.getElementById(`fotosForm`);
        this.Codigo = document.getElementById(`fotosForm_inCodigo`);
        this.Costo = document.getElementById(`fotosForm_inCosto`);
        this.TipoFoto = document.getElementById(`fotosForm_inTipo`);
        this.btConfirmar = document.getElementById(`fotosForm_btConfirmar`);
    }

    get codigo() {
        return this.Codigo.value;
    }

    get costo() {
        return +this.Costo.value;
    }

    get tipoFoto() {
        return this.TipoFoto.value;
    }

    montrarVistaFoto() {
        this.vista.hidden = false;
    }

    ocultarVistaFoto() {
        this.vista.hidden = true;
    }
}