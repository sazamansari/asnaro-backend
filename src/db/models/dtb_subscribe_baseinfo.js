const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_subscribe_baseinfo', {
    subscribe_baseinfo_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "定期購入基本設定ID"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    },
    auto_continue: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "自動更新の有無"
    },
    auto_continue_mail: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "自動継続通知メール（X日前送信）"
    },
    cancel_onoff_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "顧客キャンセル表示フラグ"
    },
    cancel_limit: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "顧客キャンセル期限（X>日前まで）"
    },
    use_point_origin: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "ポイント利用フラグ(初回にポイント適用可能か)"
    },
    auto_insert_timing: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "受注レコード自動生成タイミング（次回発送予定日のX日前）"
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
    tableName: 'dtb_subscribe_baseinfo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "subscribe_baseinfo_id" },
        ]
      },
    ]
  });
};
