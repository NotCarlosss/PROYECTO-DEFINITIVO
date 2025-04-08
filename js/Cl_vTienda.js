import Cl_mFoto from "./Cl_mFoto.js";
import Cl_mVideo from "./Cl_mVideo.js";
import Cl_vFoto from "./Cl_vFoto.js";
import Cl_vVideo from "./Cl_vVideo.js";

export default class Cl_vTienda {
    constructor() {
        this.controlador = null;
        this.mFoto = null;
        this.mVideo = null;
        this.vFoto = new Cl_vFoto();
        this.vVideo = new Cl_vVideo();
        this.vista = document.getElementById(`mainForm`);
        this.btFoto = document.getElementById(`mainForm_btFoto`);
        this.btVideo = document.getElementById(`mainForm_btVideo`);
        this.btVolverFoto = document.getElementById(`fotosForm_btVolver`);
        this.btVolverVideo = document.getElementById(`videoForm_btVolver`);
        this.tablaFoto = document.getElementById(`mainForm_tablaFotografia`);
        this.tablaVideo = document.getElementById(`mainForm_tablaVideo`);
        this.reqMontoVideo = document.getElementById(`mainForm_reqMontoVideo`);
        this.reqMontoFoto = document.getElementById(`mainForm_reqMontoFoto`);
        this.reqTotalVendido = document.getElementById(`mainForm_reqTotalVendido`);
        this.reqNumeroFotosDigitales = document.getElementById(`mainForm_reqNumeroFotosDigitales`);
        this.reqSubTotalFotosDigitales = document.getElementById(`mainForm_reqSubTotalFotosDigitales`);
        this.reqPromedioVentasDigitales = document.getElementById(`mainForm_reqPromedioVentasDigitales`);
        this.btFoto.onclick = () => {
            this.ocultarVistaTienda();
            this.vVideo.ocultarVistaVideo();
            this.vFoto.montrarVistaFoto();
        };
        this.btVideo.onclick = () => {
            this.ocultarVistaTienda();
            this.vFoto.ocultarVistaFoto();
            this.vVideo.mostrarVistaVideo();
        };
        this.btVolverFoto.onclick = () => {
            this.vFoto.ocultarVistaFoto();
            this.mostrarVistaTienda();
        };
        this.btVolverVideo.onclick = () => {
            this.vVideo.ocultarVistaVideo();
            this.mostrarVistaTienda();
        };
        this.vFoto.btConfirmar.onclick = () => this.controlador.procesarFoto();
        this.vVideo.btConfirmar.onclick = () => this.controlador.procesarVideo();
        this.mostrarVistaTienda();      
        }

        agregarFoto() {
            this.mFoto = new Cl_mFoto({
                codigo: this.vFoto.codigo,
                costo: this.vFoto.costo,
                tipoFoto: this.vFoto.tipoFoto  
            });
            this.mostrarVistaTienda();
            return this.mFoto;
        }
        agregarVideo() {
            this.mVideo = new Cl_mVideo({
                codigo: this.vVideo.codigo,
                costo: this.vVideo.costo,
                formatoHD: this.vVideo.formatoHD  
            });
            this.mostrarVistaTienda();
            return this.mVideo;
        }

        mostrarVistaTienda() {
            this.vista.hidden = false;
            this.vFoto.ocultarVistaFoto();
            this.vVideo.ocultarVistaVideo();
        }

        ocultarVistaTienda() {
            this.vista.hidden = true;
        }

        reportarFoto(totalVendido, numeroFotosDigitales, subTotalFotosDigitales,
             pomedioVentasDigitales, montoFoto, montoVideo) {
            this.tablaFoto.innerHTML += `
            <tr>
                <td>${this.mFoto.codigo}</td>
                <td>${this.mFoto.costo}</td>
                <td>${this.mFoto.tipoFoto}</td>
                <td>${this.mFoto.descuento()}</td>
                <td>${this.mFoto.incremento()}</td>
                <td>${this.mFoto.precio()}</td>
            </tr>`;
            this.reqMontoFoto.innerHTML = montoFoto;
            this.reqMontoVideo.innerHTML = montoVideo;
            this.reqTotalVendido.innerHTML = totalVendido;
            this.reqNumeroFotosDigitales.innerHTML = numeroFotosDigitales;
            this.reqSubTotalFotosDigitales.innerHTML = subTotalFotosDigitales;
            this.reqPromedioVentasDigitales.innerHTML = pomedioVentasDigitales;
             }
        reportarVideo(totalVendido, numeroFotosDigitales, subTotalFotosDigitales,
             pomedioVentasDigitales, montoFoto, montoVideo) {
            this.tablaVideo.innerHTML += `
            <tr>
                <td>${this.mVideo.codigo}</td>
                <td>${this.mVideo.costo}</td>
                <td>${this.mVideo.formatoHD}</td>
                <td>${this.mVideo.incremento()}</td>
                <td>${this.mVideo.precio()}</td>
            </tr>`;
            this.reqMontoFoto.innerHTML = montoFoto;
            this.reqMontoVideo.innerHTML = montoVideo;
            this.reqTotalVendido.innerHTML = totalVendido;
            this.reqNumeroFotosDigitales.innerHTML = numeroFotosDigitales;
            this.reqSubTotalFotosDigitales.innerHTML = subTotalFotosDigitales;
            this.reqPromedioVentasDigitales.innerHTML = pomedioVentasDigitales;
        }



            
}
