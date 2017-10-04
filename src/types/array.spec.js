import array from "./array";

describe("Array type", () => {
    it("returns true for arrays", () => {
        expect(array([])).to.be.true();
    });

    it("returns false for empty", () => {
        expect(array()).to.be.false();
    });

    it("returns false for arguments", () => {
        expect(array(arguments)).to.be.false();
    });

    it("returns false other types", () => {
        expect(array("1234")).to.be.false();
        expect(array({})).to.be.false();
        expect(array(123)).to.be.false();
    });
});
