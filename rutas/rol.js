const express=require('express')
const router=express.Router()

const mongoose=require('mongoose')
const eschema=mongoose.Schema

const eschemaRol=new eschema({
    rol_id:{type:String,required:true,unique:true,key:true},
    rol_descripcion:String
})

const ModeloRol=mongoose.model('roles',eschemaRol)
module.exports=router

/*router.get('/ejemplo',(req,res)=>{
    res.end('Saludo carga desde ruta ejemplo')
})*/

router.post('/agregarrol',(req,res)=>{
    const nuevorol=new ModeloRol({
        rol_id:req.body.rol_id,
        rol_descripcion:req.body.rol_descripcion
    })
    nuevorol.save()
    .then(() => {
      console.log('Guardado exitosamente');
    })
    .catch((error) => {
      console.error(error);
    });
})

//obtener
router.get('/obtenerrol', (req, res) => {
  ModeloRol.find({})
    .then(docs => {
      res.send(docs);
    })
    .catch(err => {
      res.send(err);
    });
});

//actualizar
router.post('/actualizarrol', (req, res) => {
  ModeloRol.findOneAndUpdate(
    { rol_id:req.body.rol_id },
    { rol_descripcion:req.body.rol_descripcion})
    .then(() => {
      res.send('Rol actualizado correctamente');
    })
    .catch(err => {
      res.send(err);
    });
});

//borrar
router.post('/borrarrol', (req, res) => {
  ModeloRol.findOneAndDelete(
    { rol_id:req.body.rol_id })
    .then(() => {
      res.send('Rol borrado correctamente');
    })
    .catch(err => {
      res.send(err);
    });
});