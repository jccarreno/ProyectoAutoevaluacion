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
    _id:String,
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
        _id:req.body._id,
        rol_id:req.body.rol_id
    })
    nuevoevaluacion.save()
    .then(() => {
      console.log('Guardado exitosamente');
    })
    .catch((error) => {
      console.error(error);
    });
})

//obtener
router.get('/obtenerevaluacion', (req, res) => {
  ModeloEvaluaciones.find({})
    .then(docs => {
      res.send(docs);
    })
    .catch(err => {
      res.send(err);
    });
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
      _id:req.body._id,
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