describe("Utilidades para 'Ver mas'", function (){
    var util = utils.verMas;

    beforeEach(function () {
        util.texto = "1234567890";
        util.longitudResumen = 4;
    });

    it("cortar primera parte del texto", function () {
        expect (util.primeraParte).toBeDefined();
        expect (util.primeraParte()).toBe("1234");
    });

    it ("agrega ver mas cuando es texto largo", function () {
        expect (util.debeMostrarVerMas).toBeDefined();
        util.texto = "99";
        expect (util.debeMostrarVerMas()).toBe(false);
    });
});