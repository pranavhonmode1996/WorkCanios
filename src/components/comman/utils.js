export const isEmail = (value) => {
    const expression = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if(value.match(expression)) {
        return true;
    }
    return false;
}