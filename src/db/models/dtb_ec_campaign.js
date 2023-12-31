const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_ec_campaign', {
    ec_campaign_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "キャペーンID"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "キャンペーン名"
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "ギフトコード"
    },
    condition: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "特典付与条件"
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "特典タイプ"
    },
    target_object_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "特典対象ID"
    },
    value_type: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "付与・割引"
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "付与・割引値"
    },
    target_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "特典対象者"
    },
    target_value: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "特典対象者人数"
    },
    apply_value: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "適用済人数(新規作成時:0)"
    },
    term_from: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "適用期間FROM"
    },
    term_to: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "適用期間TO"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "更新日時"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "作成日時"
    },
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "削除フラグ"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'dtb_ec_campaign',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ec_campaign_id" },
        ]
      },
    ]
  });
};
