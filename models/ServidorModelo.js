
// importo o traigo express para mi codigo (para poderlo usar)
const express = require('express')

//importo cors
const cors = require('cors')


//traer, importar la conexion
const {conectarBD}=require('../database/conexion.js')

//traer las rutas
const rutas=require('../routes/rutas.js')

class ServidorModelo {

    constructor(){

        this.app = express()
        this.despertarBD()
        this.llamarAuxiliar()
        this.enrutarPeticion()

    }
    encederServidor(){

        this.app.listen(process.env.PORT,function(){
            console.log("servidor encendido..."+process.env.PORT)
        })        

    }

    enrutarPeticion(){   
        
        this.app.use('/',rutas)

    }

    despertarBD(){ 

    conectarBD()  

    }

    llamarAuxiliar(){
        this.app.use(express.json())
        this.app.use(cors())
    }
}

module.exports=ServidorModelo