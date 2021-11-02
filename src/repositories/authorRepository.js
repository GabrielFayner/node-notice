const { msg_success, msg_error } = require("../helpers/messages");

exports.getAll = async (model, req, res) => {
  try {
    const data = await model.find().sort({ createdAt: -1 });
    msg_success(res, 200, { author: data });
  } catch (err) {
    msg_error(res, 400, "Não foi possivel retornar o author", err);
  }
};

exports.getById = async (model, req, res) => {
  try {
    const data = await model.findById(req.params.id);
    msg_success(res, 200, { author: data });
  } catch (err) {
    msg_error(res, 400, "Não foi possivel retornar o author", err);
  }
};

exports.created = async (model, req, res) => {
  try {
    const data = await model.create(req.body);

    return res.send({ author: data });
  } catch (err) {
    msg_error(res, 400, "O cadastro do novo author falhou!", err);
  }
};

exports.updated = async (model, req, res) => {
  try {
    const data = await model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.send({ author: data });
  } catch (err) {
    msg_error(res, 400, "A edição do author falhou!", err);
  }
};

exports.deleted = async (model, req, res) => {
  try {
    const data = await model.findByIdAndDelete(req.params.id);

    msg_success(res, 200, { author: data });
  } catch (err) {
    msg_error(res, 400, "Falhou ao deletar o author!", err);
  }
};
