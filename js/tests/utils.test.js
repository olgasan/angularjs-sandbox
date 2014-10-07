describe("Utilidades de Texto", function (){
    var utilTexto = utils.verMasUtils;
    var original = "1234567890";

    it("cortar verMasUtils hasta longitud dada", function () {
        expect (utilTexto.cortarHasta).toBeDefined();
        expect (utilTexto.cortarHasta(original, 4)).toBe("1234");
    });

    it("cortar verMasUtils desde posicion dada", function () {
        expect (utilTexto.cortarDesde).toBeDefined();
        expect (utilTexto.cortarDesde(original, 4)).toBe("567890");
    });
});