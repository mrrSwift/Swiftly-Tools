/// ///////////////////////////////////////////////////////////////////////////////////////// number methods


module.exports.number={
    generateRandomDigitsInRangeOf (max) {
        return Math.floor(Math.random() * max) + 1
    },
    generateRandomDigits (DIGITS_LENGTH)  {
      
            const add = 1
            let max = 12 - add // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.
            if (DIGITS_LENGTH > max) {
                return generateRandomDigits(max) + generateRandomDigits(DIGITS_LENGTH - max)
            }
            max = Math.pow(10, DIGITS_LENGTH + add)
            const min = max / 10 // Math.pow(10, n) basically
            const number = Math.floor(Math.random() * (max - min + 1)) + min
    
            return ('' + number).substring(add)
        
    }
}