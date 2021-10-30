// el controlador se encarga de administar las peticiones y respuestas

 const {request,response}=require('express')

// importo el servicio

const{insertarJugador}=require('../services/servicios.js')
const{leerJugador}=require('../services/servicios.js')
const{leerJugadores}=require('../services/servicios.js')
const{modificarJugador}=require('../services/servicios.js')
const{borrarJuagador}=require('../services/servicios.js')

 //cuales son las operaciones que debe realizar mi servidor
 async function registrarJugador(peticion=request,respuesta=response){

    //capturo los datos que llegan en el cueropo de patecion
    let datosCliente=peticion.body


//intentar grabar los datos en BD usando el servicio
    try{

    await insertarJugador(datosCliente)
    respuesta.status(200).json({
        estado:true,
        mensaje:"Exito registrando el jugador"
    })
        
    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"upsss..."+error
        })

    }

   

 }
 async function buscarJugador(peticion=request,respuesta=response){
     ///capturar el id del jugador a buscar

    let id=peticion.params.id


    try{

        let jugador=await leerJugador(id)
        respuesta.status(200).json({
            estado:true,
            datos:jugador
        })
            
    }catch(error){
            respuesta.status(400).json({
                estado:false,
                mensaje:"upsss..."+error
        })
    
    }

 }
 async function buscarJugadores(peticion=request,respuesta=response){

    
    try{

        let jugadores=await leerJugadores()
        respuesta.status(200).json({
            estado:true,
            datos:jugadores
        })
            
    }catch(error){
            respuesta.status(400).json({
                estado:false,
                mensaje:"upsss..."+error
        })
    
    }

   

 }
async function editarJugador(peticion=request,respuesta=response){

    //recibir los dato del body y el id de los parametros

    let datos=peticion.body
    let id=peticion.params.id

    //intentar grabar los datos en BD usando el servicio
    try{

        await modificarJugador(id,datos)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito editando el jugador"
        })
            
        }catch(error){
            respuesta.status(400).json({
                estado:false,
                mensaje:"upsss..."+error
            })
    
        }

   

 }
async function eliminarJugador(peticion=request,respuesta=response){

    let id=peticion.params.id

    try{

        await borrarJuagador(id)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito eliminando el jugador"
        })
            
        }catch(error){
            respuesta.status(400).json({
                estado:false,
                mensaje:"upsss..."+error
            })
    
        }

 }
 module.exports={registrarJugador,
        buscarJugador,
        buscarJugadores,
        editarJugador, 
        eliminarJugador
    }