const express = require('express')
const cors = require('cors')

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'

        //middlewares
        this.middlewares();
        //rutas
        this.routes();
    }

    middlewares(){

        //cors
        this.app.use( cors() )

        //lecutra y arseo boyd
        this.app.use( express.json() )

        //Directorio Publico;
        this.app.use( express.static('public') )
    }

    routes(){
        this.app.use( this.usuariosPath ,require('../routes/usuarios'));
    }

    start(){
        this.app.listen( this.port ,()=>{
            console.log("Servidor corriendo en", this.port )
        });
    }
}


module.exports = Server;