var controllerpelicula = require('./controllerpelicula.js');
var controllerAdministrador = require('./controlleradministrador.js');

module.exports = function(app){

	var clasepelicula = new controllerpelicula();
	var claseadm = new controllerAdministrador();
	app.post('/api/Nuevapelicula', clasepelicula.Guardar);
	app.post('/api/modificapelicula', clasepelicula.Modificar);
	app.post('/api/eliminapelicula', clasepelicula.Eliminar);
	app.post('/api/seleccionarpelicula', clasepelicula.Seleccionartodos);
	app.post('/api/seleccionarporid', clasepelicula.Seleccionarporid);
	app.post('/api/seleccionarporfecha', clasepelicula.Seleccionarporfecha);
	app.post('/api/seleccionarpornombre', clasepelicula.Seleccionarpornombre);
	app.post('/api/nuevoadm',  claseadm.Guardar);
    app.post('/api/loginadm',  claseadm.Login);


	app.get('*', function(req,res){//localhost:8080
		res.sendfile('./login.html');//Carga unica de la vista
	});


	
};
      


    
