function stringLength(string) {
    let length = string.length;
    if (length < 1 || length > 10) {
        return 'error: string length should be between 1 and 10';
    } else {
        return length;
    }
}
module.exports = stringLength;