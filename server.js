const express=require('express')
const app =express()

//Importar conexion MongoDB
const archivoBD=require('./conexion')

//Importacion del archivo de rutas y modelos
const rutausuario=require('./rutas/usuario')
const rutarol=require('./rutas/rol')
const rutausuariorol=require('./rutas/usuariorol')
const rutaevaluacion=require('./rutas/evaluacion')
const rutaperiodo=require('./rutas/periodo')
const rutatipolabor=require('./rutas/tipoLabor')
const rutalabor=require('./rutas/labor')

//Importar body parser
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api',rutausuario)
app.use('/api',rutarol)
app.use('/api',rutaevaluacion)
app.use('/api',rutausuariorol)
app.use('/api',rutaperiodo)
app.use('/api',rutatipolabor)
app.use('/api',rutalabor)

app.get('/',(req, res)=>{
    res.end('Bienvenidos al servidor backend Node')
})

//Configurar server basico
app.listen(5000, function(){
    console.log('El servidor NODE está corriendo')
})