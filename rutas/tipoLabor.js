const express=require('express')
const router=express.Router()

const mongoose=require('mongoose')
const eschema=mongoose.Schema

const eschemaTipoLabor=new eschema({
    tl_id:{type:String,required:true,unique:true,key:true},
    tl_codigo:String,
    tl_descripcion:String
})

const ModeloTipoLabor=mongoose.model('TipoLabores',eschemaTipoLabor)
module.exports=router

/*router.get('/ejemplo',(req,res)=>{
    res.end('Saludo carga desde ruta ejemplo')
})*/

router.post('/agregartipolabor',(req,res)=>{
    const nuevoTipoLabor=new ModeloTipoLabor({
      tl_id:req.body.tl_id,  
      tl_codigo:req.body.tl_codigo,
      tl_descripcion:req.body.tl_descripcion,
    })
    nuevoTipoLabor.save()
    .then(() => {
      console.log('Guardado exitosamente');
    })
    .catch((error) => {
      console.error(error);
    });
})

//obtener
router.post('/obtenertipolabor', (req, res) => {
  const tl_id = req.body.tl_id;

  if (tl_id) {
    ModeloTipoLabor.findOne({ tl_id: tl_id })
      .then(doc => {
        if (doc) {
          res.send([doc]); // Enviar el usuario como un array
        } else {
          res.send('No se encontró ningún tipo labor con la ID proporcionada.');
        }
      })
      .catch(err => {
        res.send(err);
      });
  } else {
    ModeloTipoLabor.find()
      .then(docs => {
        res.send(docs);
      })
      .catch(err => {
        res.send(err);
      });
  }
});


//actualizar
router.post('/actualizartipolabor', (req, res) => {
  ModeloTipoLabor.findOneAndUpdate(
    { tl_id:req.body.tl_id},
    {tl_codigo:req.body.tl_codigo,
      tl_descripcion:req.body.tl_descripcion})
    .then(() => {
      res.send('Tipo labor actualizado correctamente');
    })
    .catch(err => {
      res.send(err);
    });
});

//borrar
router.post('/borrartipolabor', (req, res) => {
  ModeloTipoLabor.findOneAndDelete(
    { tl_id:req.body.tl_id })
    .then(() => {
      res.send('Tipo labor borrado correctamente');
    })
    .catch(err => {
      res.send(err);
    });
});