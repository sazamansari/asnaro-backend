const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_process_review', {
    review_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "レビューID"
    },
    process_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "工程ID"
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "受発注ID"
    },
    review: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "評価"
    },
    review_comment: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "レビューコメント"
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
    tableName: 'dtb_process_review',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "review_id" },
        ]
      },
    ]
  });
};
