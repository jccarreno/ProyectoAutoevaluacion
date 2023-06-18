const express=require('express')
const router=express.Router()

const mongoose=require('mongoose')
const eschema=mongoose.Schema

const eschemausuario=new eschema({
    _id:{type:String,required:true,unique:true,key:true},
    usr_nombre:String,
    usr_apellido:String,
    usr_genero:String,
    usr_estudio:String
})

const ModeloUsuario=mongoose.model('usuarios',eschemausuario)
module.exports=router

/*router.get('/ejemplo',(req,res)=>{
    res.end('Saludo carga desde ruta ejemplo')
})*/

//Agregar
router.post('/agregarusuario',(req,res)=>{
    const nuevousuario=new ModeloUsuario({
        _id:req.body._id,
        usr_nombre:req.body.usr_nombre,
        usr_apellido:req.body.usr_apellido,
        usr_genero:req.body.usr_genero,
        usr_estudio:req.body.usr_estudio
    })
    nuevousuario.save()
    .then(() => {
      console.log('Guardado exitosamente');
    })
    .catch((error) => {
      console.error(error);
    });
})

//obtener
router.post('/obtenerusuario', (req, res) => {
  const _id = req.body._id;

  if (_id) {
    ModeloUsuario.findOne({ _id: _id })
      .then(doc => {
        if (doc) {
          res.send([doc]); // Enviar el usuario como un array
        } else {
          res.send('No se encontró ningún usuario con la ID proporcionada.');
        }
      })
      .catch(err => {
        res.send(err);
      });
  } else {
    ModeloUsuario.find()
      .then(docs => {
        res.send(docs);
      })
      .catch(err => {
        res.send(err);
      });
  }
});


//actualizar
router.post('/actualizarusuario', (req, res) => {
  ModeloUsuario.findOneAndUpdate(
    { _id:req.body._id },
    { usr_nombre:req.body.usr_nombre,
      usr_apellido:req.body.usr_apellido,
      usr_genero:req.body.usr_genero,
      usr_estudio:req.body.usr_estudio})
    .then(() => {
      res.send('Usuario actualizado correctamente');
    })
    .catch(err => {
      res.send(err);
    });
});

//borrar
router.post('/borrarusuario', (req, res) => {
  ModeloUsuario.findOneAndDelete(
    { _id:req.body._id })
    .then(() => {
      res.send('Usuario borrado correctamente');
    })
    .catch(err => {
      res.send(err);
    });
});