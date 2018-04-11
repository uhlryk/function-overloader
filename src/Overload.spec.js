/* eslint-disable no-new-wrappers */
import Overload from "./Overload";

describe("Overload", () => {
    it("ensure that 'when' method return only object with 'do' method", () => {
        let whenMethodResult = Overload.when();
        expect(whenMethodResult).to.have.property("do");
        expect(whenMethodResult).to.not.have.property("when");
        expect(whenMethodResult).to.not.have.property("else");
        expect(whenMethodResult).to.not.have.property("elseThrow");
        expect(whenMethodResult).to.not.have.property("execute");
    });

    it("ensure that 'do' method return object with 'when' & 'else' & 'elseThrow' & 'execute' methods", () => {
        let doMethodResult = Overload
            .when()
            .do(() => {});
        expect(doMethodResult).to.have.property("when");
        expect(doMethodResult).to.have.property("else");
        expect(doMethodResult).to.have.property("elseThrow");
        expect(doMethodResult).to.have.property("execute");
        expect(doMethodResult).to.not.have.property("do");
    });

    it("ensure that 'else' method return only object with 'execute' method", () => {
        let elseMethodResult = Overload.when().do(() => {}).else(() => {});
        expect(elseMethodResult).to.have.property("execute");
        expect(elseMethodResult).to.not.have.property("when");
        expect(elseMethodResult).to.not.have.property("else");
        expect(elseMethodResult).to.not.have.property("elseThrow");
        expect(elseMethodResult).to.not.have.property("do");
    });

    it("ensure that 'elseThrow' method return only object with 'execute' method", () => {
        let elseMethodResult = Overload.when().do(() => {}).else(() => {});
        expect(elseMethodResult).to.have.property("execute");
        expect(elseMethodResult).to.not.have.property("when");
        expect(elseMethodResult).to.not.have.property("else");
        expect(elseMethodResult).to.not.have.property("elseThrow");
        expect(elseMethodResult).to.not.have.property("do");
    });

    it("ensure that 'execute' method return response", () => {
        let executeMethodResult = Overload.when().do(()=>{}).execute();
        expect(executeMethodResult).to.be.null();
    });

    it("return sync result for typeof tests", () => {
        let result = Overload
            .when(Overload.NUMBER, Overload.STRING)
            .do(() => "wrong result")
            .when(Overload.STRING, Overload.NUMBER)
            .do(() => "correct result")
            .when(Overload.NUMBER, Overload.OBJECT)
            .do(() => "wrong result")
            .execute("someString", 12345);
        expect(result).to.be.equal("correct result");
    });

    it("resolved to correct types", () => {
        let result = Overload
            .when(Overload.STRING)
            .do(() => "correct string")
            .execute("someString");
        expect(result).to.be.equal("correct string");

        result = Overload
            .when(Overload.NUMBER)
            .do(() => "correct number")
            .execute(1234);
        expect(result).to.be.equal("correct number");

        result = Overload
            .when(Overload.BOOLEAN)
            .do(() => "correct bool")
            .execute(true);
        expect(result).to.be.equal("correct bool");

        result = Overload
            .when(Overload.FUNCTION)
            .do(() => "correct function")
            .execute(() => {});
        expect(result).to.be.equal("correct function");

        result = Overload
            .when(Overload.OBJECT)
            .do(() => "correct object")
            .execute({});
        expect(result).to.be.equal("correct object");

        result = Overload
            .when(Overload.ARRAY)
            .do(() => "correct object")
            .execute([]);
        expect(result).to.be.equal("correct object");

        result = Overload
            .when(Overload.NULL)
            .do(() => "correct object")
            .execute(null);
        expect(result).to.be.equal("correct object");

        result = Overload
            .when(Overload.SYMBOL)
            .do(() => "correct symbol")
            .execute(Symbol("test"));
        expect(result).to.be.equal("correct symbol");

        result = Overload
            .when(Overload.UNDEFINED)
            .do(() => "correct undefined")
            .execute(undefined);
        expect(result).to.be.equal("correct undefined");

        result = Overload
            .when(Overload.ANY)
            .do(() => "correct undefined")
            .execute("test");
        expect(result).to.be.equal("correct undefined");
    });

    it("return correct response when expected undefined as argument", () => {
        let result = Overload
            .when(Overload.NUMBER, Overload.STRING)
            .do(() => "wrong result")
            .when(Overload.UNDEFINED, Overload.NUMBER)
            .do(() => "correct result")
            .when(Overload.NUMBER, Overload.OBJECT)
            .do(() => "wrong result")
            .execute(undefined, 12345);
        expect(result).to.be.equal("correct result");
    });

    it("return correct response when expected no arguments", () => {
        let result = Overload
            .when(Overload.NUMBER, Overload.STRING)
            .do(() => "wrong result")
            .when()
            .do(() => "correct result")
            .when(Overload.NUMBER, Overload.OBJECT)
            .do(() => "wrong result")
            .execute();
        expect(result).to.be.equal("correct result");

        result = Overload
            .when(Overload.UNDEFINED, Overload.UNDEFINED)
            .do(() => "wrong resultAA")
            .when()
            .do(() => "correct result")
            .when(Overload.NUMBER, Overload.OBJECT)
            .do(() => "wrong result")
            .execute();
        expect(result).to.be.equal("correct result");
    });

    it("invoke else and correct response when no condition met", () => {
        let result = Overload
            .when(Overload.NUMBER, Overload.STRING)
            .do(() => "wrong result")
            .when()
            .do(() => "wrong result")
            .when(Overload.NUMBER, Overload.OBJECT)
            .do(() => "wrong result")
            .else(() => "correct result")
            .execute(10, 10);
        expect(result).to.be.equal("correct result");
    });

    it("invoke elseThrow when no condition met", () => {
        expect(() => {
            Overload
                .when(Overload.NUMBER, Overload.STRING)
                .do(() => "wrong result")
                .when()
                .do(() => "wrong result")
                .when(Overload.NUMBER, Overload.OBJECT)
                .do(() => "wrong result")
                .elseThrow()
                .execute(10, 10);
        }).to.throw(TypeError);
    });

    it("return sync result for classes", () => {
        class Test1 {}
        class Test2 {}

        const test1 = new Test1();
        let result = Overload
            .when(Overload.NUMBER, Overload.INSTANCE(Test2))
            .do(() => "wrong result")
            .when(Overload.STRING, Overload.INSTANCE(Test1))
            .do(() => "correct result")
            .when(Overload.STRING, Overload.INSTANCE(Test2))
            .do(() => "wrong result")
            .execute("someString", test1);
        expect(result).to.be.equal("correct result");
    });

    it("return async result for typeof tests", () => {
        return Overload
            .when(Overload.NUMBER, Overload.STRING)
            .do(() => Promise.resolve("wrong result"))
            .when(Overload.STRING, Overload.NUMBER)
            .do(() => Promise.resolve("correct result"))
            .when(Overload.NUMBER, Overload.OBJECT)
            .do(() => Promise.resolve("wrong result"))
            .execute("someString", 12345)
            .then(result => {
                expect(result).to.be.equal("correct result");
            });
    });

    it("return correct response when expected interface", () => {
        let result = Overload
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
            .execute({
                propertyString: "someString",
                propertyNumber: 1234,
                propertyFunction: () => {}
            });
        expect(result).to.be.equal("correct result");
    });

    it("return correct response when expected interface with deep interface", () => {
        let result = Overload
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
                    propertyFunction: Overload.FUNCTION,
                    propertyObject: Overload.INTERFACE({
                        name: Overload.STRING
                    })
                })
            )
            .do(() => "correct result")
            .execute({
                propertyString: "someString",
                propertyNumber: 1234,
                propertyFunction: () => {},
                propertyObject: {
                    name: "someName"
                }
            });
        expect(result).to.be.equal("correct result");
    });
});
