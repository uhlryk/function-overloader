/* eslint-disable no-new-wrappers */
import object from "./object";

describe("Object type", () => {
    it("returns true for objects", () => {
        expect(object({})).to.be.true();
    });

    it("returns true for primitive constructors", () => {
        expect(object(new String("test"))).to.be.false();
        expect(object(new Number(123))).to.be.false();
        expect(object(new Boolean(true))).to.be.false();
    });

    xit("returns false for arrays", () => {
        expect(object([])).to.be.false();
    });

    it("returns false for null", () => {
        expect(object(null)).to.be.false();
    });

    it("returns false other types", () => {
        expect(object(123)).to.be.false();
        expect(object("something")).to.be.false();
        expect(object(true)).to.be.false();
    });
});
