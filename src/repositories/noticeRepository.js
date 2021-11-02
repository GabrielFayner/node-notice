const { msg_success, msg_error } = require("../helpers/messages");

exports.getAll = async (model, req, res) => {
  try {
    const data = await model.find().sort({ createdAt: -1 }).populate("author");

    msg_success(res, 200, { notices: data });
  } catch (err) {
    msg_error(res, 400, "Não foi possivel retornar a lista de noticias", err);
  }
};

exports.getById = async (model, req, res) => {
  try {
    const data = await model.findById(req.params.id).populate("author");
    msg_success(res, 200, { notice: data });
  } catch (err) {
    msg_error(res, 400, "Não foi possivel retornar a lista de noticias", err);
  }
};

exports.created = async (model, req, res) => {
  try {
    const data = await model.create(req.body);

    return res.send({ notice: data });
  } catch (err) {
    msg_error(res, 400, "O cadastro da nova noticia falhou!", err);
  }
};

exports.updated = async (model, req, res) => {
  try {
    const data = await model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.send({ notice: data });
  } catch (err) {
    msg_error(res, 400, "A edição falhou!", err);
  }
};

exports.deleted = async (model, req, res) => {
  try {
    const data = await model.findByIdAndDelete(req.params.id);

    msg_success(res, 200, { notice: data });
  } catch (err) {
    msg_error(res, 400, "Falhou ao deletar!", err);
  }
};
