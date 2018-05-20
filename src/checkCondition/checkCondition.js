export default function checkCondition(conditionArguments, testedArguments) {
    if (conditionArguments.length === testedArguments.length) {
        return conditionArguments.every((conditionArgument, index) => {
            const testedArgument = testedArguments[index];
            return conditionArgument.test(testedArgument);
        });
    }
    return false;
}
