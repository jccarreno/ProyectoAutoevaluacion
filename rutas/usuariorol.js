const express=require('express')
const router=express.Router()

const mongoose=require('mongoose')
const eschema=mongoose.Schema

const eschemaUsuarioRol=new eschema({
    usr_id:{type:String,required:true,unique:true,key:true},
    rol_id:String,
    ur_fechainicio:Date,
    ur_fechafin:Date
})

const ModeloUsuarioRol=mongoose.model('usuarioroles',eschemaUsuarioRol)
module.exports=router

/*router.get('/ejemplo',(req,res)=>{
    res.end('Saludo carga desde ruta ejemplo')
})*/

router.post('/agregarusuariorol',(req,res)=>{
    const nuevousuariorol=new ModeloUsuarioRol({
        usr_id:req.body.usr_id,
        rol_id:req.body.rol_id,
        ur_fechainicio:req.body.ur_fechainicio,
        ur_fechafin:req.body.ur_fechafin
    })
    nuevousuariorol.save()
    .then(() => {
      console.log('Guardado exitosamente');
    })
    .catch((error) => {
      console.error(error);
    });
})

//obtener
router.get('/obtenerusuariorol', (req, res) => {
  ModeloUsuarioRol.find({})
    .then(docs => {
      res.send(docs);
    })
    .catch(err => {
      res.send(err);
    });
});

//actualizar
router.post('/actualizarusuariorol', (req, res) => {
  ModeloUsuarioRol.findOneAndUpdate(
    { usr_id:req.body.usr_id },
    { rol_id:req.body.rol_id,
      ur_fechainicio:req.body.ur_fechainicio,
      ur_fechafin:req.body.ur_fechafin})
    .then(() => {
      res.send('Usuario rol actualizado correctamente');
    })
    .catch(err => {
      res.send(err);
    });
});

//borrar
router.post('/borrarusuariorol', (req, res) => {
  ModeloUsuarioRol.findOneAndDelete(
    { usr_id:req.body.usr_id })
    .then(() => {
      res.send('Usuario rol borrado correctamente');
    })
    .catch(err => {
      res.send(err);
    });
});