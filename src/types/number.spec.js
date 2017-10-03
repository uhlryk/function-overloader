/* eslint-disable no-new-wrappers */
import number from "./number";

describe("Number type", () => {
    it("returns true for numbers", () => {
        expect(number(123)).to.be.true();
        expect(number(0)).to.be.true();
        expect(number(0b1)).to.be.true();
        expect(number(0o3)).to.be.true();
    });

    it("returns true for primitive constructor", () => {
        expect(number(new Number(123))).to.be.true();
    });

    it("returns false for empty", () => {
        expect(number()).to.be.false();
    });

    it("returns false other types", () => {
        expect(number("1234")).to.be.false();
        expect(number({})).to.be.false();
        expect(number(true)).to.be.false();
    });
});
