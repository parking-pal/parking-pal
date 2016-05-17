'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    var renters = queryInterface.bulkInsert('Rentals', [{
      UserId: 1,
      ParkingSpotId: 2,
      stripe_id: 1,
      createdAt: new Date(2016, 5, 9, 12, 24, 34),
      updatedAt: new Date(2016, 5, 9, 12, 24, 34)
    }, {
      // UserId: 2,
      // ParkingSpotId: 2,
      stripe_id: 2,
      createdAt: new Date(2016, 5, 11, 14, 24, 34),
      updatedAt: new Date(2016, 5, 11, 14, 24, 34)
    }, {
      UserId: 4,
      ParkingSpotId: 1,
      stripe_id: 0,
      createdAt: new Date(2016, 5, 10, 13, 24, 34),
      updatedAt: new Date(2016, 5, 10, 13, 24, 34)
    }], {});

    return renters;
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
