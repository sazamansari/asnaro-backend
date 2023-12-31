const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtb_products_mat_view', {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "商品ID"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "商品名"
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
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "カテゴリID"
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
      comment: "商品タイプID"
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
    rank: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ランク"
    },
    shop_rank: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "店舗ランク"
    },
    category_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "カテゴリ名"
    },
    parent_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "親カテゴリID"
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "階層"
    },
    category_rank: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ランク"
    },
    product_class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "商品規格ID"
    },
    classcategory_id1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "規格ID1"
    },
    classcategory_id2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "規格ID2"
    },
    product_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "商品コード"
    },
    advance_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "予約数"
    },
    stock: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "在庫数"
    },
    stock_unlimited: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      comment: "在庫無制限"
    },
    price01: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "通常価格"
    },
    price02: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "販売価格"
    },
    price02_const: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "販売価格"
    },
    batch_flag_discount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "割引バッチフラグ"
    },
    start_from_discount: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "期間割引開始日時"
    },
    end_to_discount: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "期間割引終了日時"
    },
    rate_discount: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "割引率"
    },
    value_discount: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "割引額"
    },
    discount_num1: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "割引番号1"
    },
    discount_price1: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "割引額1"
    },
    discount_num2: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "割引番号2"
    },
    discount_price2: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "割引額2"
    },
    discount_num3: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "割引番号3"
    },
    discount_price3: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      comment: "割引額3"
    }
  }, {
    sequelize,
    tableName: 'dtb_products_mat_view',
    timestamps: false,
    indexes: [
      {
        name: "dtb_products_mat_view_rank_index",
        using: "BTREE",
        fields: [
          { name: "rank" },
        ]
      },
      {
        name: "dtb_products_mat_view_shop_rank_index",
        using: "BTREE",
        fields: [
          { name: "shop_rank" },
        ]
      },
      {
        name: "dtb_products_mat_view_category_rank_index",
        using: "BTREE",
        fields: [
          { name: "category_rank" },
        ]
      },
      {
        name: "dtb_products_mat_view_price02_index",
        using: "BTREE",
        fields: [
          { name: "price02" },
        ]
      },
      {
        name: "dtb_products_mat_view_review_cnt_index",
        using: "BTREE",
        fields: [
          { name: "review_cnt" },
        ]
      },
      {
        name: "dtb_products_mat_view_sales_cnt_index",
        using: "BTREE",
        fields: [
          { name: "sales_cnt" },
        ]
      },
      {
        name: "dtb_products_mat_view_create_date_index",
        using: "BTREE",
        fields: [
          { name: "create_date" },
        ]
      },
      {
        name: "dtb_products_product_id_index",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "dtb_products_category_id_index",
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
    ]
  });
};
