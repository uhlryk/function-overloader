import Overload, * as TYPES from "./Overload";

describe("Helper overload", () => {
    it("ensure that 'when' method return only object with 'do' method", () => {
        let whenMethodResult = Overload.set().when();
        expect(whenMethodResult).to.have.property("do");
        expect(whenMethodResult).to.not.have.property("when");
        expect(whenMethodResult).to.not.have.property("else");
        expect(whenMethodResult).to.not.have.property("done");
    });

    it("ensure that 'do' method return object with 'when' & 'else' & 'done' methods", () => {
        let doMethodResult = Overload.set()
            .when()
            .do(() => {});
        expect(doMethodResult).to.have.property("when");
        expect(doMethodResult).to.have.property("else");
        expect(doMethodResult).to.have.property("done");
        expect(doMethodResult).to.not.have.property("do");
    });

    it("ensure that 'else' method return only object with 'done' method", () => {
        let elseMethodResult = Overload.set().else(() => {});
        expect(elseMethodResult).to.have.property("done");
        expect(elseMethodResult).to.not.have.property("when");
        expect(elseMethodResult).to.not.have.property("else");
        expect(elseMethodResult).to.not.have.property("do");
    });

    it("ensure that 'done' method return response", () => {
        let doneMethodResult = Overload.set().done();
        expect(doneMethodResult).to.be.null();
    });

    it("return sync result for typeof tests", () => {
        let result = Overload.set("someString", 12345)
            .when("number", "string")
            .do(() => "wrong result")
            .when("string", "number")
            .do(() => "correct result")
            .when("number", "object")
            .do(() => "wrong result")
            .done();
        expect(result).to.be.equal("correct result");
    });

    it("resolved to correct types", () => {
        let result = Overload.set("someString")
            .when(TYPES.STRING)
            .do(() => "correct string")
            .done();
        expect(result).to.be.equal("correct string");

        result = Overload.set(1234)
            .when(TYPES.NUMBER)
            .do(() => "correct number")
            .done();
        expect(result).to.be.equal("correct number");

        result = Overload.set(true)
            .when(TYPES.BOOLEAN)
            .do(() => "correct bool")
            .done();
        expect(result).to.be.equal("correct bool");

        result = Overload.set(() => {})
            .when(TYPES.FUNCTION)
            .do(() => "correct function")
            .done();
        expect(result).to.be.equal("correct function");

        result = Overload.set({})
            .when(TYPES.OBJECT)
            .do(() => "correct object")
            .done();
        expect(result).to.be.equal("correct object");

        result = Overload.set(Symbol("test"))
            .when(TYPES.SYMBOL)
            .do(() => "correct symbol")
            .done();
        expect(result).to.be.equal("correct symbol");

        result = Overload.set(undefined)
            .when(TYPES.UNDEFINED)
            .do(() => "correct undefined")
            .done();
        expect(result).to.be.equal("correct undefined");
    });

    it("return correct response when expected undefined as argument", () => {
        let result = Overload.set(undefined, 12345)
            .when("number", "string")
            .do(() => "wrong result")
            .when("undefined", "number")
            .do(() => "correct result")
            .when("number", "object")
            .do(() => "wrong result")
            .done();
        expect(result).to.be.equal("correct result");
    });

    it("return correct response when expected no arguments", () => {
        let result = Overload.set()
            .when("number", "string")
            .do(() => "wrong result")
            .when()
            .do(() => "correct result")
            .when("number", "object")
            .do(() => "wrong result")
            .done();
        expect(result).to.be.equal("correct result");

        result = Overload.set()
            .when("undefined", "undefined")
            .do(() => "wrong resultAA")
            .when()
            .do(() => "correct result")
            .when("number", "object")
            .do(() => "wrong result")
            .done();
        expect(result).to.be.equal("correct result");
    });

    it("invoke else and correct response when no condition met", () => {
        let result = Overload.set(10, 10)
            .when("number", "string")
            .do(() => "wrong result")
            .when()
            .do(() => "wrong result")
            .when("number", "object")
            .do(() => "wrong result")
            .else(() => "correct result")
            .done();
        expect(result).to.be.equal("correct result");
    });

    it("return sync result for classes", () => {
        class Test1 {}
        class Test2 {}

        const test1 = new Test1();
        let result = Overload.set("someString", test1)
            .when("number", Test2)
            .do(() => "wrong result")
            .when("string", Test1)
            .do(() => "correct result")
            .when("string", Test2)
            .do(() => "wrong result")
            .done();
        expect(result).to.be.equal("correct result");
    });

    it("return async result for typeof tests", () => {
        return Overload.set("someString", 12345)
            .when("number", "string")
            .do(() => Promise.resolve("wrong result"))
            .when("string", "number")
            .do(() => Promise.resolve("correct result"))
            .when("number", "object")
            .do(() => Promise.resolve("wrong result"))
            .done()
            .then(result => {
                expect(result).to.be.equal("correct result");
            });
    });
});
