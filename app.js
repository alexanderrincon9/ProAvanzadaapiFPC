
// se trae el modelo del servidor
const ServidorModelo=require('./models/ServidorModelo.js')

// se trae el dotenv (variables de entorno)
require('dotenv').config()

// puedo personalizar mi servidor
const servidorJugadores=new ServidorModelo()

//encender servidor
servidorJugadores.encederServidor()
  


 
