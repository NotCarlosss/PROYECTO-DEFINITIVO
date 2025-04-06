export default class Cl_vVideo {
    constructor() {
        this.Vista = document.getElementById(`videoForm`);
        this.Codigo = document.getElementById(`videoForm_inCodigo`)
        this.Costo = document.getElementById(`videoForm_inCosto`)
        this.FormatoHD = document.getElementById(`videoForm_inFormatoHD`)
        this.btConfirmar = document.getElementById(`videoForm_btConfirmar`)
    }

    get codigo(){
        return +this.Codigo.value;
    }

    get costo(){
        return +this.Costo.value;
    }

    get formatoHD(){
        return this.FormatoHD.value;
    }
    ocultarVistaVideo(){
        this.Vista.hidden = true;
    }
    mostrarVistaVideo(){
        this.Vista.hidden = false;
    }
    
}