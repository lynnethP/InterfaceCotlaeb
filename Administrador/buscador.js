bars_search = document.getElementById('busqueda');
cover_busqueda = document.getElementById('cover_busqueda');
inputSearch = document.getElementById('inputSearch');
box_search = document.getElementById('box_search');



document.getElementById('icon_search').addEventListener("click", mostrar_buscador);
document.getElementById('cover_busqueda').addEventListener("click", ocultar_buscador);
document.getElementById('inputSearch').addEventListener("keyup", buscador_interno);


function mostrar_buscador(){
	bars_search.style.display = "block";
	cover_busqueda.style.display = "block";
	inputSearch.focus();
}

function ocultar_buscador(){
	bars_search.style.display = "none";
	cover_busqueda.style.display = "none";
	inputSearch.value = "";
	box_search.style.display = "none";
}



function buscador_interno() {
	filtro = inputSearch.value.toUpperCase();
	li = box_search.getElementsByTagName('li');

	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName('a')[0];
		textValue = a.textContent || a.innerText;

		if (textValue.toUpperCase().indexOf(filtro) > -1){
			li[i].style.display = "";	//quita el display none a los elementos que coincidan con la busqueda
			box_search.style.display = "block";
			

			if (inputSearch.value == "") {
				box_search.style.display = "none";

			}
		}
		else{
			li[i].style.display = "none";
		}

	}


}
	