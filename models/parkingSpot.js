'use strict';

module.exports = function(sequelize, DataTypes) {
  var ParkingSpot = sequelize.define('ParkingSpot', {
    address: DataTypes.STRING,
    availability: DataTypes.DATE,
    rental_length: DataTypes.INTEGER,
    rental_price: DataTypes.INTEGER,
    latitude: DataTypes.DECIMAL,
    longitude: DataTypes.DECIMAL,
    start_time: DataTypes.STRING,
    end_time: DataTypes.STRING,
    is_rented: DataTypes.VIRTUAL
    }, {
    classMethods: {
      associate: function(models) {
        ParkingSpot.belongsTo(models.User);
        ParkingSpot.hasMany(models.Rental);
      }
    },
    getterMethods: {
      is_rented: function() {
        var found = false;
        this.getRentals().then(function(spots) {
    //      console.log(spots);
          for (var x = 0; x < spots.length; x++) {
            console.log("HEY", spots[x].id, spots[x].is_active);
            if (spots[x].is_active)
            {
              found = true;
              return true;
            }
          }
          found = false;
          return false;
        });

       return found;
      }
    }
  });
  return ParkingSpot;
};
