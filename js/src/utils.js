var utils = {
    verMas : {
        longitudResumen: 4,
        texto: '',
        primeraParte: function (){
            return String(this.texto).substring(0, this.longitudResumen);
        },
        debeMostrarVerMas: function () {
            return this.texto.length > this.longitudResumen;
        }
    }
}