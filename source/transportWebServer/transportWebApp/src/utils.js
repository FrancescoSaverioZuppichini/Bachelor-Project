export default {
  getCurrentPosition() {
    const position = null
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(function(position) {
        resolve(position);
      });
    });
  },
  // https://developers.google.com/maps/documentation/javascript/directions

  showMap(coords, station) {
    var result = Object.assign({}, station.googleMaps)
    console.log(result);
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();

    const origin = coords.latitude + ',' + coords.longitude
    var destination = 'bus station lugano' + station.name.toLowerCase()
    const travelMode = 'WALKING'
    // const destination = '46.011574,8.9574'
    // const destination = 'bus lugano universita'
    const request = {
      origin,
      destination,
      travelMode
    }

    directionsService.route(request, (result, status) => {
      var here = new google.maps.LatLng(...coords);
      var map = new google.maps.Map(document.getElementById(station.id + 'map'), {
        zoom: 13,
        center: {
          lat: coords.latitude,
          lng: coords.longitude
        }
      })
      var marker = new google.maps.Marker({
        position: {
          lat: coords.latitude,
          lng: coords.longitude
        },
        map: map
      });
      directionsDisplay.setMap(map);
      directionsDisplay.setDirections(result);
    });
  }
}
