const country = require('./country.json')
const state = require('./state.json')
const {iranCities} = require('./iranCity')

module.exports.country = ()=>{
    return country
}

module.exports.state = ()=>{
    return state
}

module.exports.iranCities = ()=>{
    return iranCities
}