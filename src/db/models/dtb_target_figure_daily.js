const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_target_figure_daily', {
    target_figure_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'dtb_target_figure',
        key: 'target_figure_id'
      }
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    target_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    target_figure: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    create_datetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    update_datetime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'dtb_target_figure_daily',
    timestamps: false,
    indexes: [
      {
        name: "shop_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "shop_id" },
          { name: "target_date" },
        ]
      },
      {
        name: "target_date",
        using: "BTREE",
        fields: [
          { name: "shop_id" },
          { name: "target_date" },
        ]
      },
      {
        name: "target_figure_id",
        using: "BTREE",
        fields: [
          { name: "target_figure_id" },
        ]
      },
    ]
  });
};
