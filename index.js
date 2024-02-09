const {color} = require('./src/color');
const {badWords} = require('./src/badWords');
const { country, state, city, iranCities } = require('./src/countryAPI');
const {expressValidation} = require('./src/express-validator');
const {middleware} = require('./src/middleware');
const {number} = require('./src/number');
const rs = require('./src/response');
const {_sr} = require('./src/serverError');
const {string} = require('./src/string');
const {validate} = require('./src/validate');
const {array} = require('./src/array');
const {object} = require('./src/object');
const {utils} = require('./src/utils');
const {bcrypt} = require('./src/encrypt/bcrypt');
const {crypto} = require('./src/encrypt/crypto');  
const {iran} = require('./src/region');
module.exports ={
    color,
    badWords,
    bcrypt,
    crypto,
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
    expressValidation,
    middleware,
    number,
    string,
    validate,
    region:{
        iran
    },
    rs,
    _sr,
    array,
    object,
    utils,

}

