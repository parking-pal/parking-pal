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
$.getJSON("/api/parkingSpot", function(houses) {
  for (var i = 0; i < houses.length; i++) {
    var house = houses[i];
    if (!house.cancelled) {
      var marker = new google.maps.Marker({
        icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
        position: {lat: parseFloat(house.latitude), lng: parseFloat(house.longitude)},
        map: map,
        address: house.address,
        price: house.rental_price,
        rental_length: house.rental_length,
        user: house.UserId,
        avail: house.availability,
        id: house.id,
        act: house.is_active,
        cancelled: house.cancelled
      });
      console.log("!!#!", marker);
      if (marker.act) {
        marker.icon = 'http://maps.google.com/mapfiles/marker_grey.png'
      }

      marker.addListener('click', toggleBounce);
      marker.addListener('click', function() {
          infowindow.open(map, this);
          document.getElementById('address').innerHTML = ('<h4><small>Address: </small></h4>' + this.address);
          document.getElementById('price').innerHTML = ('<small>Rental price: </small>'+'$' + this.price + '.00' +'/day');
          if (this.rental_length == 1) {
            document.getElementById('rental_length').innerHTML = ('<small>Rental length: </small>'+ 'Weekly');
          } else {
            document.getElementById('rental_length').innerHTML = ('<small>Rental length: </small>'+ 'Monthly');
          }
          document.getElementById('avail').innerHTML = ('<small>Available:  </small>'+ moment(this.avail).format('ddd MMM Do, YYYY'))
            console.log("@@@", marker.act);
    //    console.log("!!!3", this.act);
          if (!this.act)
          {
            console.log("&&&", this.act);
            document.getElementById('idbutt').href = ('/commuter/rent/' + this.id );
            document.getElementById('idbutt').style.visibility = "visible";
          }
          else
          {
            document.getElementById('idbutt').style.visibility = "hidden";
          }
        });
      };
      function toggleBounce() {
        var self = this;
        self.setAnimation(google.maps.Animation.BOUNCE)
        setTimeout(function() {
          self.setAnimation(null);
        }, 2150);
      }
    }
    });
  };
  var contentString = '<div id="infowin"><h4 id="price"></h4>' + '<h4 id="rental_length"></h4>' + '<h4 id="avail"></h4>'+ '<h4 id="address"></h4>'+ '<a id="idbutt" href=""><button class="btn btn-default butt" id="butt">Rent</button></a></div>';