import checkCondition from "../checkCondition/checkCondition";
export default function createExecuteAction(actions) {
    return (...testedArguments) => {
        let chosenCondition = actions.filter(condition => condition.conditionArguments).find(condition => checkCondition(condition.conditionArguments, testedArguments));
        if(!chosenCondition) {
            chosenCondition = actions.find(condition => !condition.conditionArguments);
        }
        if(chosenCondition) {
            return chosenCondition.callback(...testedArguments);
        }
        return null;
    };
}
