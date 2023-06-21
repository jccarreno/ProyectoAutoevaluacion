const express=require('express')
const router=express.Router()

const mongoose=require('mongoose')
const eschema=mongoose.Schema

const eschemaevaluacion=new eschema({
    eva_id:{type:String,required:true,unique:true,key:true},
    eva_estado:String,
    eva_puntaje:Number,
    eva_resultado:String,
    lab_id:String,
    per_id:String,
    usr_id:String,
    rol_id:String
})

const ModeloEvaluaciones=mongoose.model('Evaluaciones',eschemaevaluacion)
module.exports=router

/*router.get('/ejemplo',(req,res)=>{
    res.end('Saludo carga desde ruta ejemplo')
})*/

router.post('/agregarevaluacion',(req,res)=>{
    const nuevoevaluacion=new ModeloEvaluaciones({
        eva_id:req.body.eva_id,
        eva_estado:req.body.eva_estado,
        eva_puntaje:req.body.eva_puntaje,
        eva_resultado:req.body.eva_resultado,
        lab_id:req.body.lab_id,
        per_id:req.body.per_id,
        usr_id:req.body.usr_id,
        rol_id:req.body.rol_id
    })
    nuevoevaluacion.save()
    .then(() => {
      console.log('Guardado exitosamente');
      res.status(200).send('Guardado exitosamente');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send(`Error al guardar la evaluación: ${error.message}`);
    });
})

//obtener
router.post('/obtenerevaluacion', (req, res) => {
  const eva_id = req.body.eva_id;

  if (eva_id) {
    ModeloEvaluaciones.findOne({ eva_id: eva_id })
      .then(doc => {
        if (doc) {
          res.send([doc]); // Enviar el usuario como un array
        } else {
          res.send('No se encontró ningúna evaluacion con la ID proporcionada.');
        }
      })
      .catch(err => {
        res.send(err);
      });
  } else {
    ModeloEvaluaciones.find()
      .then(docs => {
        res.send(docs);
      })
      .catch(err => {
        res.send(err);
      });
  }
});

router.post('/obtenerevaluaciondocente', (req, res) => {
  const usr_id = req.body.usr_id;

  if (usr_id) {
    ModeloEvaluaciones.find({ usr_id: usr_id })  // <-- Cambiado a 'find'
      .then(docs => {
        if (docs && docs.length > 0) {  // <-- Comprobación actualizada
          res.send(docs); // Enviar todas las evaluaciones correspondientes
        } else {
          res.send('No se encontró ninguna evaluación con la ID proporcionada.');
        }
      })
      .catch(err => {
        res.send(err);
      });
  } else {
    ModeloEvaluaciones.find()
      .then(docs => {
        res.send(docs);
      })
      .catch(err => {
        res.send(err);
      });
  }
});

router.post('/obtenerevaluacionlabor', (req, res) => {
  const lab_id = req.body.lab_id;

  if (lab_id) {
    ModeloEvaluaciones.find({ lab_id: lab_id })  // <-- Cambiado a 'find'
      .then(docs => {
        if (docs && docs.length > 0) {  // <-- Comprobación actualizada
          res.send(docs); // Enviar todas las evaluaciones correspondientes
        } else {
          res.send('No se encontró ninguna evaluación con la ID proporcionada.');
        }
      })
      .catch(err => {
        res.send(err);
      });
  } else {
    ModeloEvaluaciones.find()
      .then(docs => {
        res.send(docs);
      })
      .catch(err => {
        res.send(err);
      });
  }
});

//actualizar
router.post('/actualizarevaluacion', (req, res) => {
  ModeloEvaluaciones.findOneAndUpdate(
    { eva_id:req.body.eva_id },
    { eva_estado:req.body.eva_estado,
      eva_puntaje:req.body.eva_puntaje,
      eva_resultado:req.body.eva_resultado,
      lab_id:req.body.lab_id,
      per_id:req.body.per_id,
      usr_id:req.body.usr_id,
      rol_id:req.body.rol_id})
    .then(() => {
      res.send('Evaluacion actualizado correctamente');
    })
    .catch(err => {
      res.send(err);
    });
});

//borrar
router.post('/borrarevaluacion', (req, res) => {
  ModeloEvaluaciones.findOneAndDelete(
    { eva_id:req.body.eva_id})
    .then(() => {
      res.send('Evaluacion borrado correctamente');
    })
    .catch(err => {
      res.send(err);
    });
});

router.post('/updateEstado', (req, res) => {
  ModeloEvaluaciones.findOneAndUpdate(
    { eva_id:req.body.eva_id },
    { eva_estado:req.body.eva_estado})
    .then(() => {
      res.send('Evaluacion actualizado correctamente');
    })
    .catch(err => {
      res.send(err);
    });
});

router.post('/updateResultado', (req, res) => {
  ModeloEvaluaciones.findOneAndUpdate(
    { eva_id:req.body.eva_id },
    { eva_resultado:req.body.eva_resultado})
    .then(() => {
      res.send('Evaluacion actualizado correctamente');
    })
    .catch(err => {
      res.send(err);
    });
});

router.post('/updatePuntaje', (req, res) => {
  ModeloEvaluaciones.findOneAndUpdate(
    { eva_id:req.body.eva_id },
    { eva_puntaje:req.body.eva_puntaje})
    .then(() => {
      res.send('Evaluacion actualizado correctamente');
    })
    .catch(err => {
      res.send(err);
    });
});