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
    end_time: DataTypes.STRING
    }, {
    classMethods: {
      associate: function(models) {
        ParkingSpot.belongsTo(models.User);
        ParkingSpot.hasMany(models.Rental);
      }
    }
  });
  return ParkingSpot;
};
