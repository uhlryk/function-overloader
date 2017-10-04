import undefinedType from "./undefined";

describe("Undefined type", () => {
    it("returns true for undefined", () => {
        expect(undefinedType(undefined)).to.be.true();
    });

    it("returns true for empty", () => {
        expect(undefinedType()).to.be.true();
    });

    it("returns false other types", () => {
        expect(undefinedType(123)).to.be.false();
        expect(undefinedType({})).to.be.false();
        expect(undefinedType(true)).to.be.false();
    });
});
