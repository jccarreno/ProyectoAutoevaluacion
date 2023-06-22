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
const rutacredenciales=require('./rutas/credenciales')

//Importar body parser
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
    // Permitir que el navegador envíe cookies con la solicitud (si aplicable)
    res.header('Access-Control-Allow-Credentials', 'true');
  
    if (req.method === 'OPTIONS') {
      // Respondemos a la solicitud preflight para las solicitudes con el método OPTIONS
      res.sendStatus(200);
    } else {
      next();
    }
  });

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
app.use('/api',rutacredenciales)

app.get('/',(req, res)=>{
    res.end('Bienvenidos al servidor backend Node')
})

//Configurar server basico
app.listen(5000, function(){
    console.log('El servidor NODE está corriendo')
})