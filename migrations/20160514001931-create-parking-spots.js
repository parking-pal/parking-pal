'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('parking-spots', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      address: {
        type: Sequelize.STRING
      },
      availability: {
        type: Sequelize.DATE
      },      
      rental_length: {
        type: Sequelize.INTEGER
      },
      rental_price: {
        type: Sequelize.INTEGER
      },
      latitude: {
        type: Sequelize.DECIMAL
      },
      longitude: {
        type: Sequelize.DECIMAL
      },
      //foreign key usage
      fkey: {
          type: Sequelize.INTEGER,
          references: {
              model: 'Users',
              key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        }
      },
      {
        engine: 'MYISAM', // default: 'InnoDB'
        charset: 'latin1' // default: null
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
