module.exports = (err, req, res, next) => {
  let status = 500
  let errObj = {
    msg: "Internal Server Error"
  }

  if (err.name === 'SequelizeValidationError') {
    status = 400
    errObj.msg = "Validation Error"
    errObj.errors = err.errors.map(error => error.message)
  }

  res
    .status(status)
    .json(errObj)
}