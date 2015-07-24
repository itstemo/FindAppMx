
var map;
function initialize() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: {lat: 19.4313725, lng: -99.1330237}
  });
	
	var marker = new google.maps.Marker({
      position: {lat: 19.4313725, lng: -99.1330237},
      map: map,
		draggable:true,
  });
	
	google.maps.event.addListener(marker, 'dragend', function (event) {
    document.getElementById("latbox").value = event.latLng.lat();
    document.getElementById("lngbox").value = event.latLng.lng();
	});
}

google.maps.event.addDomListener(window, 'load', initialize);