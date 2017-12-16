export default function createDoneAcion({ result, debug }) {
    return () => {
        debug("call done with result", result);
        return result;
    };
}
