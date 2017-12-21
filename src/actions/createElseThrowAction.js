import createDoneAction from "./createDoneAction";
export default function createElseThrowAction({ testedArguments, result, isEnabled, debug }) {
    return () => {
        debug("call elseThrow");
        if (isEnabled) {
            isEnabled = false;
            throw TypeError("Wrong parameters", testedArguments);
        }
        return {
            done: createDoneAction({ result, debug })
        };
    };
}
