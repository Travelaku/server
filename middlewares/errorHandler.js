module.exports = (err, req, res) => {
  let status = 500;
  let message = 'Internal Server Error'

  if (err.errorMessage == 'bad request') {
    status = 400
    message = err.msg
  }

  res
    .status(status)
    .json({
      message
    })
}