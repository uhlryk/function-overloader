import checkTypeCondition from "./checkTypeCondition";

export default function checkCondition(conditionArguments, testedArguments) {
    if (conditionArguments.length === testedArguments.length) {
        return conditionArguments.every((conditionArgument, index) => {
            const testedArgument = testedArguments[index];
            return checkTypeCondition(conditionArgument, testedArgument, index, conditionArguments, testedArguments);
        });
    }
    return false;
}
