import createDoneAction from "./createDoneAction";
export default function createElseThrowAcion({ testedArguments, result, isEnabled, debug }) {
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
