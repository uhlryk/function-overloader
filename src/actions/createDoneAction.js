export default function createDoneAction({ result, debug }) {
    return () => {
        debug("call done with result", result);
        return result;
    };
}
