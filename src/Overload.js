import createDebug from "debug";

import createSetAction from "./actions/createSetAction";

import createTypeFactory from "./createTypeFactory";
import numberCondition from "./types/number";
import stringCondition from "./types/string";
import objectCondition from "./types/object";
import arrayCondition from "./types/array";
import booleanCondition from "./types/boolean";
import functionCondition from "./types/function";
import symbolCondition from "./types/symbol";
import undefinedCondition from "./types/undefined";
import instanceCondition from "./types/instance";
import interfaceCondition from "./types/interface";
import nullCondition from "./types/null";
import anyCondition from "./types/any";

export default class Overload {
    static NUMBER = createTypeFactory(numberCondition);
    static STRING = createTypeFactory(stringCondition);
    static OBJECT = createTypeFactory(objectCondition);
    static ARRAY = createTypeFactory(arrayCondition);
    static BOOLEAN = createTypeFactory(booleanCondition);
    static FUNCTION = createTypeFactory(functionCondition);
    static SYMBOL = createTypeFactory(symbolCondition);
    static UNDEFINED = createTypeFactory(undefinedCondition);
    static NULL = createTypeFactory(nullCondition);
    static ANY = createTypeFactory(anyCondition);
    static INSTANCE = createTypeFactory(instanceCondition);
    static INTERFACE = createTypeFactory(interfaceCondition);

    static set(...testedArguments) {
        let isEnabled = true;
        let result = null;
        let debug = createDebug("Overloader");
        let setAction = createSetAction({
            testedArguments,
            isEnabled,
            result,
            debug
        });
        return setAction();
    }
}
