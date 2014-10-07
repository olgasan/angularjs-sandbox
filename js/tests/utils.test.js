describe("Utilidades para VerMas", function (){
    var util = utils.verMas;

    beforeEach(function () {
        util.original = "1234567890";
        util.longitudResumen = 4;
    });

    it("cortar primera parte", function () {
        expect (util.primeraParte).toBeDefined();
        expect (util.primeraParte()).toBe("1234");
    });

    it("cortar segunda parte", function () {
        expect (util.segundaParte).toBeDefined();
        expect (util.segundaParte()).toBe("567890");
    });

    it ("sabe si debe añadir ver mas", function () {
        expect (util.debeMostrarVerMas).toBeDefined();
        util.original = "12";
        expect (util.debeMostrarVerMas()).toBe(false);
    });
});