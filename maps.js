
var markers = [];


function updateImage(latLang) {
   var baseUrl = "http://maps.google.com/maps/api/staticmap?center"+latLang+"&zoom=13&size=500x300&sensor=TRUE_OR_FALSE";
//				  http://maps.google.com/maps/api/staticmap?center=37.400470,-122.072981&zoom=13&size=500x300&sensor=TRUE_OR_FALSE
}

function load() {
  if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map"));
    map.setCenter(new GLatLng(23.6260333,-102.4768146), 4);
    map.addMapType(G_PHYSICAL_MAP);
    map.addControl(new GSmallMapControl());
    map.addControl(new GMapTypeControl());
    geocoder = new GClientGeocoder();
    //updateImage(latlng);
  }
}


function showAddress() {
  var address = document.getElementById("addressTEXT").value;
  geocoder.getLatLng( address,
    function(latlng) {
      if (!latlng) {
        alert(address + " not found");
      } else {
        map.setCenter(latlng, 13);
        createMarkerAt(latlng, address);
		alert(latlng);
        //updateImage(latlng);
		
      }
    }
  );
}


function createMarkerAt(latlng, address) {
  var marker = new GMarker(latlng, {draggable:true, title: address});
  GEvent.addListener(marker, 'dragend', function() {
    //updateImage();
  });
  map.addOverlay(marker);
  markers.push(marker);
}

