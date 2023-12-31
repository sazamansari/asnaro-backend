const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_freee_info', {
    free_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "id"
    },
    secret_key: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "Freee secret key"
    },
    token: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "Freee token"
    },
    use_flg: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "in use flg"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "updated time"
    },
    expires_in: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "expiry time"
    }
  }, {
    sequelize,
    tableName: 'dtb_freee_info',
    timestamps: false
  });
};
