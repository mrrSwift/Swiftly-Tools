const { color } = require('./src/color');
const { badWords } = require('./src/badWords');
const { country, state, city, iranCities } = require('./src/countryAPI');
const { expressValidation } = require('./src/express-validator');
const { middleware } = require('./src/middleware');
const { number } = require('./src/number');
const { _sr } = require('./src/serverError');
const { string } = require('./src/string');
const { validate } = require('./src/validate');
const { array } = require('./src/array');
const { object } = require('./src/object');
const { utils } = require('./src/utils');
const { bcrypt } = require('./src/encrypt/bcrypt');
const { crypto } = require('./src/encrypt/crypto');
const { iran } = require('./src/region');
const nav = require('./src/nav');
const rs = require('./src/response');

module.exports = {
    nav,
    color,
    badWords,
    bcrypt,
    crypto,
    expressValidation,
    middleware,
    number,
    string,
    validate,
    rs,
    _sr,
    array,
    object,
    utils,
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
        city() {
            return city()
        },
        iranCities() {
            return iranCities()
        }

    },
}

