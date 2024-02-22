


module.exports.string = {
    capString(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    reverseString(str) {
        return str.split("").reverse().join("");
    },
    hasWhiteSpaces(str) {
        return str.includes(' ')
    },
    isLatinWithDigits(str) {
        return str.match(/^[a-zA-Z\s0-9()*_\-!#$%^&*,."'\][]*$/g)
    },
    isLatin(str) {
        return str.match(/^[A-Za-z\s]+$/g)
    },
    isPersianWithDigits(str) {
        return str.match(/^[\u0600-\u06FF\s\d]+$/)
    },
    isPersian(str) {
        return str.match(/^[\u0600-\u06FF\s]+$/)
    },
    removeWhiteSpaces(str) {
        return str.replace(/ /g, '')
    },
    assertString(input) {
        const isString = typeof input === 'string' || input instanceof String;

        if (!isString) {
            let invalidType = typeof input;
            if (input === null) invalidType = 'null';
            else if (invalidType === 'object') invalidType = input.constructor.name;

            throw new TypeError(`Expected a string but received a ${invalidType}`);
        }
    },
}