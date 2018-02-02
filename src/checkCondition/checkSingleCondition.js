import checkTypeCondition from "./checkTypeCondition";

export default function checkSingleCondition(conditionArgument, testedArgument) {
    return checkTypeCondition(conditionArgument, testedArgument, 1, [conditionArgument], [testedArgument]);
}
