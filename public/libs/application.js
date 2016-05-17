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



function setMarkers(map) {
  var $ = jQuery;
  $.getJSON("/api/parkingSpot", function(houses) {
    for (var i = 0; i < houses.length; i++) {
      var house = houses[i];
      var marker = new google.maps.Marker({
        position: {lat: parseFloat(house.latitude), lng: parseFloat(house.longitude)},
        map: map,
        address: house.address
      });
      marker.addListener('click', toggleBounce);
      marker.addListener('click', function() {
        infowindow.open(map, this);
        document.getElementById('address').innerHTML = this.address
      });
    }
    function toggleBounce() {
      var self = this;
      self.setAnimation(google.maps.Animation.BOUNCE)
      setTimeout(function() {
        self.setAnimation(null);
      }, 2150);
    }
  });
};
  var contentString = '<div id="infowin"><h2>Address</h2>' + '<hr>' + '<p id="address"></p>'+ '<button class="btn btn-default butt">Rent</button></div>';

  // marker.addListener('click', function(geocoder) {
      //   var geocoder = new google.maps.Geocoder;
      //   var latlng = {lat: this.position.lat(), lng: this.position.lng() }
      //   geocoder.geocode({'location': latlng}, function(results) {
      //     document.getElementById('address').innerHTML = results[1].formatted_address;
      //   })
      // });