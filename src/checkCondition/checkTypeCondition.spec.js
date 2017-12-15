import Overload from "../Overload";
import checkTypeCondition from "./checkTypeCondition";

describe("checkTypeCondition", () => {
    describe("condition argument met test argument", () => {
        it("should be true", () => {
            expect(checkTypeCondition(Overload.NUMBER, 10)).to.be.true();
            expect(checkTypeCondition(Overload.NUMBER(), 10)).to.be.true();
        });
    });
    describe("condition argument not met test argument", () => {
        it("should be false", () => {
            expect(checkTypeCondition(Overload.NUMBER, true)).to.be.false();
            expect(checkTypeCondition(Overload.NUMBER(), true)).to.be.false();
        });
    });
});
