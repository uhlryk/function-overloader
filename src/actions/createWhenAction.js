import checkCondition from "../checkCondition/checkCondition";
import createDoAction from "./createDoAction";
export default function createWhenAction({ testedArguments, result, isEnabled, debug }) {
    return (...conditionArguments) => {
        debug("call when", conditionArguments);
        let conditionResult = checkCondition(conditionArguments, testedArguments);
        debug("conditionResult", conditionResult);
        return {
            do: createDoAction({
                conditionResult,
                testedArguments,
                isEnabled,
                result,
                debug
            })
        };
    };
}
