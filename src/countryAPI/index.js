const country = require('./country.json')
const state = require('./state.json')
const city = require('./city.json')
const {iranCities} = require('./iranCity')

module.exports.country = ()=>{
    return country
}

module.exports.state = ()=>{
    return state
}

module.exports.city = ()=>{
    return city
}

module.exports.iranCities = ()=>{
    return iranCities
}