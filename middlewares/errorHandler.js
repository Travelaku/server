module.exports = (err, req, res, next) => {
  let status = 500
  let errObj = {
    msg: "Internal Server Error"
  }

  // if else errornya

  res
    .status(status)
    .json(errObj)
}