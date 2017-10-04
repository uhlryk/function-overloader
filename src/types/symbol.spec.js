/* eslint-disable no-new-wrappers */
import symbol from "./symbol";

describe("Symbol type", () => {
    it("returns true for symbol", () => {
        expect(symbol(Symbol("test"))).to.be.true();
    });

    it("returns false for empty", () => {
        expect(symbol()).to.be.false();
    });

    it("returns false other types", () => {
        expect(symbol(123)).to.be.false();
        expect(symbol({})).to.be.false();
        expect(symbol(true)).to.be.false();
    });
});
