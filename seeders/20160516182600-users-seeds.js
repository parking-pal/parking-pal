'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('Users', [
      {
        first_name: 'Johnny',
        last_name: 'Doe II',
        email: 'johnny@doe.com',
        phone: '(250) 123-4568',
        createdAt: new Date(),
        updatedAt: new Date()
      },      {
        first_name: 'Bob',
        last_name: 'Doe III',
        email: 'johnnyX@doe.com',
        phone: '(250) 123-4569',
        createdAt: new Date(),
        updatedAt: new Date()
      },      {
        first_name: 'Doug',
        last_name: 'Doe IV',
        email: 'johnnyXXX@doe.com',
        phone: '(250) 123-4560',
        createdAt: new Date(),
        updatedAt: new Date()
      },


      ], {});
    /*
    return queryInterface.bulkInsert('links', [
            {type: 1, cost: 2, delivery_period: 5, carrier_id: 1, loc_begin: 1, loc_end: 2, id_item: 1, created_at: new Date(), updated_at: new Date()},
            {type: 1, cost: 2, delivery_period: 5, carrier_id: 2, loc_begin: 3, loc_end: 4, id_item: 2, created_at: new Date(), updated_at: new Date()},
            {type: 1, cost: 2, delivery_period: 5, carrier_id: 3, loc_begin: 5, loc_end: 6, id_item: 3, created_at: new Date(), updated_at: new Date()},
            {type: 1, cost: 2, delivery_period: 5, carrier_id: 4, loc_begin: 7, loc_end: 8, id_item: 4, created_at: new Date(), updated_at: new Date()},
        ], {});
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
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
