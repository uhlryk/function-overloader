export default function createType(typeCondition) {
    return typeInput => ({
        execute(testedArgument, index, conditionArguments, testedArguments) {
            return typeCondition(testedArgument, typeInput, index, conditionArguments, testedArguments);
        }
    });
}
