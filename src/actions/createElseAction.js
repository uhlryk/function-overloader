import createDoneAction from "./createDoneAction";
export default function createElseAcion({ testedArguments, result, isEnabled, debug }) {
    return callback => {
        debug("call else");
        if (isEnabled) {
            debug("execute function");
            isEnabled = false;
            result = callback(...testedArguments);
            debug("function sync result", result);
        }
        return {
            done: createDoneAction({ result, debug })
        };
    };
}
