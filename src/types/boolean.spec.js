/* eslint-disable no-new-wrappers */
import boolean from "./boolean";

describe("Boolean type", () => {
    it("returns true for booleans", () => {
        expect(boolean(true)).to.be.true();
        expect(boolean(false)).to.be.true();
    });

    it("returns true for primitive constructor", () => {
        expect(boolean(new Boolean(true))).to.be.true();
    });

    it("returns false for empty", () => {
        expect(boolean()).to.be.false();
    });

    it("returns false other types", () => {
        expect(boolean("1234")).to.be.false();
        expect(boolean({})).to.be.false();
        expect(boolean(123)).to.be.false();
    });
});
