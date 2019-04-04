var Item = require('./agencia');//requiere los datos establecidos en pelicula.js
module.exports = class _Agencia {
   constructor( ) { // no tiene nada porque no vamos a pasar las variables por aqui

   }
   Guardar(req,res) {  //aqui se guardan los datos
	Item.create(   // crea un documento en mongoose                                                                                                            
    NOMBRE: req.body.NOMBRE,
    APELLIDO: req.body.APELLIDO,
    CEDULA: req.body.CEDULA,
    FECHA: req.body.FECHA,
    TELEFONO: req.body.TELEFONO,
    CORREO: req.body.CORREO,
      }, 
			function(err, item) {//Verifica si hay errores
				if (err)
                    {
					res.send(err);}
				
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});
                
                
          }
               	
			}); 
}
    
 Modificar(req,res) {
      console.log(req.body);
        Item.update({_id : req.body._id},{$set:{
            //busca la id del item a modificar y cambia las caracteristicas