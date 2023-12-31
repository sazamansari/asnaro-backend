const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_process', {
    process_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "工程ID"
    },
    process_counter: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "工程カウンター"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "工程名"
    },
    maker_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "メーカー名"
    },
    years_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "年式"
    },
    pref: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "都道府県"
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "市区町村"
    },
    capacity: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "能力"
    },
    equipment_size: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "設備サイズ"
    },
    process_explanation: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "工程説明"
    },
    delivery_date: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "納期の目安"
    },
    cost_price: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "原価"
    },
    hourly_price: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "時間単価"
    },
    unit_price: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "単価"
    },
    parent_category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "親カテゴリ"
    },
    children_category: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "子カテゴリ"
    },
    remarks_column: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "備考欄"
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "公開ステータス"
    },
    search_word: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "顧客ID"
    },
    image_path: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "画像パス"
    },
    review: {
      type: DataTypes.TINYINT,
      allowNull: true
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
      comment: "削除フラグ"
    }
  }, {
    sequelize,
    tableName: 'dtb_process',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "process_id" },
        ]
      },
      {
        name: "process_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "process_id" },
          { name: "customer_id" },
        ]
      },
    ]
  });
};
