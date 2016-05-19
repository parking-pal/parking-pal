'use strict';

module.exports = function(sequelize, DataTypes) {
  var Rental = sequelize.define('Rental', {
    is_active: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        Rental.belongsTo(models.User);
        Rental.belongsTo(models.ParkingSpot);
      }
    }
  });
  return Rental;
};
