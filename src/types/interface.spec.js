/* eslint-disable no-new-wrappers */
import interfaceType from "./interface";
import Overload from "../Overload";

describe("Interface type", () => {
    it("returns true for empty object compared to undefined", () => {
        expect(interfaceType({})).to.be.true();
    });

    it("returns true for empty object compared to empty interface", () => {
        expect(interfaceType({}, {})).to.be.true();
    });

    it("returns true for object with number property compared to interface with number property", () => {
        expect(interfaceType({ someProp: 123 }, { someProp: Overload.NUMBER })).to.be.true();
        expect(interfaceType({ someProp: 123 }, { someProp: Overload.NUMBER() })).to.be.true();
    });

    it("returns false for object with number property compared to interface with number property with different name", () => {
        expect(interfaceType({ someProp: 123 }, { otherProp: Overload.NUMBER })).to.be.false();
    });

    it("returns false for empty object compared to interface with number property", () => {
        expect(interfaceType({}, { someProp: Overload.NUMBER })).to.be.false();
    });

    it("returns false for object with some properties compared to empty interface", () => {
        expect(interfaceType({ someProp: 123 }, {})).to.be.true();
    });
});
