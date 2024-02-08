/// ///////////////////////////////////////////////////////////////////////////////////////// sting methods
module.exports.removeWhiteSpaces = str => {
    return str.replace(/ /g, '')
}

module.exports.isPersian = str => {
    return str.match(/^[\u0600-\u06FF\s]+$/)
}

module.exports.isPersianWithDigits = str => {
    return str.match(/^[\u0600-\u06FF\s\d]+$/)
}

module.exports.isLatin = str => {
    return str.match(/^[A-Za-z\s]+$/g)
}

module.exports.isLatinWithDigits = str => {
    return str.match(/^[a-zA-Z\s0-9()*_\-!#$%^&*,."'\][]*$/g)
}

module.exports.hasWhiteSpaces = str => {
    return str.includes(' ')
}