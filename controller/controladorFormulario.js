const Formulario = require("../models/Formulario");

module.exports.buscarFormulario = async (req, res) => {
  const email = req.params.email;
  await Formulario.find({
    email: email
  }).then((response) => {
    res.json(response);
  });
};
module.exports.ingresarFormulario = async (req, res) => {
  const formulario = req.body;
  await Formulario.create(formulario)
    .then((response) => {
      res.status(200).json(response);
      console.log(response);
    })
    .catch((error) => {
      res.json(error.message);
    });
};

// module.exports.editarFormulario = async (req, res) => {
//   const id = req.params.id;
//   await Formulario.find({
//     id: id
//   }).then((response) => {
//     res.json(response);
//   });
// };

module.exports.borrarFormulario = async (req, res) => {
  console.log(req.params);
  const {
    email
  } = req.params;
  await Formulario.deleteOne({
      email: email
    })
    .then((respuesta) => {
      console.log(respuesta);
      res.status(200).json(respuesta);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json(error);
    });
};