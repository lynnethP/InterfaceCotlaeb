
var cant_of_uno = 3;
var cant_of_dos = 6;
var cant_of_tres = 7;

document.getElementById("formulario").addEventListener("submit", function(event){
/*var seleccion = document.querySelector('input[name="turno"]:checked').value;*/
    		let hasError = false;

    		// obtenemos todos los input radio del grupo horario que esten chequeados
		    // si no hay ninguno lanzamos alerta
		    if(!document.querySelector('input[name="turno"]:checked')) {
		      alert('Por favor, selecciona el horario para poder inscribirte');
		      hasError = true;

		      } else if ((document.querySelector('input[name="turno"]:checked').value == "diurno" && cant_of_uno >= 10) || 
		      	(document.querySelector('input[name="turno"]:checked').value == "nocturno" && cant_of_dos >= 10) || 
		      	(document.querySelector('input[name="turno"]:checked').value == "sabatino" && cant_of_tres >= 10)) {

			      	alert("El curso no está disponible en este horario pues ya alcanzó su capacidad máxima, por favor selecciona otro horario");
			      	hasError = true;

		      }  else if (document.querySelector('input[name="turno"]:checked').value == "diurno" ) {

			      	alert("Gracias por inscribirte en nuestros cursos");
			      	alert("Tu docente es: Ing. Sol Hernández. Tu sección es: OF-01. Tu horario es: Diurno");


		      }else if (document.querySelector('input[name="turno"]:checked').value == "nocturno" ) {

			      	alert("Gracias por inscribirte en nuestros cursos");
			      	alert("Tu docente es: Ing. Francys Barreto. Tu sección es: OF-02. Tu horario es: Nocturno");
		      }else if (document.querySelector('input[name="turno"]:checked').value == "sabatino" ) {

			      	alert("Gracias por inscribirte en nuestros cursos");
			      	alert("Tu docente es: Prof. Carlos Moreno. Tu sección es: OF-03. Tu horario es: Sabatino");

		      }

		      // si hay algún error no efectuamos la acción submit del form
		    	if(hasError) {
		    	event.preventDefault();
		    }
		});
