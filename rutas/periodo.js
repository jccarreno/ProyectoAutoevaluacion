const express=require('express')
const router=express.Router()

const mongoose=require('mongoose')
const eschema=mongoose.Schema

const eschemaPeriodo=new eschema({
    per_id:{type:String,required:true,unique:true,key:true},
    per_nombre:String,
    per_fechainicio:Date,
    per_fechafin:Date
})

const ModeloPeriodo=mongoose.model('Periodos',eschemaPeriodo)
module.exports=router

/*router.get('/ejemplo',(req,res)=>{
    res.end('Saludo carga desde ruta ejemplo')
})*/

router.post('/agregarperiodo',(req,res)=>{
    const nuevoperiodo=new ModeloPeriodo({
        per_id:req.body.per_id,
        per_nombre:req.body.per_nombre,
        per_fechainicio:req.body.per_fechainicio,
        per_fechafin:req.body.per_fechafin
    })
    nuevoperiodo.save()
    .then(() => {
      console.log('Guardado exitosamente');
    })
    .catch((error) => {
      console.error(error);
    });
})

//obtener
router.get('/obtenerperiodo', (req, res) => {
  ModeloPeriodo.find({})
    .then(docs => {
      res.send(docs);
    })
    .catch(err => {
      res.send(err);
    });
});

//actualizar
router.post('/actualizarperiodo', (req, res) => {
  ModeloPeriodo.findOneAndUpdate(
    { per_id:req.body.per_id },
    { per_nombre:req.body.per_nombre,
      per_fechainicio:req.body.per_fechainicio,
      per_fechafin:req.body.per_fechafin})
    .then(() => {
      res.send('Periodo actualizado correctamente');
    })
    .catch(err => {
      res.send(err);
    });
});

//borrar
router.post('/borrarperiodo', (req, res) => {
  ModeloPeriodo.findOneAndDelete(
    { per_id:req.body.per_id})
    .then(() => {
      res.send('Tipo labor borrado correctamente');
    })
    .catch(err => {
      res.send(err);
    });
});