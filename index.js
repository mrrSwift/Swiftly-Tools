const { color } = require('./src/color');
const { badWords } = require('./src/badWords');
const { country, state, iranCities } = require('./src/countryAPI');
const { expressValidation } = require('./src/express-validator');
const { middleware } = require('./src/middleware');
const { number } = require('./src/number');
const { sr } = require('./src/serverError');
const { string } = require('./src/string');
const { validate } = require('./src/validate');
const { array } = require('./src/array');
const { object } = require('./src/object');
const { utils } = require('./src/utils');
const { bcrypt } = require('./src/encrypt/bcrypt');
const { crypto } = require('./src/encrypt/crypto');
const { iran } = require('./src/region');
const gsap = require('./src/gsap');
const nav = require('./src/nav');
const rs = require('./src/response');

/**
 * @author Mr Swift
 * @name Swiftly
 * @returns Objects of tools
 * @license MIT
 * @items nav | color | badwords | crypto 
 *  expressValidation | middleware | number 
 *  string | validate | rs | sr | array 
 *  object | utils | region | countries | gsap
 */
module.exports = {
    color,
    badWords,
    bcrypt,
    crypto,
    expressValidation,
    middleware,
    number,
    string,
    validate,
    array,
    object,
    utils,
    nav,
    gsap,
    region: {
        iran
    },
    countries: {
        country() {
            return country()
        },
        state() {
            return state()
        },
        iranCities() {
            return iranCities()
        }
    },
     /**
     * @description express response with status
     */
     rs,
     /**
      * @description server response | Objects of msg in different languages
      */
     sr,
}

