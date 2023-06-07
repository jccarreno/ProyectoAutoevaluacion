const express=require('express')
const router=express.Router()

const mongoose=require('mongoose')
const eschema=mongoose.Schema

const eschemaLabor=new eschema({
    lab_id:{type:String,required:true,unique:true,key:true},
    lab_nombre:String,
    lab_horas:Number,
    tl_id:String
})

const ModeloLabor=mongoose.model('Labores',eschemaLabor)
module.exports=router

/*router.get('/ejemplo',(req,res)=>{
    res.end('Saludo carga desde ruta ejemplo')
})*/

router.post('/agregarlabor',(req,res)=>{
    const nuevaLabor=new ModeloLabor({
        lab_id:req.body.lab_id,
        lab_nombre:req.body.lab_nombre,
        lab_horas:req.body.lab_horas,
        tl_id:req.body.tl_id
    })
    nuevaLabor.save()
    .then(() => {
      console.log('Guardado exitosamente');
    })
    .catch((error) => {
      console.error(error);
    });
})

//obtener
router.get('/obtenerlabor', (req, res) => {
  ModeloLabor.find({})
    .then(docs => {
      res.send(docs);
    })
    .catch(err => {
      res.send(err);
    });
});

//actualizar
router.post('/actualizarlabor', (req, res) => {
  ModeloLabor.findOneAndUpdate(
    { lab_id:req.body.lab_id },
    { lab_nombre:req.body.lab_nombre,
      lab_horas:req.body.lab_horas,
      tl_id:req.body.tl_id})
    .then(() => {
      res.send('Labor actualizado correctamente');
    })
    .catch(err => {
      res.send(err);
    });
});

//borrar
router.post('/borrarlabor', (req, res) => {
  ModeloLabor.findOneAndDelete(
    { lab_id:req.body.lab_id})
    .then(() => {
      res.send('Labor borrado correctamente');
    })
    .catch(err => {
      res.send(err);
    });
});