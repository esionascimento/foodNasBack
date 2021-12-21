const { StatusCodes } = require('http-status-codes');

const error = (code, message) => ({
  isError: true,
  code,
  message,
});

module.exports = {
  errorRegister: (message) => error(StatusCodes.BAD_REQUEST, message),
  errorConnect: (message) => error(StatusCodes.INTERNAL_SERVER_ERROR, message),
  errorEmailInvalid: (message) => error(StatusCodes.NOT_FOUND, message),
  errorPasswordInvalid: (message) => error(StatusCodes.UNAUTHORIZED, message)
};