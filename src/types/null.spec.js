/* eslint-disable no-new-wrappers */
import nullType from "./null";

describe("Null type", () => {
    it("returns true for null", () => {
        expect(nullType(null)).to.be.true();
    });

    it("returns false for empty", () => {
        expect(nullType()).to.be.false();
    });

    it("returns false other types", () => {
        expect(nullType("1234")).to.be.false();
        expect(nullType({})).to.be.false();
        expect(nullType(true)).to.be.false();
    });
});
