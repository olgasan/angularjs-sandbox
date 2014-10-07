describe("Utilidades de Texto", function (){
    var util = utils.verMas;

    beforeEach(function () {
        util.original = "1234567890";
        util.longitudResumen = 4;
    });

    it("cortar verMas hasta longitud dada", function () {
        expect (util.cortarHasta).toBeDefined();
        expect (util.cortarHasta()).toBe("1234");
    });

    it("cortar verMas desde posicion dada", function () {
        expect (util.cortarDesde).toBeDefined();
        expect (util.cortarDesde()).toBe("567890");
    });

    it ("sabe si debe añadir ver mas", function () {
        expect (util.debeMostrarVerMas).toBeDefined();
        util.original = "12";
        expect (util.debeMostrarVerMas()).toBe(false);
    });
});