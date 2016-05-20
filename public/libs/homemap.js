var myMarker;
function initHomeMap() {
  map = new google.maps.Map(document.getElementById('homeMap'), {
    zoom: 15,
    center: {lat: 49.888, lng: -119.495},
    mapTypeId: google.maps.MapTypeId.HYBRID
  });
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  setMarkers(map, infowindow);
}

function setMarkers(map, infowindow) {
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

      marker.addListener('click', toggleBounce);
      marker.addListener('click', function() {
        infowindow.open(map, this);
        // if (this.user == null) {
        //   document.getElementById('butt').a = 'hi'
        // };
        document.getElementById('address').innerHTML = ('<h2><small>Address: </small></h2>' + this.address)
        document.getElementById('price').innerHTML = ('<small>Rental price: </small>'+'$' + this.price + '.00')
        if (this.rental_length == 1) {
          document.getElementById('rental_length').innerHTML = ('<small>Rental length: </small>'+ 'Weekly');
        } else {
          document.getElementById('rental_length').innerHTML = ('<small>Rental length: </small>'+ 'Monthly');
        }
        document.getElementById('avail').innerHTML = ('<small>Available:  </small>'+ moment(this.avail).format('dddd MMMM Do LT'))
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
  var contentString = 
     '<div id="infowin"><h2 id="price"></h2>'
   + '<h2 id="rental_length"></h2>' 
   + '<h2 id="avail"></h2>'
   + '<p id="address"></p></div>';

   var mark = 
   $("#addbutt").on("click", function() {
    $('.textinfo').text('Please drag marker onto your parking spot');
    $(this).css
    var geocoder = new google.maps.Geocoder();
    var address = $("#address").val();
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        map.setZoom(20);
        if (myMarker) {
          myMarker.setPosition(results[0].geometry.location);
        } else {
          myMarker = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            map: map,
            position: results[0].geometry.location,
            draggable: true,
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
          });
        };
        document.getElementById('latitude').value = (results[0].geometry.location.lat())
        document.getElementById('longitude').value = (results[0].geometry.location.lng())
      } else {
        alert("Please enter a valid address into the box")
      };
      google.maps.event.addListener(myMarker, 'dragend', function(evt){
        $('.textinfo').text("Please confirm your marker before submitting.")
        var coord = (evt.latLng.lat().toFixed(6) + evt.latLng.lng().toFixed(6));
        document.getElementById('latitude').value = (evt.latLng.lat());
        document.getElementById('longitude').value = (evt.latLng.lng());
        console.log("evt.latLng.lat()", evt.latLng.lat(), evt.latLng.lng());
      })
    });
  });
