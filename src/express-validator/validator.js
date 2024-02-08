

// express-validator

module.exports.checkValidationsMap = validationResult => {
    return (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) return res.status(422).json({ validation: errors.mapped() })
        else next()
    }
}

module.exports.checkValidationsKeys = validationResult => {
    return (req, res, next) => {
      const errors = validationResult(req)
 
      
      if (!errors.isEmpty()) {
        const msg = {}
      errors.errors.forEach(err => {
        msg[err.path] = err.msg
      });
        res.status(422).json(msg)
      } else next()
    }}