/* eslint-disable no-new-wrappers */
import Overload from "./Overload";

describe("Overload", () => {
    it("ensure that 'when' method return only object with 'do' method", () => {
        let whenMethodResult = Overload.set().when();
        expect(whenMethodResult).to.have.property("do");
        expect(whenMethodResult).to.not.have.property("when");
        expect(whenMethodResult).to.not.have.property("else");
        expect(whenMethodResult).to.not.have.property("elseThrow");
        expect(whenMethodResult).to.not.have.property("done");
    });

    it("ensure that 'do' method return object with 'when' & 'else' & 'elseThrow' & 'done' methods", () => {
        let doMethodResult = Overload.set()
            .when()
            .do(() => {});
        expect(doMethodResult).to.have.property("when");
        expect(doMethodResult).to.have.property("else");
        expect(doMethodResult).to.have.property("elseThrow");
        expect(doMethodResult).to.have.property("done");
        expect(doMethodResult).to.not.have.property("do");
    });

    it("ensure that 'else' method return only object with 'done' method", () => {
        let elseMethodResult = Overload.set().else(() => {});
        expect(elseMethodResult).to.have.property("done");
        expect(elseMethodResult).to.not.have.property("when");
        expect(elseMethodResult).to.not.have.property("else");
        expect(elseMethodResult).to.not.have.property("elseThrow");
        expect(elseMethodResult).to.not.have.property("do");
    });

    it("ensure that 'elseThrow' method return only object with 'done' method", () => {
        let elseMethodResult = Overload.set().else(() => {});
        expect(elseMethodResult).to.have.property("done");
        expect(elseMethodResult).to.not.have.property("when");
        expect(elseMethodResult).to.not.have.property("else");
        expect(elseMethodResult).to.not.have.property("elseThrow");
        expect(elseMethodResult).to.not.have.property("do");
    });

    it("ensure that 'done' method return response", () => {
        let doneMethodResult = Overload.set().done();
        expect(doneMethodResult).to.be.null();
    });

    it("return sync result for typeof tests", () => {
        let result = Overload.set("someString", 12345)
            .when(Overload.NUMBER, Overload.STRING)
            .do(() => "wrong result")
            .when(Overload.STRING, Overload.NUMBER)
            .do(() => "correct result")
            .when(Overload.NUMBER, Overload.OBJECT)
            .do(() => "wrong result")
            .done();
        expect(result).to.be.equal("correct result");
    });

    it("resolved to correct types", () => {
        let result = Overload.set("someString")
            .when(Overload.STRING)
            .do(() => "correct string")
            .done();
        expect(result).to.be.equal("correct string");

        result = Overload.set(1234)
            .when(Overload.NUMBER)
            .do(() => "correct number")
            .done();
        expect(result).to.be.equal("correct number");

        result = Overload.set(true)
            .when(Overload.BOOLEAN)
            .do(() => "correct bool")
            .done();
        expect(result).to.be.equal("correct bool");

        result = Overload.set(() => {})
            .when(Overload.FUNCTION)
            .do(() => "correct function")
            .done();
        expect(result).to.be.equal("correct function");

        result = Overload.set({})
            .when(Overload.OBJECT)
            .do(() => "correct object")
            .done();
        expect(result).to.be.equal("correct object");

        result = Overload.set([])
            .when(Overload.ARRAY)
            .do(() => "correct object")
            .done();
        expect(result).to.be.equal("correct object");

        result = Overload.set(null)
            .when(Overload.NULL)
            .do(() => "correct object")
            .done();
        expect(result).to.be.equal("correct object");

        result = Overload.set(Symbol("test"))
            .when(Overload.SYMBOL)
            .do(() => "correct symbol")
            .done();
        expect(result).to.be.equal("correct symbol");

        result = Overload.set(undefined)
            .when(Overload.UNDEFINED)
            .do(() => "correct undefined")
            .done();
        expect(result).to.be.equal("correct undefined");

        result = Overload.set("test")
            .when(Overload.ANY)
            .do(() => "correct undefined")
            .done();
        expect(result).to.be.equal("correct undefined");
    });

    it("return correct response when expected undefined as argument", () => {
        let result = Overload.set(undefined, 12345)
            .when(Overload.NUMBER, Overload.STRING)
            .do(() => "wrong result")
            .when(Overload.UNDEFINED, Overload.NUMBER)
            .do(() => "correct result")
            .when(Overload.NUMBER, Overload.OBJECT)
            .do(() => "wrong result")
            .done();
        expect(result).to.be.equal("correct result");
    });

    it("return correct response when expected no arguments", () => {
        let result = Overload.set()
            .when(Overload.NUMBER, Overload.STRING)
            .do(() => "wrong result")
            .when()
            .do(() => "correct result")
            .when(Overload.NUMBER, Overload.OBJECT)
            .do(() => "wrong result")
            .done();
        expect(result).to.be.equal("correct result");

        result = Overload.set()
            .when(Overload.UNDEFINED, Overload.UNDEFINED)
            .do(() => "wrong resultAA")
            .when()
            .do(() => "correct result")
            .when(Overload.NUMBER, Overload.OBJECT)
            .do(() => "wrong result")
            .done();
        expect(result).to.be.equal("correct result");
    });

    it("invoke else and correct response when no condition met", () => {
        let result = Overload.set(10, 10)
            .when(Overload.NUMBER, Overload.STRING)
            .do(() => "wrong result")
            .when()
            .do(() => "wrong result")
            .when(Overload.NUMBER, Overload.OBJECT)
            .do(() => "wrong result")
            .else(() => "correct result")
            .done();
        expect(result).to.be.equal("correct result");
    });

    it("invoke elseThrow when no condition met", () => {
        expect(() => {
            Overload.set(10, 10)
                .when(Overload.NUMBER, Overload.STRING)
                .do(() => "wrong result")
                .when()
                .do(() => "wrong result")
                .when(Overload.NUMBER, Overload.OBJECT)
                .do(() => "wrong result")
                .elseThrow()
                .done();
        }).to.throw(TypeError);
    });

    it("return sync result for classes", () => {
        class Test1 {}
        class Test2 {}

        const test1 = new Test1();
        let result = Overload.set("someString", test1)
            .when(Overload.NUMBER, Overload.INSTANCE(Test2))
            .do(() => "wrong result")
            .when(Overload.STRING, Overload.INSTANCE(Test1))
            .do(() => "correct result")
            .when(Overload.STRING, Overload.INSTANCE(Test2))
            .do(() => "wrong result")
            .done();
        expect(result).to.be.equal("correct result");
    });

    it("return async result for typeof tests", () => {
        return Overload.set("someString", 12345)
            .when(Overload.NUMBER, Overload.STRING)
            .do(() => Promise.resolve("wrong result"))
            .when(Overload.STRING, Overload.NUMBER)
            .do(() => Promise.resolve("correct result"))
            .when(Overload.NUMBER, Overload.OBJECT)
            .do(() => Promise.resolve("wrong result"))
            .done()
            .then(result => {
                expect(result).to.be.equal("correct result");
            });
    });

    it("return correct response when expected interface", () => {
        let result = Overload.set({
            propertyString: "someString",
            propertyNumber: 1234,
            propertyFunction: () => {}
        })
            .when(
                Overload.INTERFACE({
                    propertyString: Overload.NUMBER,
                    propertyNumber: Overload.NUMBER,
                    propertyFunction: Overload.FUNCTION
                })
            )
            .do(() => "wrong result")
            .when(
                Overload.INTERFACE({
                    propertyString: Overload.STRING,
                    propertyNumber: Overload.NUMBER,
                    propertyFunction: Overload.FUNCTION
                })
            )
            .do(() => "correct result")
            .done();
        expect(result).to.be.equal("correct result");
    });
});
