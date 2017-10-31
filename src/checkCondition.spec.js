import Overload from "./Overload";
import checkCondition from "./checkCondition";

describe("checkCondition", () => {
    describe("each condition argument met test arguments", () => {
        it("should be true", () => {
            expect(checkCondition([Overload.NUMBER, Overload.STRING], [10, "abc"])).to.be.true();
            expect(checkCondition([Overload.NUMBER(), Overload.STRING()], [10, "abc"])).to.be.true();
            expect(checkCondition([], [])).to.be.true();
        });
    });
    describe("some condition argument not met test arguments", () => {
        it("should be false", () => {
            expect(checkCondition([Overload.NUMBER, Overload.STRING], [true, "abc"])).to.be.false();
            expect(checkCondition([Overload.NUMBER(), Overload.STRING()], [true, "abc"])).to.be.false();
            expect(checkCondition([Overload.NUMBER], [])).to.be.false();
            expect(checkCondition([], [true])).to.be.false();
        });
    });
});
