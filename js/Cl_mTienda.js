import Cl_mFoto from "./Cl_mFoto.js";
import Cl_mVideo from "./Cl_mVideo.js";
export default class Cl_mTienda {
    constructor() {
        this.acumPrecioTotal = 0;
        this.contFotosDigitales = 0;
        this.acumSubtotalFD = 0;
        this.acumMontoFoto = 0;
        this.acumMontoVideo = 0;
    }
    procesarServicio(servicio) {
        this.acumPrecioTotal += servicio.precio();
        if (servicio instanceof Cl_mFoto && servicio.tipoFoto === "D") {
            this.contFotosDigitales++;
            this.acumSubtotalFD += servicio.precio();
        }
        if (servicio instanceof Cl_mVideo) {
            this.acumMontoVideo += servicio.precio();
        }
        if (servicio instanceof Cl_mFoto) {
            this.acumMontoFoto += servicio.precio();
        }

    }
    totalVendido() {
        return this.acumPrecioTotal;
    }
    numeroFotosDigitales() {
        return this.contFotosDigitales;
    }
    subtotalFotosD() {
        return this.acumSubtotalFD;
    }
    promedioVentasD() {
        if (this.contFotosDigitales === 0) {
            return 0;
        }
        return this.acumSubtotalFD / this.contFotosDigitales;
        
    }
    montoFoto () {
        return this.acumMontoFoto;
    }
    montoVideo () {
        return this.acumMontoVideo;
    }

}