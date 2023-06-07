const express=require('express')
const router=express.Router()

const mongoose=require('mongoose')
const eschema=mongoose.Schema

const eschemausuario=new eschema({
    usr_id:{type:String,required:true,unique:true,key:true},
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
        usr_id:req.body.usr_id,
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
router.get('/obtenerusuario', (req, res) => {
  ModeloUsuario.find({})
    .then(docs => {
      res.send(docs);
    })
    .catch(err => {
      res.send(err);
    });
});

//actualizar
router.post('/actualizarusuario', (req, res) => {
  ModeloUsuario.findOneAndUpdate(
    { usr_id:req.body.usr_id },
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
    { usr_id:req.body.usr_id })
    .then(() => {
      res.send('Usuario borrado correctamente');
    })
    .catch(err => {
      res.send(err);
    });
});