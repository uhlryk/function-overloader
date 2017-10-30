export default function createType(typeCondition) {
    return typeInput => ({
        execute(testedArgument) {
            return typeCondition(testedArgument, typeInput);
        }
    });
}
