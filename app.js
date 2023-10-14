const express = require('express');
const cors = require('cors');

const permisoRouter = require('./src/router/permisos.router');
const moduloRouter = require('./src/router/modulo.router');
const telefonoEmpresaRouter = require('./src/router/telefonoEmpresa.router');
const estadoEmpresaRouter = require('./src/router/estadoEmpresa.router');
const empresaRouter = require('./src/router/empresa.router');
const rolRouter = require('./src/router/rol.router');
const usuarioRouter = require('./src/router/usaurio.router');
const loginRouter = require('./src/router/login');
const plazaRouter = require('./src/router/plaza.router');
const estadoPublicacionRouter = require('./src/router/estadoPublicacion.router');
const medioDifusion = require('./src/router/medioDifusion.router');
const publicacionPlaza = require('./src/router/publicacionPlaza.router');
const estadosEntrevista = require('./src/router/estadoEntrevista.router');
const entrevista = require('./src/router/entrevista.router');
const apellidosEmpleados = require('./src/router/apellidosEmpleado.router');
const asistencia = require('./src/router/asistencia.router');
const documento = require('./src/router/documento.router');
const emailEmpleado = require('./src/router/emailEmpleado.router');
const emailEmpresa = require('./src/router/emailEmpresa.router');
const empleado = require('./src/router/empleado.router');
const horaExtra = require('./src/router/horaExtra.router');
const nombreEmpleado = require('./src/router/nombresEmpleado.router');
const nomina = require('./src/router/nomina.router');
const puesto = require('./src/router/puesto.router');
const telefonoEmpleado = require('./src/router/telefonoEmpleado.router');
const tipoContratacion = require('./src/router/tipoContratacion.router');
const tipoDocumento = require('./src/router/tipoDocumento.router');
const equipopp = require('./src/router/epp.router');
const asignacionEpp = require('./src/router/asignacionEpp.router');


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

app.use('/asignacionEpp', asignacionEpp);
app.use('/epp', equipopp);
app.use('/tipoDocumento', tipoDocumento);
app.use('/tipoContratacion', tipoContratacion);
app.use('/telefonoEmpleado', telefonoEmpleado);
app.use('/puesto', puesto);
app.use('/nomina', nomina);
app.use('/nombreEmpleado', nombreEmpleado);
app.use('/horaExtra', horaExtra);
app.use('/empleado', empleado);
app.use('/emailEmpresa', emailEmpresa);
app.use('/emailEmpleado', emailEmpleado);
app.use('/documento', documento);
app.use('/asistencia', asistencia);
app.use('/apellidosEmpleado', apellidosEmpleados);
app.use('/entrevista', entrevista);
app.use('/estados-entrevista', estadosEntrevista);
app.use('/publicacion-plaza', publicacionPlaza);
app.use('/medio-difusion', medioDifusion);
app.use('/estado-publicacion', estadoPublicacionRouter);
app.use('/plaza', plazaRouter);
app.use('/permiso',permisoRouter);
app.use('/modulo',moduloRouter);
app.use('/telefonoEmpresa',telefonoEmpresaRouter);
app.use('/estadoEmpresa',estadoEmpresaRouter);
app.use('/empresa',empresaRouter);
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