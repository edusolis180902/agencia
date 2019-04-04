var mongoose = require ('mongoose');//Requiere las librerias de mongoose
var Schema = mongoose.Schema;
var pelicula = new Schema(
{//Define los datos de la base de datos y en que tipo de datos
	NOMBRE : String,
	APELLIDO : String,
	CEDULA: Number,
	FECHA: Date,
	TELEFONO: Number,
	CORREO: String,
	

});
module.exports = mongoose.model('agencia',agencia);