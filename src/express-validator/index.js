
module.exports.expressValidation = {
  /** 
  *@param validationResult result of validation from express validator
  *@return Objects of missing fields with msg and error
  */
  map(validationResult) {
    return (req, res, next) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) return res.status(422).json({ validation: errors.mapped() })
      else next()
    }
  },
  /** 
  *@param validationResult result of validation from express validator
  *@return Objects of missing fields like this { field name : msg }
  */
  keys(validationResult) {
    return (req, res, next) => {
      const errors = validationResult(req)


      if (!errors.isEmpty()) {
        const msg = {}
        errors.errors.forEach(err => {
          msg[err.path] = err.msg
        });
        res.status(422).json(msg)
      } else next()
    }
  }
}