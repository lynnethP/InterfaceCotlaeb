function validar() {
	
	var nombre;
	var apellido;
	var nombreuser;
	var correo; 
	var clave; 
	var clave_dos;

	nombre = document.getElementById('nombre').value;
	apellido = document.getElementById('apellido').value;
	correo = document.getElementById('correo').value;
	nombreuser = document.getElementById('usuario').value;
	clave = document.getElementById('clave').value;
	clave_dos = document.getElementById('clave_dos').value;

                    
	if (nombre == " " || apellido == " " || nombreuser == " "|| correo == " " || clave == "" || clave_dos == "") {
		alert("Todos los campos deben ser llenados");
		return false;
	}

	if (clave != clave_dos) {
		alert("Las claves no coinciden");
		return false;
	}

}