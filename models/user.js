'use strict';

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    // instanceMethods: {
    //   encryptPassword: function(plainTextPassword, cb) {
    //     return bcrypt.hash(password, 10, function(err, hash) {
    //       if(err) cb(err);
    //       return cb(null, hash);
    //     });
    //   },
    //   decryptPassword: function(plainTextPassword, cb) {
    //     bcrypt.compare(plainTextPassword, this.password, function(err) {
    //       if(err) return cb(err);
    //       return cb();
    //     });
    //   }
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Rental);
        User.hasMany(models.ParkingSpot);
      }
    }
  });

  return User;
};
