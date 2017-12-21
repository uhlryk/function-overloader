import createElseAction from "./createElseAction";
import createWhenAction from "./createWhenAction";
import createElseThrowAction from "./createElseThrowAction";
import createDoneAction from "./createDoneAction";
export default function createSetAction({ testedArguments, result, isEnabled, debug }) {
    return () => {
        debug("call set");
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
