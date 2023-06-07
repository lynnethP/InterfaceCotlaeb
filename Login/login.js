
	function Login(){ 
	 
		var usuario = document.login.usuario.value; 
		var password = document.login.password.value; 

			if (usuario=="" || password=="") { 
				alert("Por favor llena ambos campos"); 
			} else if (usuario=="usuario" && password=="12345") { 
				window.location="../Usuario/usuario.html"; 
			} else if (usuario=="administrador" && password=="67890") { 
				window.location="../Administrador/administrador.html"; 
			} else{
				alert("El usuario o contraseña son incorrectos. Verifique los datos ingresados e intente nuevamente");
			}

		} 

