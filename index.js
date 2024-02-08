const {colors} = require('./src/color/index');
const {badWords} = require('./src/badWords/index');
const {bcrypt} = require('./src/bcrypt/bcrypt');
const { country, state, city, iranCities } = require('./src/countryAPI/index');
const {checkValidationsKeys, checkValidationsMap} = require('./src/express-validator/validator');
const {cros, hsts, sign} = require('./src/middleware/index');
const {generateRandomDigits, generateRandomDigitsInRangeOf} = require('./src/number/number');
const {checkMobileNumber, checkNationalCode, nameOptimizer, normalizeMobileNumber} = require('./src/region/iran');
const rs = require('./src/response/responseServer');
const {_sr} = require('./src/serverError/se');
const {hasWhiteSpaces, isLatin, isLatinWithDigits, isPersian, isPersianWithDigits, removeWhiteSpace} = require('./src/string/string');
const {Validate} = require('./src/validate/validate');


module.exports.swiftly ={
    color(){
        return colors()
    },
    badWords(){
       return badWords()
    },
    bcrypt:{
       compare(input, current){
       return bcrypt.compare(input, current)
       },
       hash(password, salt){
       return bcrypt.hash(password, salt)
       }
    },

}

