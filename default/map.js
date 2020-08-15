function initMap() {
  // Create the map.
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: 52.632469, lng: -1.689423},
  });

  // Load the stores GeoJSON onto the map.
  map.data.loadGeoJson('stores.json', {idPropertyName: 'storeid'});

  const apiKey = 'YOUR_API_KEY';
  const infoWindow = new google.maps.InfoWindow();

  // Show the information for a store when its marker is clicked.
  map.data.addListener('click', (event) => {
    const category = event.feature.getProperty('category');
    const name = event.feature.getProperty('name');
    const description = event.feature.getProperty('description');
    const hours = event.feature.getProperty('hours');
    const phone = event.feature.getProperty('phone');
    const position = event.feature.getGeometry().get();
    const content = `
      <h2>${name}</h2><p>${description}</p>
      <p><b>Open:</b> ${hours}<br/><b>Phone:</b> ${phone}</p>
    `;

    infoWindow.setContent(content);
    infoWindow.setPosition(position);
    infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
    infoWindow.open(map);
  });
}

//add new marker based on address provided in the form
var geocoder;
function initGeocoder(){
	geocoder = new google.maps.Geocoder();
}
function codeAddress() {
	var address = document.getElementById('location').value;
	
	geocoder.geocode( { 'address': address}, function(results, status) {

	if (status == 'OK') {
		map.setCenter(results[0].geometry.location);
		var marker = new google.maps.Marker({
			map: map,
			position: results[0].geometry.location
		});
	} else {
		alert('Geocode was not successful for the following reason: ' + status);
	}
	});
}
