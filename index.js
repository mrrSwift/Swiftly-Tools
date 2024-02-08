const {colors} = require('./src/color/index');
const {badWords} = require('./src/badWords/index');
const {bcrypt} = require('./src/encrypt/bcrypt');
const {crypto} = require('./src/encrypt/crypto');
const { country, state, city, iranCities } = require('./src/countryAPI/index');
const {checkValidationsKeys, checkValidationsMap} = require('./src/express-validator/validator');
const {cors, hsts, sign} = require('./src/middleware/index');
const {generateRandomDigits, generateRandomDigitsInRangeOf} = require('./src/number/number');
const {checkMobileNumber, checkNationalCode, nameOptimizer, normalizeMobileNumber} = require('./src/region/iran');
const rs = require('./src/response/responseServer');
const {_sr} = require('./src/serverError/se');
const {hasWhiteSpaces, isLatin, isLatinWithDigits, isPersian, isPersianWithDigits, removeWhiteSpace} = require('./src/string/string');
const {validate} = require('./src/validate/validate');
const {arrayIsEmpty} = require('./src/array/index');
const {objectIsEmpty} = require('./src/object/index');


module.exports ={
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
    crypto:{
        encrypt(secret, string){
            return crypto.encrypt(secret, string)
        },
        decrypt(secret, string){
            return crypto.decrypt(secret, string)
        }
    },
    countries:{
        country(){
            return country()
        },
        state(){
            return state()
        },
        city(){
            return city()
        },
        iranCities(){
            return iranCities()
        }

    },
    expressValidation:{
        keys(validations){
            return checkValidationsKeys(validations)
        },
        maps(validations){
            return checkValidationsMap(validations)
        }
    },
    middleware:{
        cors(req, res, next){
            return cors(req, res, next)
        },
        hsts(req, res, next){
            return hsts(req, res, next)
        },
        sign(req, res, next){
            return sign(req, res, next)
        }
    },
    number:{
        randomDigits(length){
            return generateRandomDigits(length)

        },
        randomDigitsInRange(max){
            return generateRandomDigitsInRangeOf(max)

        }
    },
    string:{
        hasWhiteSpaces, isLatin, isLatinWithDigits, isPersian, isPersianWithDigits, removeWhiteSpace
    },
    validate,
    region:{
        iran:{
            checkMobileNumber, checkNationalCode, nameOptimizer, normalizeMobileNumber
        }
    },
    rs,
    _sr,
    array:{
        arrayIsEmpty
    },
    object:{
        objectIsEmpty
    }

}

