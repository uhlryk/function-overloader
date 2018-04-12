import createExecuteAction from "./createExecuteAction";
export default function createElseAction(actions) {
    const newActions = actions.slice();
    return callback => {
        newActions.push({
            callback
        });
        return {
            execute: createExecuteAction(newActions)
        };
    };
}
