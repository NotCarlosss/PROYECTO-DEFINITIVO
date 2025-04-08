export default class Cl_vVideo {
    constructor() {
        this.vista = document.getElementById(`videoForm`);
        this.inCodigo = document.getElementById(`videoForm_inCodigo`)
        this.inCosto = document.getElementById(`videoForm_inCosto`)
        this.inFormatoHD = document.getElementById(`videoForm_inFormatoHD`)
        this.btConfirmar = document.getElementById(`videoForm_btConfirmar`)
    }

    get codigo(){
        return +this.inCodigo.value;
    }

    get costo(){
        return +this.inCosto.value;
    }

    get formatoHD(){
        return this.inFormatoHD.value;
    }
    ocultarVistaVideo(){
        this.vista.hidden = true;
    }
    mostrarVistaVideo(){
        this.vista.hidden = false;
    }
    
}