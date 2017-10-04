/* eslint-disable no-new-wrappers */
import functionType from "./function";

describe("Function type", () => {
    it("returns true for function", () => {
        expect(functionType(() => {})).to.be.true();
    });

    it("returns false for empty", () => {
        expect(functionType()).to.be.false();
    });

    it("returns false other types", () => {
        expect(functionType("1234")).to.be.false();
        expect(functionType({})).to.be.false();
        expect(functionType(true)).to.be.false();
    });
});
