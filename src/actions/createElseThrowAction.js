import createExecuteAction from "./createExecuteAction";
export default function createElseThrowAction(actions) {
    const newActions = actions.slice();
    return () => {
        newActions.push({
            callback(...testedArguments) {
                throw TypeError("Wrong parameters", testedArguments);
            }
        });
        return {
            execute: createExecuteAction(newActions)
        };
    };
}
