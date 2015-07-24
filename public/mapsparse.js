$(document).ready(function() {
	google.maps.event.addDomListener(window, 'load', initialize);

	function initialize() {
  var myLatlng = new google.maps.LatLng(19.4313725,-99.1330237);
  var mapOptions = {
    zoom: 16,
    center: myLatlng
  }



 var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
google.maps.event.addDomListener(window, 'load', initialize);

	Parse.initialize("LDUjtHoZzgepi460STD39zOo2ah6i5SEPD8OsGpH", "b1ayhsBbaERGv2pp50iqXHmFUEpeQFyt7pXxLwYV");

	var Perdido = Parse.Object.extend("Perdidos");
	var query = new Parse.Query(Perdido);

	query.find({
  success: function(results) {
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) {
      var object = results[i];
		var lat = Number(object.get("latitud"));
		var lon = Number(object.get("longitud"));
		  var imagenFile = object.get('imagen');
			var imagenURL = imagenFile.url();

		 var latlng = new google.maps.LatLng(lat,lon);
		var nombre = object.get("nombre");
<<<<<<< Updated upstream:public/mapsparse.js

		var myinfowindow = new google.maps.InfoWindow({
			content: '<b>' + nombre + '</b> <img src = '+imagenURL+' width="200" height="200">'
=======
		var caract = object.get("caracteristicas");
		
		var myinfowindow = new google.maps.InfoWindow({
			content: '<b>' + nombre + '</b> <img src = '+imagenURL+' width="200" height="200"> </br><p>' + caract + '</p>'  
>>>>>>> Stashed changes:mapsparse.js
		});

		var marker = new google.maps.Marker({
                position: latlng,
                map: map,
			 infowindow: myinfowindow

              });
		google.maps.event.addListener(marker, 'click', function() {
    this.infowindow.open(map,this);
  });

    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});

	}

});
