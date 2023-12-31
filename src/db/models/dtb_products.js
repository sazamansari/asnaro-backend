const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_products', {
    product_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "商品ID"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "商品名"
    },
    short_name: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "省略名"
    },
    kitchen: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "キッチン名称"
    },
    deliv_fee: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "配送料"
    },
    sale_limit: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "セール制限"
    },
    sale_unlimited: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      comment: "セール無制限"
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ランク"
    },
    status: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 2,
      comment: "商品ステータス"
    },
    product_flag: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "商品状態フラグ"
    },
    point_rate: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "ポイント率"
    },
    comment1: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "コメント1"
    },
    comment2: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "コメント2"
    },
    comment3: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "コメント3"
    },
    comment4: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "コメント4"
    },
    comment5: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "コメント5"
    },
    comment6: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "コメント6"
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "備考"
    },
    file1: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ファイル1"
    },
    file2: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ファイル2"
    },
    file3: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ファイル3"
    },
    file4: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ファイル4"
    },
    file5: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ファイル5"
    },
    file6: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ファイル6"
    },
    main_list_comment: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "メイン一覧コメント"
    },
    main_list_image: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "メイン一覧画像"
    },
    main_comment: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "メインコメント"
    },
    main_image: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "メイン画像"
    },
    main_large_image: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "メイン拡大画像"
    },
    sub_title1: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "サブタイトル1"
    },
    sub_comment1: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "サブコメント1"
    },
    sub_image1: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "サブ画像1"
    },
    sub_large_image1: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "サブ拡大画像1"
    },
    sub_title2: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "サブタイトル2"
    },
    sub_comment2: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "サブコメント2"
    },
    sub_image2: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "サブ画像2"
    },
    sub_large_image2: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "サブ拡大画像2"
    },
    sub_title3: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "サブタイトル3"
    },
    sub_comment3: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "サブコメント3"
    },
    sub_image3: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "サブ画像3"
    },
    sub_large_image3: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "サブ拡大画像3"
    },
    sub_title4: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "サブタイトル4"
    },
    sub_comment4: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "サブコメント4"
    },
    sub_image4: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "サブ画像4"
    },
    sub_large_image4: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "サブ拡大画像4"
    },
    sub_title5: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "サブタイトル5"
    },
    sub_comment5: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "サブコメント5"
    },
    sub_image5: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "サブ画像5"
    },
    sub_large_image5: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "サブ拡大画像5"
    },
    sub_title6: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "サブタイトル6"
    },
    sub_comment6: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "サブコメント6"
    },
    sub_image6: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "サブ画像6"
    },
    sub_large_image6: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "サブ拡大画像6"
    },
    del_flg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "削除フラグ"
    },
    creator_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "作成者ID"
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
    deliv_date_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "配送可能日ID"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "店舗ID"
    },
    product_kbn: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "商品区分"
    },
    advancedorder: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "予約販売フラグ"
    },
    subscribe_type: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "定期購入フラグ"
    },
    from_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "販売開始日"
    },
    to_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "販売終了日"
    },
    product_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "商品タイプID (1=通常,2=ダウンロード商品)"
    },
    down_filename: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ダウンロード商品名"
    },
    down_realfilename: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ダウンロード商品名"
    },
    review_cnt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "レビュー数"
    },
    sales_cnt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "割引価格"
    },
    brand: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ブランド"
    },
    is_price_adjustable: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "金額調整 (0=不可,1=可能)"
    },
    is_tax_impose: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "課税区分 (0=非課税,1=課税,2=免税,3=対象外)"
    },
    tax_rule: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "消費税率ルール"
    },
    tax: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "税額"
    },
    downloadable_days: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "ダウンロード有効期限"
    },
    downloadable_days_unlimited: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "ダウンロード期限無制限"
    },
    pos_status: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 2,
      comment: "POSステータス"
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "部門"
    },
    recipe_text: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "レシピ機能-詳細テキスト"
    },
    recipe_allergen: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "レシピ機能-アレルゲン情報"
    },
    product_property1: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "商品属性1"
    },
    product_property2: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "商品属性2"
    },
    product_property3: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "商品属性3"
    },
    product_property4: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "商品属性4"
    },
    is_downloadable_after_purchase: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      comment: "購入完了後ダウンロード可否"
    },
    rank_exclusion_flg: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "ランク設定適用"
    }
  }, {
    sequelize,
    tableName: 'dtb_products',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "product_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "ix_name",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "ix_shop_id_update_date",
        using: "BTREE",
        fields: [
          { name: "shop_id" },
          { name: "update_date" },
        ]
      },
    ]
  });
};
