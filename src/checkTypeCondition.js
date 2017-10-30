export default function checkTypeCondition(
    conditionArgument,
    testedArgument,
    index,
    conditionArguments,
    testedArguments
) {
    return [functionConditionArgument, objectConditionArgument, elseConditionArgument]
        .map(conditionArgumentFactory => conditionArgumentFactory(conditionArgument, testedArgument))
        .find(conditionArgumentObject => conditionArgumentObject.test())
        .execute();
}

function functionConditionArgument(conditionArgument, testedArgument) {
    return {
        execute() {
            return conditionArgument().execute(testedArgument);
        },
        test() {
            return typeof conditionArgument === "function";
        }
    };
}

function objectConditionArgument(conditionArgument, testedArgument) {
    return {
        execute() {
            return conditionArgument.execute(testedArgument);
        },
        test() {
            return typeof conditionArgument === "object";
        }
    };
}

function elseConditionArgument(conditionArgument, testedArgument) {
    return {
        execute() {
            throw TypeError("Wrong arguments", conditionArgument);
        },
        test() {
            return true;
        }
    };
}
