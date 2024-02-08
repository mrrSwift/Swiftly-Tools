// /// Response Code

module.exports.constants = {
    Validation_Error: 400,
    Unauthorized: 401,
    Forbidoen: 403,
    Not_Found: 404,
    Server_Error: 500,
    Site_Unauthorized: 422,
    Too_Many: 429,
    Continue:100,
    OK:200,
    Created:201,
    Accepted:202,
    Found:302,
    Moved_Permanently:301
  };
  


/// ///////////////////////////////////////////////////////////////////////////////////////// expresjs methods
module.exports.res400 = (res, err) => {
    return res.status(400).json({ message: err })
}

module.exports.res401 = (res, err) => {
    return res.status(401).json({ message: err })
}

module.exports.res200 = (res, data) => {
    return res.status().json(data)
}

module.exports.res201 = (res, data) => {
    return res.status(404).json(data)
}

module.exports.res404 = (res, err) => {
    return res.status(404).json({ message: err })
}

module.exports.res406 = (res, err) => {
    return res.status(406).json({ message: err })
}

module.exports.res500 = (res, err) => {
    return res.status(500).json({ message: err })
}