// var maxima = Math.max(3,66,4,4,6,6,5)
// document.write(maxima);

// var lon, lat;


// function mostrar (pos) {
// 	document.write(pos.coords.latitude + "," + pos.coords.longitude);
// }

// GPS
// navigator.geolocation.getCurrentPosition(mostrar);

// var objeto = {
// 	nombre : "Pikachu",
// 	vida : 100,
// 	ataque	: 55  
// };

function Pokemom(nombrePokemom, vidaPoke, ataPoke)
{
	this.nombre = nombrePokemom;
	this.vida = vidaPoke;
	this.ataque = ataPoke;
}

//Pokemom.prototype = objeto;







function aleatorio (minimo, maximo) {
	var numero = Math.round(Math.random() * (maximo - minimo) + minimo )
	return numero;
}



function crear_array(n,m){
var a = [];
for (var i = 0; i < n; i++) {
	a[i] = [];
	for (var j = 0; j < m; j++) {
		a[i][j] = aleatorio(0,1);
	}
}
return a;
}

var matrix = crear_array(3,4);



function inicio (argument) {
	var Pikachu =  new Pokemom("Pikachu", 100, 60);
	nombrePokemon.innerText =Pikachu.nombre;


	datosdePrueba.innerHTML = "Su vida es : "+ Pikachu.vida +"<br>"+
							  "Su ataque es: " + Pikachu.ataque+ "<br>"+
							  "<img src = '"+Pikachu.nombre+".jpg'></img>";


}