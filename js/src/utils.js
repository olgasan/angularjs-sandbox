var utils = {
    verMas : {
        longitudResumen: 4,
        original: '',

        primeraParte: function (){
            return String(this.original).substring(0, this.longitudResumen);
        },
        segundaParte: function (){
            return String(this.original).substring(this.longitudResumen, this.original.length);
        },
        debeMostrarVerMas: function () {
            return this.original.length > this.longitudResumen;
        }
    }
}