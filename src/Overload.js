import createWhenAction from "./actions/createWhenAction";

import types from "check-complex-types";

export default {
    ...types,
    when: (...conditionArguments) => {
        let actions = [];
        let whenAction = createWhenAction(actions);
        return whenAction(...conditionArguments);
    }
};
