
var cant_so_uno = 5;
var cant_so_dos = 2;
var cant_so_tres = 6;

document.getElementById("formulario").addEventListener("submit", function(event){

    		let hasError = false;

    		// obtenemos todos los input radio del grupo horario que esten chequeados
		    // si no hay ninguno lanzamos alerta
		    if(!document.querySelector('input[name="turno"]:checked')) {
		      alert('Por favor, selecciona el horario para poder inscribirte');
		      hasError = true;

		      } else if ((document.querySelector('input[name="turno"]:checked').value == "diurno" && cant_so_uno >= 10) || 
		      	(document.querySelector('input[name="turno"]:checked').value == "nocturno" && cant_so_dos >= 10) || 
		      	(document.querySelector('input[name="turno"]:checked').value == "sabatino" && cant_so_tres >= 10)) {

			      	alert("El curso no está disponible en este horario pues ya alcanzó su capacidad máxima, por favor selecciona otro horario");
			      	hasError = true;

		      }  else if (document.querySelector('input[name="turno"]:checked').value == "diurno" ) {

			      	alert("Gracias por inscribirte en nuestros cursos");
			      	alert("Tu docente es: Ing. J. Ricardo Tillero. Tu sección es: SO-01. Tu horario es: Diurno");

		      }else if (document.querySelector('input[name="turno"]:checked').value == "nocturno" ) {

			      	alert("Gracias por inscribirte en nuestros cursos");
			      	alert("Tu docente es: Ing. Francys Barreto. Tu sección es: SO-02. Tu horario es: Nocturno");

		      }else if (document.querySelector('input[name="turno"]:checked').value == "sabatino" ) {

			      	alert("Gracias por inscribirte en nuestros cursos");
			      	alert("Tu docente es: Ing. Ellery López. Tu sección es: SO-03. Tu horario es: Sabatino");

		      }

		      // si hay algún error no efectuamos la acción submit del form
		    	if(hasError) {
		    	event.preventDefault();
		    }
		});