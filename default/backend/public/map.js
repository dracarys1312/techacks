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
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }

  // Show the information for a store when its marker is clicked.
  map.data.addListener('click', (event) => {
    // const category = event.feature.getProperty('category');
    // const name = event.feature.getProperty('name');
    // const description = event.feature.getProperty('description');
    // const hours = event.feature.getProperty('hours');
    // const phone = event.feature.getProperty('phone');
    // const position = event.feature.getGeometry().get();
    // const content = `
    //   <h2>${name}</h2><p>${description}</p>
    //   <p><b>Open:</b> ${hours}<br/><b>Phone:</b> ${phone}</p>
    // `;

    const name = event.feature.getProperty("event_name");
    const time = event.feature.getProperty('event_time');
    const address = event.feature.getProperty('event_address');
    const organizer = event.feature.getProperty('event_organizer');
    const position = event.feature.getGeometry().get();
    const content = `
      <h2>${name}</h2><p>${time}</p>
      <p><b>Address:</b> ${address}<br/><b>Organizer:</b> ${organizer}</p>
    `;

    infoWindow.setContent(content);
    infoWindow.setPosition(position);
    infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
    infoWindow.open(map);
  });
}
