export default function checkTypeCondition(
    conditionArgument,
    testedArgument,
    index,
    conditionArguments,
    testedArguments
) {
    return [functionConditionArgument, objectConditionArgument, elseConditionArgument]
        .map(conditionArgumentFactory =>
            conditionArgumentFactory(conditionArgument, testedArgument, index, conditionArguments, testedArguments)
        )
        .find(conditionArgumentObject => conditionArgumentObject.test())
        .execute();
}

function functionConditionArgument(conditionArgument, testedArgument, index, conditionArguments, testedArguments) {
    return {
        execute() {
            return conditionArgument().execute(testedArgument, index, conditionArguments, testedArguments);
        },
        test() {
            return typeof conditionArgument === "function";
        }
    };
}

function objectConditionArgument(conditionArgument, testedArgument, index, conditionArguments, testedArguments) {
    return {
        execute() {
            return conditionArgument.execute(testedArgument, index, conditionArguments, testedArguments);
        },
        test() {
            return typeof conditionArgument === "object";
        }
    };
}

function elseConditionArgument(conditionArgument) {
    return {
        execute() {
            throw TypeError("Wrong arguments", conditionArgument);
        },
        test() {
            return true;
        }
    };
}
