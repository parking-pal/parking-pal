function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: 49.888, lng: -119.495},
    mapTypeId: google.maps.MapTypeId.HYBRID
  });
  setMarkers(map);
  infowindow = new google.maps.InfoWindow({
    content: contentString
  });
}
var houses = [
  [49.887, -119.499],
  [49.886, -119.498],
  [49.889,-119.497],
  [49.885, -119.496],
  [49.884, -119.496]
];

function setMarkers(map) {
  for (var i = 0; i < houses.length; i++) {
    var house = houses[i];
    var marker = new google.maps.Marker({
      position: {lat: house[0], lng: house[1]},
      map: map,
    });
    marker.addListener('click', toggleBounce);
    marker.addListener('click', function() {
      infowindow.open(map, this);
    });
    marker.addListener('click', function(geocoder) {
    var geocoder = new google.maps.Geocoder;
      var latlng = {lat: this.position.lat(), lng: this.position.lng() }
      geocoder.geocode({'location': latlng}, function(results) {
        document.getElementById('address').innerHTML = results[1].formatted_address;
      })
    });
  }
  function toggleBounce() {
    var self = this;
    self.setAnimation(google.maps.Animation.BOUNCE)
    setTimeout(function() {
      self.setAnimation(null);
    }, 2150);
  }
}
var contentString = '<div id="infowin"><h2>Address</h2>' + '<hr style="max-width: 50%">' + '<p id="address"></p>'+ '<button class="btn btn-default">Rent</button></div>';
