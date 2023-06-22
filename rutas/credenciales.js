const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const eschema = mongoose.Schema;

const eschemaCredenciales = new eschema({
    cr_login: { type: String, required: true, unique: true, key: true },
    cr_clave: String,
    cr_tipo: String
});

const ModeloCredenciales = mongoose.model('credenciales', eschemaCredenciales);

//Agregar
router.post('/agregarcredenciales', (req, res) => {
    const nuevasCredenciales = new ModeloCredenciales({
        cr_login: req.body.cr_login,
        cr_clave: req.body.cr_clave,
        cr_tipo: req.body.cr_tipo
    });
    nuevasCredenciales.save()
    .then(() => {
      console.log('Guardado exitosamente');
    })
    .catch((error) => {
      console.error(error);
    });
});

//obtener
router.post('/obtenercredenciales', (req, res) => {
    const cr_login = req.body.cr_login;
    const cr_clave = req.body.cr_clave;
  
    if (cr_login && cr_clave) {
      ModeloCredenciales.findOne({ cr_login: cr_login, cr_clave: cr_clave })
        .then(doc => {
          if (doc) {
            res.send([doc]); // Enviar las credenciales como un array
          } else {
            res.send('No se encontraron credenciales con el login y la clave proporcionados.');
          }
        })
        .catch(err => {
          res.send(err);
        });
    } else {
      res.send('Por favor, proporcione tanto el login como la clave.');
    }
  });
  

//actualizar
router.post('/actualizarcredenciales', (req, res) => {
  ModeloCredenciales.findOneAndUpdate(
    { cr_login: req.body.cr_login },
    { cr_clave: req.body.cr_clave, cr_tipo: req.body.cr_tipo })
    .then(() => {
      res.send('Credenciales actualizadas correctamente');
    })
    .catch(err => {
      res.send(err);
    });
});

//borrar
router.post('/borrarcredenciales', (req, res) => {
  ModeloCredenciales.findOneAndDelete({ cr_login: req.body.cr_login })
    .then(() => {
      res.send('Credenciales borradas correctamente');
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
