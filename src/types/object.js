export default arg =>
    typeof arg === "object" &&
    arg !== null &&
    arg instanceof String === false &&
    arg instanceof Number === false &&
    arg instanceof Boolean === false;
