// importo el modelo da datos

const JugadorModelo=require('../models/JugadorModelo.js')

//Servicio para agregar un documento a la BD
async function insertarJugador(datosJugador){

    let jugadorAInsertar=new JugadorModelo(datosJugador)

    return await jugadorAInsertar.save()

}
// servicio para buscar 1 documento en la bd
async function leerJugador(id){

    let jugador=await JugadorModelo.findById(id)
    return jugador

}

//servicio para buscar todos los documentos

async function leerJugadores(){

    let jugadores=await JugadorModelo.find()
    return jugadores
}

//servicio para editar un documento

async function modificarJugador(id,datos){

    return await JugadorModelo.findByIdAndUpdate(id,datos)

}

//servicios para eliminar un documento

async function borrarJuagador(id){

    return await JugadorModelo.findByIdAndDelete(id)

}

module.exports={
    insertarJugador,
    leerJugador,
    leerJugadores,
    modificarJugador,
    borrarJuagador
}