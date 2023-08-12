const express = require('express');
const rolRouter = require('./src/router/rol.router')
const usuarioRouter = require('./src/router/usaurio.router');
const loginRouter = require('./src/router/login');
const cors = require('cors');

const { boomErrorHandler } = require('./src/middlewares/error.handler');

const app = express();

const port = 9200;
app.use(express.json());

// Configura las opciones de cors
const corsOptions = {
  origin: 'http://localhost:4200', // Cambia esta URL por la URL de tu frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions)); // Utiliza el middleware cors

app.use('/rol',rolRouter);
app.use('/usuario',usuarioRouter);
app.use('/login', loginRouter);

app.use(boomErrorHandler);


app.listen( process.env.PORT || port, (err) => {
  if(err){
    console.log('Error al iniciar el servidor: ' + err)
  } else {
    console.log('Servidor corriendo en el puerto: ' + port)
  }    
 });