const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;
    this.usuarioPath = '/api/usuarios'

		//conectar a base de datos
		this.connectDB();	
		//middlewares
		this.middlewares();
		//rutas de mi aplicacion

		this.routes();
	}

	middlewares() {
		//directorio publico
    
		this.app.use(express.static("public"));
    //cors
    this.app.use(cors());
		//lectura y parseo del body
		this.app.use(express.json());

	}

	async connectDB() {
		await dbConnection();
	}

	routes() {
    this.app.use(this.usuarioPath, require('../routes/userRoute'))
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log("Server running on port", this.port);
		});
	}
}

module.exports = Server;
