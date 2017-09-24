import Overload from "./Overload";

describe("Helper overload", () => {
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
