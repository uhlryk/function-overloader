/* eslint-disable no-new-wrappers */
import string from "./string";

describe("String type", () => {
    it("returns true for strings", () => {
        expect(string("something")).to.be.true();
        expect(string("")).to.be.true();
    });

    it("returns true for primitive constructor", () => {
        expect(string(new String("test"))).to.be.true();
    });

    it("returns false for empty", () => {
        expect(string()).to.be.false();
    });

    it("returns false other types", () => {
        expect(string(123)).to.be.false();
        expect(string({})).to.be.false();
        expect(string(true)).to.be.false();
    });
});
