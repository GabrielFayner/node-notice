exports.msg_success = (res, statusCode, model) => {
  return res.status(statusCode).send(model);
};
exports.msg_error = (res, statusCode, message, err = "") => {
  return res.status(statusCode).send({ error: message + err });
};
