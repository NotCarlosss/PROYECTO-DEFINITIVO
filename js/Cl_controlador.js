export default class Cl_controlador {
    constructor(modelo, vista){
        this.modelo = modelo;
        this.vista = vista;
    }

    procesarFoto(){
        this.modelo.procesarServicio(this.vista.agregarFoto());
        this.vista.reportarFoto(
            this.modelo.totalVendido(),
            this.modelo.numeroFotosDigitales(),
            this.modelo.subtotalFotosD(),
            this.modelo.promedioVentasD(),
            this.modelo.montoFoto(),
            this.modelo.montoVideo(),
        );
    }

    procesarVideo(){
        this.modelo.procesarServicio(this.vista.agregarVideo());
        this.vista.reportarVideo(
            this.modelo.totalVendido(),
            this.modelo.numeroFotosDigitales(),
            this.modelo.subtotalFotosD(),
            this.modelo.promedioVentasD(),
            this.modelo.montoFoto(),
            this.modelo.montoVideo(),
        );
    }
}