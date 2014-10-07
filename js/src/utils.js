var utils = {
    verMas : {
        longitudResumen: 4,
        original: '',

        cortarHasta: function (){
            return String(this.original).substring(0, this.longitudResumen);
        },
        cortarDesde: function (){
            return String(this.original).substring(this.longitudResumen, this.original.length);
        },
        debeMostrarVerMas: function () {
            return this.original.length > this.longitudResumen;
        }
    }
}