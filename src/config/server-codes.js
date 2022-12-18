const codes = Object.freeze({
  SUCCESS: 200,
  SUCCESS_CREATED: 201,
  SUCCESS_NO_CONTENT: 204,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  NOT_ACCEPTABLE: 406,
  CONFLICT: 409,
  LOCKED: 423,
  SERVER_ERROR: 500,
  DATA_EXPIRED: 422,
  VALIDATION_ERROR: 400,
});

module.exports = codes;
