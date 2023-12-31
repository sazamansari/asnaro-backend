const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_delivzip', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "ID"
    },
    deliv_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "配送業者ID"
    },
    zipcode: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "郵便番号"
    },
    fee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "配送料"
    },
    deliverable_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "配送可不可フラグ"
    },
    enable_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "有効無効フラグ"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "作成日時"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "更新日時"
    },
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "削除フラグ"
    }
  }, {
    sequelize,
    tableName: 'dtb_delivzip',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "deliv_id_and_zipcode_index",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "deliv_id" },
          { name: "zipcode" },
        ]
      },
    ]
  });
};
