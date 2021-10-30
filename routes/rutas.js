

const {Router}=require('express')

//importo los controladores
const{registrarJugador}=require('../controllers/controladores.js')
const{buscarJugadores}=require('../controllers/controladores.js')
const{buscarJugador}=require('../controllers/controladores.js')
const{editarJugador}=require('../controllers/controladores.js')
const{eliminarJugador}=require('../controllers/controladores.js')

// una variable que personaliza mis rutas
const rutas=Router()

//rutas del api
rutas.get('/avanzada/v1/jugadores',buscarJugadores)
rutas.get('/avanzada/v1/jugadores/:id',buscarJugador)
rutas.post('/avanzada/v1/jugadores',registrarJugador)
rutas.put('/avanzada/v1/jugadores/:id',editarJugador)  
rutas.delete('/avanzada/v1/jugadores/:id',eliminarJugador)

  module.exports=rutas