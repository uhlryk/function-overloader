import createElseAction from "./createElseAction";
import createElseThrowAction from "./createElseThrowAction";
import createExecuteAction from "./createExecuteAction";
export default function createWhenAction(actions) {
    const newActions = actions.slice();
    return (...conditionArguments) => {
        return {
            do(callback) {
                newActions.push({
                    conditionArguments,
                    callback
                });
                return {
                    when: createWhenAction(newActions),
                    else: createElseAction(newActions),
                    elseThrow: createElseThrowAction(newActions),
                    execute: createExecuteAction(newActions)
                };
            }
        };
    };
}
