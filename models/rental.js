'use strict';

module.exports = function(sequelize, DataTypes) {
  var Rental = sequelize.define('Rental', {
    stripe_id: DataTypes.INTEGER
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
