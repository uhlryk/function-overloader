import createElseAction from "./createElseAction";
import createWhenAction from "./createWhenAction";
import createElseThrowAction from "./createElseThrowAction";
import createDoneAction from "./createDoneAction";
export default function createDoAcion({ testedArguments, result, conditionResult, isEnabled, debug }) {
    return callback => {
        debug("call do");
        if (conditionResult && isEnabled) {
            debug("execute function");
            isEnabled = false;
            result = callback(...testedArguments);
            debug("function sync result", result);
        }
        const options = {
            testedArguments,
            isEnabled,
            result,
            debug
        };
        return {
            when: createWhenAction(options),
            else: createElseAction(options),
            elseThrow: createElseThrowAction(options),
            done: createDoneAction(options)
        };
    };
}
