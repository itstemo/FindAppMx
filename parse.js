

$(document).ready(function() {
	Parse.initialize("LDUjtHoZzgepi460STD39zOo2ah6i5SEPD8OsGpH", "b1ayhsBbaERGv2pp50iqXHmFUEpeQFyt7pXxLwYV");

	var PerdiObject = Parse.Object.extend("Perdidos");

		
	$("#submitPerdi").on("submit", function(e) {
		e.preventDefault();

		console.log("Handling the submit");
		//add error handling here
		//gather the form data

		var data = {};
		data.nombre = $("#nombre").val();
		data.lugar = $("#lugar").val();
		data.caracteristicas = $("#caracteristicas").val();
	
		var fileUploadControl = $("#filebutton")[0];
		var file = fileUploadControl.files[0];
		var name = "photo.jpg";
		var parseFile = new Parse.File(name, file);
		
		data.imagen = parseFile;
		
		var perdido = new PerdiObject;
		perdido.save(data, {
			success:function() {
				console.log("Success");
				//Alerts are lame - but quick and easy
				alert("Alerta enviada! Haremos lo posible por ayudarlo.");
			},
			error:function(e) {
				console.dir(e);
			}
		});

	});
	
});