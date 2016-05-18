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
    console.log(houses)
    for (var i = 0; i < houses.length; i++) {
      var house = houses[i];
      var marker = new google.maps.Marker({
        icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
        position: {lat: parseFloat(house.latitude), lng: parseFloat(house.longitude)},
        map: map,
        address: house.address,
        price: house.rental_price,
        rental_length: house.rental_length,
        user: house.UserId,
        avail: house.availability,
        id: house.id
      });
      if (marker.user == null) {
        marker.icon = 'http://maps.google.com/mapfiles/marker_grey.png'
      }

      marker.addListener('click', toggleBounce);
      marker.addListener('click', function() {
        infowindow.open(map, this);
        document.getElementById('address').innerHTML = ('<h2><small>Address: </small></h2>' + this.address)
        document.getElementById('price').innerHTML = ('<small>Rental price: </small>'+'$' + this.price + '.00')
        document.getElementById('rental_length').innerHTML = ('<small>Rental length: </small>'+ this.rental_length+' days')
        document.getElementById('avail').innerHTML = ('<small>Available before:  </small>'+ moment(this.avail).format('dddd MMMM Do'))
        document.getElementById('idbutt').href = ('/commuter/rent/' + this.id )
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
  var contentString = '<div id="infowin"><h2 id="price"></h2>' + '<h2 id="rental_length"></h2>' + '<h2 id="avail"></h2>'+ '<p id="address"></p>'+ '<a id="idbutt" href=""><button class="btn btn-default butt">Rent</button></a></div>';

  // marker.addListener('click', function(geocoder) {
      //   var geocoder = new google.maps.Geocoder;
      //   var latlng = {lat: this.position.lat(), lng: this.position.lng() }
      //   geocoder.geocode({'location': latlng}, function(results) {
      //     document.getElementById('address').innerHTML = results[1].formatted_address;
      //   })
      // });