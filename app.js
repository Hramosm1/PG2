const express = require('express');
const rolRouter = require('./src/router/rol.router')

const app = express();

const port = 9200;

app.use('/rol',rolRouter);


  app.listen( process.env.PORT || port, (err) => {
    if(err){
      console.log('Error al iniciar el servidor: ' + err)
    } else {
      console.log('Servidor corriendo en el puerto: ' + port)
    }
    
  })