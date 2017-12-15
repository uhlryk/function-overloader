export default function createDoneAcion({ result, debug }) {
    debug("call done with result", result);
    return () => result;
}
