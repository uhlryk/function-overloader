import checkSingleCondition from "../checkCondition/checkSingleCondition";
export default (arg, targetInterface = {}) =>
    typeof arg === "object" &&
    Object.keys(targetInterface).every(key => checkSingleCondition(targetInterface[key], arg[key]));
