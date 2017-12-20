import createElseAction from "./createElseAction";
import createWhenAction from "./createWhenAction";
import createElseThrowAction from "./createElseThrowAction";
import createDoneAction from "./createDoneAction";
export default function createSetAction({ testedArguments, result, isEnabled, debug }) {
    return () => {
        debug("call set");
        return {
            when: createWhenAction({
                testedArguments,
                isEnabled,
                result,
                debug
            }),
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
