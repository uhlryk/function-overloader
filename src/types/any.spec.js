import any from "./any";

describe("Any type", () => {
    it("returns true for any type", () => {
        expect(any()).to.be.true();
        expect(any([])).to.be.true();
        expect(any("1234")).to.be.true();
        expect(any({})).to.be.true();
        expect(any(123)).to.be.true();
    });
});
