import createTypeFactory from "./createTypeFactory";

describe("createTypeFactory", () => {
    let sandbox;
    let conditionTypeStub;
    let conditionTypeResponseStub;
    let inputStub;
    let testedArgumentStub;
    let indexStub;
    let conditionArgumentsStub;
    let testedArgumentsStub;
    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        conditionTypeResponseStub = sandbox.stub();
        conditionTypeStub = sandbox.stub().returns(conditionTypeResponseStub);
        inputStub = sandbox.stub();
        testedArgumentStub = sandbox.stub();
        indexStub = sandbox.stub();
        conditionArgumentsStub = sandbox.stub();
        testedArgumentsStub = sandbox.stub();
    });

    afterEach(async () => {
        sandbox.restore();
    });

    it("should be conditionTypeResponseStub", () => {
        const createType = createTypeFactory(conditionTypeStub);
        expect(typeof createType).to.be.equal("function");
        const createTypeCondition = createType(inputStub);
        expect(createTypeCondition).to.have.property("execute");
        expect(
            createTypeCondition.execute(testedArgumentStub, indexStub, conditionArgumentsStub, testedArgumentsStub)
        ).to.be.equal(conditionTypeResponseStub);
        expect(
            conditionTypeStub.withArgs(
                testedArgumentStub,
                inputStub,
                indexStub,
                conditionArgumentsStub,
                testedArgumentsStub
            ).calledOnce
        ).to.be.true();
    });
});
