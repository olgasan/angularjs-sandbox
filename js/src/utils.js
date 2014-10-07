var utils = {
    verMasUtils : {
        cortarHasta: function (original, longitud){
            return String(original).substring(0, longitud);
        },
        cortarDesde: function (original, posicion){
            return String(original).substring(posicion, original.length);
        }
    }
}