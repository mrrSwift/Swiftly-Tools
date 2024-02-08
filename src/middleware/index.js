module.exports.cors = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, siteuser');
    res.setHeader('Author', "Mr Swift")
    res.setHeader('X-Powered-By', "77 114 32 83 119 105 102 116")
    res.setHeader('X-Develop-By', "77 114 32 83 119 105 102 116")

    next();
}

module.exports.hsts = (req, res, next) => {
    res.setHeader('Author', "Mr Swift")
    res.setHeader('X-Powered-By', "77 114 32 83 119 105 102 116")
    res.setHeader('X-Develop-By', "77 114 32 83 119 105 102 116")
    res.setHeader(
        "Strict-Transport-Security",
        `max-age=${new Date("2030-01-01")}; includeSubDomains; preload`  
    );

    next();
}

module.exports.sign = (req, res, next) => {
    res.setHeader('Author', "Mr Swift")
    res.setHeader('X-Powered-By', "77 114 32 83 119 105 102 116")
    res.setHeader('X-Develop-By', "77 114 32 83 119 105 102 116")

}