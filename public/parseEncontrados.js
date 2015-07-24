
$(document).ready(function() {
	Parse.initialize("LDUjtHoZzgepi460STD39zOo2ah6i5SEPD8OsGpH", "b1ayhsBbaERGv2pp50iqXHmFUEpeQFyt7pXxLwYV");

	var EncontreObject = Parse.Object.extend("Encontrados");

		
	$("#submitPerdi").on("submit", function(e) {
		var tipo = "";
		var genero = "";
		if($("#animal").is(':checked')){
			tipo = "Mascota";
		} else {
			tipo = "Persona";
		}
		e.preventDefault();
		
		if($("#femenino").is(':checked')){
			genero= "Femenino";
		} else {
			genero = "Masculino";
		}
		e.preventDefault();


		var data = {};
		data.longitud =$("#lngbox").val();
		data.latitud =$("#latbox").val();
		data.nombre = $("#nombre").val();
		data.lugar = $("#lugar").val();
		data.caracteristicas = $("#caracteristicas").val();
		data.tipo = tipo;
		data.genero = genero;
	
		var fileUploadControl = $("#filebutton")[0];
		var file = fileUploadControl.files[0];
		var name = "photo.jpg";
		var parseFile = new Parse.File(name, file);
		
		data.imagen = parseFile;
		
		var encontrado = new EncontreObject;
		encontrado.save(data, {
			success:function() {
				console.log("Success");
				alert("Alerta enviada! Haremos lo posible por ayudarlo.");
			},
			error:function(e) {
				console.dir(e);
			}
		});

	});
	
});