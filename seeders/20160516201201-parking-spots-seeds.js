'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    var parkingSpots = queryInterface.bulkInsert('ParkingSpots', [{
      address: '1352 Richter St, Kelowna, BC',
      availability: new Date(2016, 5, 15, 12, 0, 0),
      rental_length: 1,
      rental_price: 5,
      latitude: 49.890265,
      longitude: -119.488792,
      start_time: '8:00AM',
      end_time: '5:00PM',
      UserId: 1,
      createdAt: new Date(2016, 5, 10, 12, 24, 34),
      updatedAt: new Date(2016, 5, 10, 12, 24, 34)
    }, {
      address: '740 Lawson Ave, Kelowna, BC',
      availability: new Date(2016, 5, 16, 12, 0, 0),
      rental_length: 2,
      rental_price: 6,
      latitude: 49.887493,
      longitude: -119.487376,
      start_time: '8:30AM',
      end_time: '5:30PM',
      UserId: 3,
      createdAt: new Date(2016, 5, 11, 14, 34, 14),
      updatedAt: new Date(2016, 5, 11, 14, 34, 14)
    }, {
      address: '743 Stockwell Ave, Kelowna, BC',
      availability: new Date(2016, 5, 13, 12, 0, 0),
      rental_length: 1,
      rental_price: 7,
      latitude: 49.889150,
      longitude: -119.487186,
      start_time: '7:45AM',
      end_time: '4:45PM',
      UserId: 2,
      createdAt: new Date(2016, 5, 12, 9, 45, 11),
      updatedAt: new Date(2016, 5, 12, 9, 45, 11)
    },
    ], {});

    return parkingSpots;
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ParkingSpots', null, {});
  }
};
