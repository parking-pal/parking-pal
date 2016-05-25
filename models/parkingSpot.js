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
    is_rented: DataTypes.VIRTUAL,
    cancelled: DataTypes.BOOLEAN
    }, {
    classMethods: {
      associate: function(models) {
        ParkingSpot.belongsTo(models.User);
        ParkingSpot.hasMany(models.Rental);
      }
    },
    getterMethods: {
      is_weekly: function() { return this.rental_length == 1; }
    },
    instanceMethods: {
        toJSON: function(){
          var isActive = false;
          var values = this.get();
          if (values.Rentals) {
            values.Rentals.forEach(function(item) {
              if (item.is_active) {
                isActive = true;
              }

            });
            values.is_active = isActive;
          }
          return values;
        }
      }
    });

  return ParkingSpot;
  };
