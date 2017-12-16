import createElseAction from "./createElseAction";
import createElseThrowAction from "./createElseThrowAction";
import createDoneAction from "./createDoneAction";
export default function createDoAcion({ testedArguments, result, conditionResult, isEnabled, debug }) {
    return callback => {
        debug("do");
        if (conditionResult && isEnabled) {
            debug("execute function");
            isEnabled = false;
            result = callback(...testedArguments);
            debug("function sync result", result);
        }
        return {
            when: this.when,
            else: createElseAction({
                testedArguments,
                isEnabled,
                result,
                debug
            }),
            elseThrow: createElseThrowAction({
                testedArguments,
                isEnabled,
                result,
                debug
            }),
            done: createDoneAction({ result, debug })
        };
    };
}
