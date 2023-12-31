var DataTypes = require("sequelize").DataTypes;
var _dtb_analysis_setting = require("./dtb_analysis_setting");
var _dtb_area = require("./dtb_area");
var _dtb_area_shop = require("./dtb_area_shop");
var _dtb_authority_member = require("./dtb_authority_member");
var _dtb_authority_role = require("./dtb_authority_role");
var _dtb_authority_transitional = require("./dtb_authority_transitional");
var _dtb_auto_message = require("./dtb_auto_message");
var _dtb_availability = require("./dtb_availability");
var _dtb_baseinfo = require("./dtb_baseinfo");
var _dtb_bat_abc = require("./dtb_bat_abc");
var _dtb_bat_cpm = require("./dtb_bat_cpm");
var _dtb_bat_order_daily = require("./dtb_bat_order_daily");
var _dtb_bat_order_daily_age = require("./dtb_bat_order_daily_age");
var _dtb_bat_order_daily_hour = require("./dtb_bat_order_daily_hour");
var _dtb_bat_relate_products = require("./dtb_bat_relate_products");
var _dtb_bat_rfm = require("./dtb_bat_rfm");
var _dtb_bat_shop_charge_monthly = require("./dtb_bat_shop_charge_monthly");
var _dtb_best_products = require("./dtb_best_products");
var _dtb_bkup = require("./dtb_bkup");
var _dtb_blacklist = require("./dtb_blacklist");
var _dtb_bloc = require("./dtb_bloc");
var _dtb_blocposition = require("./dtb_blocposition");
var _dtb_brand = require("./dtb_brand");
var _dtb_bundle = require("./dtb_bundle");
var _dtb_bundle_products = require("./dtb_bundle_products");
var _dtb_cacco_setting = require("./dtb_cacco_setting");
var _dtb_campaign_order = require("./dtb_campaign_order");
var _dtb_category = require("./dtb_category");
var _dtb_category_count = require("./dtb_category_count");
var _dtb_category_total_count = require("./dtb_category_total_count");
var _dtb_checksheet = require("./dtb_checksheet");
var _dtb_class = require("./dtb_class");
var _dtb_classcategory = require("./dtb_classcategory");
var _dtb_classified = require("./dtb_classified");
var _dtb_classified_config = require("./dtb_classified_config");
var _dtb_contact = require("./dtb_contact");
var _dtb_contact_reply = require("./dtb_contact_reply");
var _dtb_corporation = require("./dtb_corporation");
var _dtb_corporation_favorite_products = require("./dtb_corporation_favorite_products");
var _dtb_coupon = require("./dtb_coupon");
var _dtb_couponcode = require("./dtb_couponcode");
var _dtb_cron = require("./dtb_cron");
var _dtb_csv = require("./dtb_csv");
var _dtb_csv_sql = require("./dtb_csv_sql");
var _dtb_customer = require("./dtb_customer");
var _dtb_customer_check = require("./dtb_customer_check");
var _dtb_customer_corporation = require("./dtb_customer_corporation");
var _dtb_customer_coupon = require("./dtb_customer_coupon");
var _dtb_customer_couponcode = require("./dtb_customer_couponcode");
var _dtb_customer_delivfree = require("./dtb_customer_delivfree");
var _dtb_customer_demo = require("./dtb_customer_demo");
var _dtb_customer_favorite_products = require("./dtb_customer_favorite_products");
var _dtb_customer_invitation_mail = require("./dtb_customer_invitation_mail");
var _dtb_customer_invitation_mail_point_rule = require("./dtb_customer_invitation_mail_point_rule");
var _dtb_customer_invitation_mail_relation = require("./dtb_customer_invitation_mail_relation");
var _dtb_customer_mail_temp = require("./dtb_customer_mail_temp");
var _dtb_customer_reading = require("./dtb_customer_reading");
var _dtb_customer_share = require("./dtb_customer_share");
var _dtb_default_usage = require("./dtb_default_usage");
var _dtb_deliv = require("./dtb_deliv");
var _dtb_delivfee = require("./dtb_delivfee");
var _dtb_delivtime = require("./dtb_delivtime");
var _dtb_delivzip = require("./dtb_delivzip");
var _dtb_ec_campaign = require("./dtb_ec_campaign");
var _dtb_ec_campaign_target = require("./dtb_ec_campaign_target");
var _dtb_ec_campaign_target_customer = require("./dtb_ec_campaign_target_customer");
var _dtb_estimate = require("./dtb_estimate");
var _dtb_estimate_config = require("./dtb_estimate_config");
var _dtb_estimate_detail = require("./dtb_estimate_detail");
var _dtb_estimate_process = require("./dtb_estimate_process");
var _dtb_form_management = require("./dtb_form_management");
var _dtb_freee_info = require("./dtb_freee_info");
var _dtb_gateway_history = require("./dtb_gateway_history");
var _dtb_gift = require("./dtb_gift");
var _dtb_gift_list = require("./dtb_gift_list");
var _dtb_group = require("./dtb_group");
var _dtb_grouped_products_class = require("./dtb_grouped_products_class");
var _dtb_grouped_products_noclass = require("./dtb_grouped_products_noclass");
var _dtb_holiday = require("./dtb_holiday");
var _dtb_included = require("./dtb_included");
var _dtb_invalid_authority = require("./dtb_invalid_authority");
var _dtb_ios_push_notification_token = require("./dtb_ios_push_notification_token");
var _dtb_kiyaku = require("./dtb_kiyaku");
var _dtb_limit_amount = require("./dtb_limit_amount");
var _dtb_mail_history = require("./dtb_mail_history");
var _dtb_mailmaga_customer = require("./dtb_mailmaga_customer");
var _dtb_mailmaga_template = require("./dtb_mailmaga_template");
var _dtb_mailtemplate = require("./dtb_mailtemplate");
var _dtb_maker = require("./dtb_maker");
var _dtb_maker_count = require("./dtb_maker_count");
var _dtb_mdl_smbc_order = require("./dtb_mdl_smbc_order");
var _dtb_member = require("./dtb_member");
var _dtb_mobile_bloc = require("./dtb_mobile_bloc");
var _dtb_mobile_blocposition = require("./dtb_mobile_blocposition");
var _dtb_mobile_ext_session_id = require("./dtb_mobile_ext_session_id");
var _dtb_mobile_kara_mail = require("./dtb_mobile_kara_mail");
var _dtb_mobile_pagelayout = require("./dtb_mobile_pagelayout");
var _dtb_module = require("./dtb_module");
var _dtb_module_update_logs = require("./dtb_module_update_logs");
var _dtb_news = require("./dtb_news");
var _dtb_operation_log = require("./dtb_operation_log");
var _dtb_option = require("./dtb_option");
var _dtb_option_config = require("./dtb_option_config");
var _dtb_option_list_config = require("./dtb_option_list_config");
var _dtb_order = require("./dtb_order");
var _dtb_order_bulletinboard = require("./dtb_order_bulletinboard");
var _dtb_order_cacco = require("./dtb_order_cacco");
var _dtb_order_detail = require("./dtb_order_detail");
var _dtb_order_discount = require("./dtb_order_discount");
var _dtb_order_ec_campaign = require("./dtb_order_ec_campaign");
var _dtb_order_history = require("./dtb_order_history");
var _dtb_order_included = require("./dtb_order_included");
var _dtb_order_information = require("./dtb_order_information");
var _dtb_order_payment = require("./dtb_order_payment");
var _dtb_order_pos_info = require("./dtb_order_pos_info");
var _dtb_order_product_gift = require("./dtb_order_product_gift");
var _dtb_order_return = require("./dtb_order_return");
var _dtb_order_return_detail = require("./dtb_order_return_detail");
var _dtb_order_sequence = require("./dtb_order_sequence");
var _dtb_order_temp = require("./dtb_order_temp");
var _dtb_order_volume_config = require("./dtb_order_volume_config");
var _dtb_order_volume_config_corporation = require("./dtb_order_volume_config_corporation");
var _dtb_other_config = require("./dtb_other_config");
var _dtb_other_deliv = require("./dtb_other_deliv");
var _dtb_other_expense = require("./dtb_other_expense");
var _dtb_pagelayout = require("./dtb_pagelayout");
var _dtb_parent_order_sequence = require("./dtb_parent_order_sequence");
var _dtb_payment = require("./dtb_payment");
var _dtb_payment_setting = require("./dtb_payment_setting");
var _dtb_point_history = require("./dtb_point_history");
var _dtb_present = require("./dtb_present");
var _dtb_process = require("./dtb_process");
var _dtb_process_review = require("./dtb_process_review");
var _dtb_product_categories = require("./dtb_product_categories");
var _dtb_product_gift = require("./dtb_product_gift");
var _dtb_product_packaged = require("./dtb_product_packaged");
var _dtb_products = require("./dtb_products");
var _dtb_products_class = require("./dtb_products_class");
var _dtb_products_mat_view = require("./dtb_products_mat_view");
var _dtb_purchase_order = require("./dtb_purchase_order");
var _dtb_question = require("./dtb_question");
var _dtb_question_result = require("./dtb_question_result");
var _dtb_rank_config = require("./dtb_rank_config");
var _dtb_rank_config_corporation = require("./dtb_rank_config_corporation");
var _dtb_ranking_products = require("./dtb_ranking_products");
var _dtb_recommend_products = require("./dtb_recommend_products");
var _dtb_refund_invoice = require("./dtb_refund_invoice");
var _dtb_refund_invoice_detail = require("./dtb_refund_invoice_detail");
var _dtb_review = require("./dtb_review");
var _dtb_role = require("./dtb_role");
var _dtb_sales = require("./dtb_sales");
var _dtb_search_cols = require("./dtb_search_cols");
var _dtb_search_condition = require("./dtb_search_condition");
var _dtb_send_customer = require("./dtb_send_customer");
var _dtb_send_history = require("./dtb_send_history");
var _dtb_session = require("./dtb_session");
var _dtb_session_adodb = require("./dtb_session_adodb");
var _dtb_set_product = require("./dtb_set_product");
var _dtb_set_product_products = require("./dtb_set_product_products");
var _dtb_settlement = require("./dtb_settlement");
var _dtb_shipment_item = require("./dtb_shipment_item");
var _dtb_shipping = require("./dtb_shipping");
var _dtb_shop = require("./dtb_shop");
var _dtb_shop_charge_setting = require("./dtb_shop_charge_setting");
var _dtb_snva = require("./dtb_snva");
var _dtb_snva_detail = require("./dtb_snva_detail");
var _dtb_social = require("./dtb_social");
var _dtb_stock_mail = require("./dtb_stock_mail");
var _dtb_stock_mail_flg = require("./dtb_stock_mail_flg");
var _dtb_store = require("./dtb_store");
var _dtb_subscribe_baseinfo = require("./dtb_subscribe_baseinfo");
var _dtb_subscribe_order = require("./dtb_subscribe_order");
var _dtb_subscribe_order_detail = require("./dtb_subscribe_order_detail");
var _dtb_subscribe_order_seaquence = require("./dtb_subscribe_order_seaquence");
var _dtb_table_comment = require("./dtb_table_comment");
var _dtb_tagword = require("./dtb_tagword");
var _dtb_tagword_config = require("./dtb_tagword_config");
var _dtb_target_figure = require("./dtb_target_figure");
var _dtb_target_figure_daily = require("./dtb_target_figure_daily");
var _dtb_tax = require("./dtb_tax");
var _dtb_templates = require("./dtb_templates");
var _dtb_time_sale = require("./dtb_time_sale");
var _dtb_time_sale_brand = require("./dtb_time_sale_brand");
var _dtb_time_sale_category = require("./dtb_time_sale_category");
var _dtb_update = require("./dtb_update");
var _dtb_usage = require("./dtb_usage");
var _dtb_user_regist = require("./dtb_user_regist");
var _mtb_allowed_tag = require("./mtb_allowed_tag");
var _mtb_authority = require("./mtb_authority");
var _mtb_authority_note = require("./mtb_authority_note");
var _mtb_availability_status = require("./mtb_availability_status");
var _mtb_barcode_type = require("./mtb_barcode_type");
var _mtb_class = require("./mtb_class");
var _mtb_constants = require("./mtb_constants");
var _mtb_contact_status = require("./mtb_contact_status");
var _mtb_conveni_message = require("./mtb_conveni_message");
var _mtb_convenience = require("./mtb_convenience");
var _mtb_corporation_status = require("./mtb_corporation_status");
var _mtb_crank = require("./mtb_crank");
var _mtb_crank_corporation = require("./mtb_crank_corporation");
var _mtb_credit = require("./mtb_credit");
var _mtb_cron_command = require("./mtb_cron_command");
var _mtb_csv_column = require("./mtb_csv_column");
var _mtb_db = require("./mtb_db");
var _mtb_deliv_free_flg = require("./mtb_deliv_free_flg");
var _mtb_delivery_date = require("./mtb_delivery_date");
var _mtb_delivery_type = require("./mtb_delivery_type");
var _mtb_disable_logout = require("./mtb_disable_logout");
var _mtb_discount_kbn = require("./mtb_discount_kbn");
var _mtb_disp = require("./mtb_disp");
var _mtb_estimate_status = require("./mtb_estimate_status");
var _mtb_form_management = require("./mtb_form_management");
var _mtb_gateway_status = require("./mtb_gateway_status");
var _mtb_image_flg = require("./mtb_image_flg");
var _mtb_job = require("./mtb_job");
var _mtb_magazine_type = require("./mtb_magazine_type");
var _mtb_mail_magazine_type = require("./mtb_mail_magazine_type");
var _mtb_mail_template = require("./mtb_mail_template");
var _mtb_mail_tpl_path = require("./mtb_mail_tpl_path");
var _mtb_mail_type = require("./mtb_mail_type");
var _mtb_mobile_domain = require("./mtb_mobile_domain");
var _mtb_order_information = require("./mtb_order_information");
var _mtb_order_status = require("./mtb_order_status");
var _mtb_order_status_color = require("./mtb_order_status_color");
var _mtb_page_max = require("./mtb_page_max");
var _mtb_page_rows = require("./mtb_page_rows");
var _mtb_permission = require("./mtb_permission");
var _mtb_point_status = require("./mtb_point_status");
var _mtb_pref = require("./mtb_pref");
var _mtb_product_list_max = require("./mtb_product_list_max");
var _mtb_product_list_sort = require("./mtb_product_list_sort");
var _mtb_product_splist_max = require("./mtb_product_splist_max");
var _mtb_product_status_color = require("./mtb_product_status_color");
var _mtb_product_type = require("./mtb_product_type");
var _mtb_quantity_kbn = require("./mtb_quantity_kbn");
var _mtb_recommend = require("./mtb_recommend");
var _mtb_reminder = require("./mtb_reminder");
var _mtb_review_deny_url = require("./mtb_review_deny_url");
var _mtb_security_authority = require("./mtb_security_authority");
var _mtb_sex = require("./mtb_sex");
var _mtb_shipping_status = require("./mtb_shipping_status");
var _mtb_snva_detail = require("./mtb_snva_detail");
var _mtb_social = require("./mtb_social");
var _mtb_social_login = require("./mtb_social_login");
var _mtb_srank = require("./mtb_srank");
var _mtb_status = require("./mtb_status");
var _mtb_status_image = require("./mtb_status_image");
var _mtb_subscribe_type = require("./mtb_subscribe_type");
var _mtb_target = require("./mtb_target");
var _mtb_tax_rate = require("./mtb_tax_rate");
var _mtb_taxrule = require("./mtb_taxrule");
var _mtb_usage_rate = require("./mtb_usage_rate");
var _mtb_wday = require("./mtb_wday");
var _mtb_work = require("./mtb_work");
var _mtb_zip = require("./mtb_zip");
var _tbl_migration = require("./tbl_migration");

function initModels(sequelize) {
  var dtb_analysis_setting = _dtb_analysis_setting(sequelize, DataTypes);
  var dtb_area = _dtb_area(sequelize, DataTypes);
  var dtb_area_shop = _dtb_area_shop(sequelize, DataTypes);
  var dtb_authority_member = _dtb_authority_member(sequelize, DataTypes);
  var dtb_authority_role = _dtb_authority_role(sequelize, DataTypes);
  var dtb_authority_transitional = _dtb_authority_transitional(sequelize, DataTypes);
  var dtb_auto_message = _dtb_auto_message(sequelize, DataTypes);
  var dtb_availability = _dtb_availability(sequelize, DataTypes);
  var dtb_baseinfo = _dtb_baseinfo(sequelize, DataTypes);
  var dtb_bat_abc = _dtb_bat_abc(sequelize, DataTypes);
  var dtb_bat_cpm = _dtb_bat_cpm(sequelize, DataTypes);
  var dtb_bat_order_daily = _dtb_bat_order_daily(sequelize, DataTypes);
  var dtb_bat_order_daily_age = _dtb_bat_order_daily_age(sequelize, DataTypes);
  var dtb_bat_order_daily_hour = _dtb_bat_order_daily_hour(sequelize, DataTypes);
  var dtb_bat_relate_products = _dtb_bat_relate_products(sequelize, DataTypes);
  var dtb_bat_rfm = _dtb_bat_rfm(sequelize, DataTypes);
  var dtb_bat_shop_charge_monthly = _dtb_bat_shop_charge_monthly(sequelize, DataTypes);
  var dtb_best_products = _dtb_best_products(sequelize, DataTypes);
  var dtb_bkup = _dtb_bkup(sequelize, DataTypes);
  var dtb_blacklist = _dtb_blacklist(sequelize, DataTypes);
  var dtb_bloc = _dtb_bloc(sequelize, DataTypes);
  var dtb_blocposition = _dtb_blocposition(sequelize, DataTypes);
  var dtb_brand = _dtb_brand(sequelize, DataTypes);
  var dtb_bundle = _dtb_bundle(sequelize, DataTypes);
  var dtb_bundle_products = _dtb_bundle_products(sequelize, DataTypes);
  var dtb_cacco_setting = _dtb_cacco_setting(sequelize, DataTypes);
  var dtb_campaign_order = _dtb_campaign_order(sequelize, DataTypes);
  var dtb_category = _dtb_category(sequelize, DataTypes);
  var dtb_category_count = _dtb_category_count(sequelize, DataTypes);
  var dtb_category_total_count = _dtb_category_total_count(sequelize, DataTypes);
  var dtb_checksheet = _dtb_checksheet(sequelize, DataTypes);
  var dtb_class = _dtb_class(sequelize, DataTypes);
  var dtb_classcategory = _dtb_classcategory(sequelize, DataTypes);
  var dtb_classified = _dtb_classified(sequelize, DataTypes);
  var dtb_classified_config = _dtb_classified_config(sequelize, DataTypes);
  var dtb_contact = _dtb_contact(sequelize, DataTypes);
  var dtb_contact_reply = _dtb_contact_reply(sequelize, DataTypes);
  var dtb_corporation = _dtb_corporation(sequelize, DataTypes);
  var dtb_corporation_favorite_products = _dtb_corporation_favorite_products(sequelize, DataTypes);
  var dtb_coupon = _dtb_coupon(sequelize, DataTypes);
  var dtb_couponcode = _dtb_couponcode(sequelize, DataTypes);
  var dtb_cron = _dtb_cron(sequelize, DataTypes);
  var dtb_csv = _dtb_csv(sequelize, DataTypes);
  var dtb_csv_sql = _dtb_csv_sql(sequelize, DataTypes);
  var dtb_customer = _dtb_customer(sequelize, DataTypes);
  var dtb_customer_check = _dtb_customer_check(sequelize, DataTypes);
  var dtb_customer_corporation = _dtb_customer_corporation(sequelize, DataTypes);
  var dtb_customer_coupon = _dtb_customer_coupon(sequelize, DataTypes);
  var dtb_customer_couponcode = _dtb_customer_couponcode(sequelize, DataTypes);
  var dtb_customer_delivfree = _dtb_customer_delivfree(sequelize, DataTypes);
  var dtb_customer_demo = _dtb_customer_demo(sequelize, DataTypes);
  var dtb_customer_favorite_products = _dtb_customer_favorite_products(sequelize, DataTypes);
  var dtb_customer_invitation_mail = _dtb_customer_invitation_mail(sequelize, DataTypes);
  var dtb_customer_invitation_mail_point_rule = _dtb_customer_invitation_mail_point_rule(sequelize, DataTypes);
  var dtb_customer_invitation_mail_relation = _dtb_customer_invitation_mail_relation(sequelize, DataTypes);
  var dtb_customer_mail_temp = _dtb_customer_mail_temp(sequelize, DataTypes);
  var dtb_customer_reading = _dtb_customer_reading(sequelize, DataTypes);
  var dtb_customer_share = _dtb_customer_share(sequelize, DataTypes);
  var dtb_default_usage = _dtb_default_usage(sequelize, DataTypes);
  var dtb_deliv = _dtb_deliv(sequelize, DataTypes);
  var dtb_delivfee = _dtb_delivfee(sequelize, DataTypes);
  var dtb_delivtime = _dtb_delivtime(sequelize, DataTypes);
  var dtb_delivzip = _dtb_delivzip(sequelize, DataTypes);
  var dtb_ec_campaign = _dtb_ec_campaign(sequelize, DataTypes);
  var dtb_ec_campaign_target = _dtb_ec_campaign_target(sequelize, DataTypes);
  var dtb_ec_campaign_target_customer = _dtb_ec_campaign_target_customer(sequelize, DataTypes);
  var dtb_estimate = _dtb_estimate(sequelize, DataTypes);
  var dtb_estimate_config = _dtb_estimate_config(sequelize, DataTypes);
  var dtb_estimate_detail = _dtb_estimate_detail(sequelize, DataTypes);
  var dtb_estimate_process = _dtb_estimate_process(sequelize, DataTypes);
  var dtb_form_management = _dtb_form_management(sequelize, DataTypes);
  var dtb_freee_info = _dtb_freee_info(sequelize, DataTypes);
  var dtb_gateway_history = _dtb_gateway_history(sequelize, DataTypes);
  var dtb_gift = _dtb_gift(sequelize, DataTypes);
  var dtb_gift_list = _dtb_gift_list(sequelize, DataTypes);
  var dtb_group = _dtb_group(sequelize, DataTypes);
  var dtb_grouped_products_class = _dtb_grouped_products_class(sequelize, DataTypes);
  var dtb_grouped_products_noclass = _dtb_grouped_products_noclass(sequelize, DataTypes);
  var dtb_holiday = _dtb_holiday(sequelize, DataTypes);
  var dtb_included = _dtb_included(sequelize, DataTypes);
  var dtb_invalid_authority = _dtb_invalid_authority(sequelize, DataTypes);
  var dtb_ios_push_notification_token = _dtb_ios_push_notification_token(sequelize, DataTypes);
  var dtb_kiyaku = _dtb_kiyaku(sequelize, DataTypes);
  var dtb_limit_amount = _dtb_limit_amount(sequelize, DataTypes);
  var dtb_mail_history = _dtb_mail_history(sequelize, DataTypes);
  var dtb_mailmaga_customer = _dtb_mailmaga_customer(sequelize, DataTypes);
  var dtb_mailmaga_template = _dtb_mailmaga_template(sequelize, DataTypes);
  var dtb_mailtemplate = _dtb_mailtemplate(sequelize, DataTypes);
  var dtb_maker = _dtb_maker(sequelize, DataTypes);
  var dtb_maker_count = _dtb_maker_count(sequelize, DataTypes);
  var dtb_mdl_smbc_order = _dtb_mdl_smbc_order(sequelize, DataTypes);
  var dtb_member = _dtb_member(sequelize, DataTypes);
  var dtb_mobile_bloc = _dtb_mobile_bloc(sequelize, DataTypes);
  var dtb_mobile_blocposition = _dtb_mobile_blocposition(sequelize, DataTypes);
  var dtb_mobile_ext_session_id = _dtb_mobile_ext_session_id(sequelize, DataTypes);
  var dtb_mobile_kara_mail = _dtb_mobile_kara_mail(sequelize, DataTypes);
  var dtb_mobile_pagelayout = _dtb_mobile_pagelayout(sequelize, DataTypes);
  var dtb_module = _dtb_module(sequelize, DataTypes);
  var dtb_module_update_logs = _dtb_module_update_logs(sequelize, DataTypes);
  var dtb_news = _dtb_news(sequelize, DataTypes);
  var dtb_operation_log = _dtb_operation_log(sequelize, DataTypes);
  var dtb_option = _dtb_option(sequelize, DataTypes);
  var dtb_option_config = _dtb_option_config(sequelize, DataTypes);
  var dtb_option_list_config = _dtb_option_list_config(sequelize, DataTypes);
  var dtb_order = _dtb_order(sequelize, DataTypes);
  var dtb_order_bulletinboard = _dtb_order_bulletinboard(sequelize, DataTypes);
  var dtb_order_cacco = _dtb_order_cacco(sequelize, DataTypes);
  var dtb_order_detail = _dtb_order_detail(sequelize, DataTypes);
  var dtb_order_discount = _dtb_order_discount(sequelize, DataTypes);
  var dtb_order_ec_campaign = _dtb_order_ec_campaign(sequelize, DataTypes);
  var dtb_order_history = _dtb_order_history(sequelize, DataTypes);
  var dtb_order_included = _dtb_order_included(sequelize, DataTypes);
  var dtb_order_information = _dtb_order_information(sequelize, DataTypes);
  var dtb_order_payment = _dtb_order_payment(sequelize, DataTypes);
  var dtb_order_pos_info = _dtb_order_pos_info(sequelize, DataTypes);
  var dtb_order_product_gift = _dtb_order_product_gift(sequelize, DataTypes);
  var dtb_order_return = _dtb_order_return(sequelize, DataTypes);
  var dtb_order_return_detail = _dtb_order_return_detail(sequelize, DataTypes);
  var dtb_order_sequence = _dtb_order_sequence(sequelize, DataTypes);
  var dtb_order_temp = _dtb_order_temp(sequelize, DataTypes);
  var dtb_order_volume_config = _dtb_order_volume_config(sequelize, DataTypes);
  var dtb_order_volume_config_corporation = _dtb_order_volume_config_corporation(sequelize, DataTypes);
  var dtb_other_config = _dtb_other_config(sequelize, DataTypes);
  var dtb_other_deliv = _dtb_other_deliv(sequelize, DataTypes);
  var dtb_other_expense = _dtb_other_expense(sequelize, DataTypes);
  var dtb_pagelayout = _dtb_pagelayout(sequelize, DataTypes);
  var dtb_parent_order_sequence = _dtb_parent_order_sequence(sequelize, DataTypes);
  var dtb_payment = _dtb_payment(sequelize, DataTypes);
  var dtb_payment_setting = _dtb_payment_setting(sequelize, DataTypes);
  var dtb_point_history = _dtb_point_history(sequelize, DataTypes);
  var dtb_present = _dtb_present(sequelize, DataTypes);
  var dtb_process = _dtb_process(sequelize, DataTypes);
  var dtb_process_review = _dtb_process_review(sequelize, DataTypes);
  var dtb_product_categories = _dtb_product_categories(sequelize, DataTypes);
  var dtb_product_gift = _dtb_product_gift(sequelize, DataTypes);
  var dtb_product_packaged = _dtb_product_packaged(sequelize, DataTypes);
  var dtb_products = _dtb_products(sequelize, DataTypes);
  var dtb_products_class = _dtb_products_class(sequelize, DataTypes);
  var dtb_products_mat_view = _dtb_products_mat_view(sequelize, DataTypes);
  var dtb_purchase_order = _dtb_purchase_order(sequelize, DataTypes);
  var dtb_question = _dtb_question(sequelize, DataTypes);
  var dtb_question_result = _dtb_question_result(sequelize, DataTypes);
  var dtb_rank_config = _dtb_rank_config(sequelize, DataTypes);
  var dtb_rank_config_corporation = _dtb_rank_config_corporation(sequelize, DataTypes);
  var dtb_ranking_products = _dtb_ranking_products(sequelize, DataTypes);
  var dtb_recommend_products = _dtb_recommend_products(sequelize, DataTypes);
  var dtb_refund_invoice = _dtb_refund_invoice(sequelize, DataTypes);
  var dtb_refund_invoice_detail = _dtb_refund_invoice_detail(sequelize, DataTypes);
  var dtb_review = _dtb_review(sequelize, DataTypes);
  var dtb_role = _dtb_role(sequelize, DataTypes);
  var dtb_sales = _dtb_sales(sequelize, DataTypes);
  var dtb_search_cols = _dtb_search_cols(sequelize, DataTypes);
  var dtb_search_condition = _dtb_search_condition(sequelize, DataTypes);
  var dtb_send_customer = _dtb_send_customer(sequelize, DataTypes);
  var dtb_send_history = _dtb_send_history(sequelize, DataTypes);
  var dtb_session = _dtb_session(sequelize, DataTypes);
  var dtb_session_adodb = _dtb_session_adodb(sequelize, DataTypes);
  var dtb_set_product = _dtb_set_product(sequelize, DataTypes);
  var dtb_set_product_products = _dtb_set_product_products(sequelize, DataTypes);
  var dtb_settlement = _dtb_settlement(sequelize, DataTypes);
  var dtb_shipment_item = _dtb_shipment_item(sequelize, DataTypes);
  var dtb_shipping = _dtb_shipping(sequelize, DataTypes);
  var dtb_shop = _dtb_shop(sequelize, DataTypes);
  var dtb_shop_charge_setting = _dtb_shop_charge_setting(sequelize, DataTypes);
  var dtb_snva = _dtb_snva(sequelize, DataTypes);
  var dtb_snva_detail = _dtb_snva_detail(sequelize, DataTypes);
  var dtb_social = _dtb_social(sequelize, DataTypes);
  var dtb_stock_mail = _dtb_stock_mail(sequelize, DataTypes);
  var dtb_stock_mail_flg = _dtb_stock_mail_flg(sequelize, DataTypes);
  var dtb_store = _dtb_store(sequelize, DataTypes);
  var dtb_subscribe_baseinfo = _dtb_subscribe_baseinfo(sequelize, DataTypes);
  var dtb_subscribe_order = _dtb_subscribe_order(sequelize, DataTypes);
  var dtb_subscribe_order_detail = _dtb_subscribe_order_detail(sequelize, DataTypes);
  var dtb_subscribe_order_seaquence = _dtb_subscribe_order_seaquence(sequelize, DataTypes);
  var dtb_table_comment = _dtb_table_comment(sequelize, DataTypes);
  var dtb_tagword = _dtb_tagword(sequelize, DataTypes);
  var dtb_tagword_config = _dtb_tagword_config(sequelize, DataTypes);
  var dtb_target_figure = _dtb_target_figure(sequelize, DataTypes);
  var dtb_target_figure_daily = _dtb_target_figure_daily(sequelize, DataTypes);
  var dtb_tax = _dtb_tax(sequelize, DataTypes);
  var dtb_templates = _dtb_templates(sequelize, DataTypes);
  var dtb_time_sale = _dtb_time_sale(sequelize, DataTypes);
  var dtb_time_sale_brand = _dtb_time_sale_brand(sequelize, DataTypes);
  var dtb_time_sale_category = _dtb_time_sale_category(sequelize, DataTypes);
  var dtb_update = _dtb_update(sequelize, DataTypes);
  var dtb_usage = _dtb_usage(sequelize, DataTypes);
  var dtb_user_regist = _dtb_user_regist(sequelize, DataTypes);
  var mtb_allowed_tag = _mtb_allowed_tag(sequelize, DataTypes);
  var mtb_authority = _mtb_authority(sequelize, DataTypes);
  var mtb_authority_note = _mtb_authority_note(sequelize, DataTypes);
  var mtb_availability_status = _mtb_availability_status(sequelize, DataTypes);
  var mtb_barcode_type = _mtb_barcode_type(sequelize, DataTypes);
  var mtb_class = _mtb_class(sequelize, DataTypes);
  var mtb_constants = _mtb_constants(sequelize, DataTypes);
  var mtb_contact_status = _mtb_contact_status(sequelize, DataTypes);
  var mtb_conveni_message = _mtb_conveni_message(sequelize, DataTypes);
  var mtb_convenience = _mtb_convenience(sequelize, DataTypes);
  var mtb_corporation_status = _mtb_corporation_status(sequelize, DataTypes);
  var mtb_crank = _mtb_crank(sequelize, DataTypes);
  var mtb_crank_corporation = _mtb_crank_corporation(sequelize, DataTypes);
  var mtb_credit = _mtb_credit(sequelize, DataTypes);
  var mtb_cron_command = _mtb_cron_command(sequelize, DataTypes);
  var mtb_csv_column = _mtb_csv_column(sequelize, DataTypes);
  var mtb_db = _mtb_db(sequelize, DataTypes);
  var mtb_deliv_free_flg = _mtb_deliv_free_flg(sequelize, DataTypes);
  var mtb_delivery_date = _mtb_delivery_date(sequelize, DataTypes);
  var mtb_delivery_type = _mtb_delivery_type(sequelize, DataTypes);
  var mtb_disable_logout = _mtb_disable_logout(sequelize, DataTypes);
  var mtb_discount_kbn = _mtb_discount_kbn(sequelize, DataTypes);
  var mtb_disp = _mtb_disp(sequelize, DataTypes);
  var mtb_estimate_status = _mtb_estimate_status(sequelize, DataTypes);
  var mtb_form_management = _mtb_form_management(sequelize, DataTypes);
  var mtb_gateway_status = _mtb_gateway_status(sequelize, DataTypes);
  var mtb_image_flg = _mtb_image_flg(sequelize, DataTypes);
  var mtb_job = _mtb_job(sequelize, DataTypes);
  var mtb_magazine_type = _mtb_magazine_type(sequelize, DataTypes);
  var mtb_mail_magazine_type = _mtb_mail_magazine_type(sequelize, DataTypes);
  var mtb_mail_template = _mtb_mail_template(sequelize, DataTypes);
  var mtb_mail_tpl_path = _mtb_mail_tpl_path(sequelize, DataTypes);
  var mtb_mail_type = _mtb_mail_type(sequelize, DataTypes);
  var mtb_mobile_domain = _mtb_mobile_domain(sequelize, DataTypes);
  var mtb_order_information = _mtb_order_information(sequelize, DataTypes);
  var mtb_order_status = _mtb_order_status(sequelize, DataTypes);
  var mtb_order_status_color = _mtb_order_status_color(sequelize, DataTypes);
  var mtb_page_max = _mtb_page_max(sequelize, DataTypes);
  var mtb_page_rows = _mtb_page_rows(sequelize, DataTypes);
  var mtb_permission = _mtb_permission(sequelize, DataTypes);
  var mtb_point_status = _mtb_point_status(sequelize, DataTypes);
  var mtb_pref = _mtb_pref(sequelize, DataTypes);
  var mtb_product_list_max = _mtb_product_list_max(sequelize, DataTypes);
  var mtb_product_list_sort = _mtb_product_list_sort(sequelize, DataTypes);
  var mtb_product_splist_max = _mtb_product_splist_max(sequelize, DataTypes);
  var mtb_product_status_color = _mtb_product_status_color(sequelize, DataTypes);
  var mtb_product_type = _mtb_product_type(sequelize, DataTypes);
  var mtb_quantity_kbn = _mtb_quantity_kbn(sequelize, DataTypes);
  var mtb_recommend = _mtb_recommend(sequelize, DataTypes);
  var mtb_reminder = _mtb_reminder(sequelize, DataTypes);
  var mtb_review_deny_url = _mtb_review_deny_url(sequelize, DataTypes);
  var mtb_security_authority = _mtb_security_authority(sequelize, DataTypes);
  var mtb_sex = _mtb_sex(sequelize, DataTypes);
  var mtb_shipping_status = _mtb_shipping_status(sequelize, DataTypes);
  var mtb_snva_detail = _mtb_snva_detail(sequelize, DataTypes);
  var mtb_social = _mtb_social(sequelize, DataTypes);
  var mtb_social_login = _mtb_social_login(sequelize, DataTypes);
  var mtb_srank = _mtb_srank(sequelize, DataTypes);
  var mtb_status = _mtb_status(sequelize, DataTypes);
  var mtb_status_image = _mtb_status_image(sequelize, DataTypes);
  var mtb_subscribe_type = _mtb_subscribe_type(sequelize, DataTypes);
  var mtb_target = _mtb_target(sequelize, DataTypes);
  var mtb_tax_rate = _mtb_tax_rate(sequelize, DataTypes);
  var mtb_taxrule = _mtb_taxrule(sequelize, DataTypes);
  var mtb_usage_rate = _mtb_usage_rate(sequelize, DataTypes);
  var mtb_wday = _mtb_wday(sequelize, DataTypes);
  var mtb_work = _mtb_work(sequelize, DataTypes);
  var mtb_zip = _mtb_zip(sequelize, DataTypes);
  var tbl_migration = _tbl_migration(sequelize, DataTypes);

  dtb_target_figure_daily.belongsTo(dtb_target_figure, { as: "target_figure", foreignKey: "target_figure_id"});
  dtb_target_figure.hasMany(dtb_target_figure_daily, { as: "dtb_target_figure_dailies", foreignKey: "target_figure_id"});

  return {
    dtb_analysis_setting,
    dtb_area,
    dtb_area_shop,
    dtb_authority_member,
    dtb_authority_role,
    dtb_authority_transitional,
    dtb_auto_message,
    dtb_availability,
    dtb_baseinfo,
    dtb_bat_abc,
    dtb_bat_cpm,
    dtb_bat_order_daily,
    dtb_bat_order_daily_age,
    dtb_bat_order_daily_hour,
    dtb_bat_relate_products,
    dtb_bat_rfm,
    dtb_bat_shop_charge_monthly,
    dtb_best_products,
    dtb_bkup,
    dtb_blacklist,
    dtb_bloc,
    dtb_blocposition,
    dtb_brand,
    dtb_bundle,
    dtb_bundle_products,
    dtb_cacco_setting,
    dtb_campaign_order,
    dtb_category,
    dtb_category_count,
    dtb_category_total_count,
    dtb_checksheet,
    dtb_class,
    dtb_classcategory,
    dtb_classified,
    dtb_classified_config,
    dtb_contact,
    dtb_contact_reply,
    dtb_corporation,
    dtb_corporation_favorite_products,
    dtb_coupon,
    dtb_couponcode,
    dtb_cron,
    dtb_csv,
    dtb_csv_sql,
    dtb_customer,
    dtb_customer_check,
    dtb_customer_corporation,
    dtb_customer_coupon,
    dtb_customer_couponcode,
    dtb_customer_delivfree,
    dtb_customer_demo,
    dtb_customer_favorite_products,
    dtb_customer_invitation_mail,
    dtb_customer_invitation_mail_point_rule,
    dtb_customer_invitation_mail_relation,
    dtb_customer_mail_temp,
    dtb_customer_reading,
    dtb_customer_share,
    dtb_default_usage,
    dtb_deliv,
    dtb_delivfee,
    dtb_delivtime,
    dtb_delivzip,
    dtb_ec_campaign,
    dtb_ec_campaign_target,
    dtb_ec_campaign_target_customer,
    dtb_estimate,
    dtb_estimate_config,
    dtb_estimate_detail,
    dtb_estimate_process,
    dtb_form_management,
    dtb_freee_info,
    dtb_gateway_history,
    dtb_gift,
    dtb_gift_list,
    dtb_group,
    dtb_grouped_products_class,
    dtb_grouped_products_noclass,
    dtb_holiday,
    dtb_included,
    dtb_invalid_authority,
    dtb_ios_push_notification_token,
    dtb_kiyaku,
    dtb_limit_amount,
    dtb_mail_history,
    dtb_mailmaga_customer,
    dtb_mailmaga_template,
    dtb_mailtemplate,
    dtb_maker,
    dtb_maker_count,
    dtb_mdl_smbc_order,
    dtb_member,
    dtb_mobile_bloc,
    dtb_mobile_blocposition,
    dtb_mobile_ext_session_id,
    dtb_mobile_kara_mail,
    dtb_mobile_pagelayout,
    dtb_module,
    dtb_module_update_logs,
    dtb_news,
    dtb_operation_log,
    dtb_option,
    dtb_option_config,
    dtb_option_list_config,
    dtb_order,
    dtb_order_bulletinboard,
    dtb_order_cacco,
    dtb_order_detail,
    dtb_order_discount,
    dtb_order_ec_campaign,
    dtb_order_history,
    dtb_order_included,
    dtb_order_information,
    dtb_order_payment,
    dtb_order_pos_info,
    dtb_order_product_gift,
    dtb_order_return,
    dtb_order_return_detail,
    dtb_order_sequence,
    dtb_order_temp,
    dtb_order_volume_config,
    dtb_order_volume_config_corporation,
    dtb_other_config,
    dtb_other_deliv,
    dtb_other_expense,
    dtb_pagelayout,
    dtb_parent_order_sequence,
    dtb_payment,
    dtb_payment_setting,
    dtb_point_history,
    dtb_present,
    dtb_process,
    dtb_process_review,
    dtb_product_categories,
    dtb_product_gift,
    dtb_product_packaged,
    dtb_products,
    dtb_products_class,
    dtb_products_mat_view,
    dtb_purchase_order,
    dtb_question,
    dtb_question_result,
    dtb_rank_config,
    dtb_rank_config_corporation,
    dtb_ranking_products,
    dtb_recommend_products,
    dtb_refund_invoice,
    dtb_refund_invoice_detail,
    dtb_review,
    dtb_role,
    dtb_sales,
    dtb_search_cols,
    dtb_search_condition,
    dtb_send_customer,
    dtb_send_history,
    dtb_session,
    dtb_session_adodb,
    dtb_set_product,
    dtb_set_product_products,
    dtb_settlement,
    dtb_shipment_item,
    dtb_shipping,
    dtb_shop,
    dtb_shop_charge_setting,
    dtb_snva,
    dtb_snva_detail,
    dtb_social,
    dtb_stock_mail,
    dtb_stock_mail_flg,
    dtb_store,
    dtb_subscribe_baseinfo,
    dtb_subscribe_order,
    dtb_subscribe_order_detail,
    dtb_subscribe_order_seaquence,
    dtb_table_comment,
    dtb_tagword,
    dtb_tagword_config,
    dtb_target_figure,
    dtb_target_figure_daily,
    dtb_tax,
    dtb_templates,
    dtb_time_sale,
    dtb_time_sale_brand,
    dtb_time_sale_category,
    dtb_update,
    dtb_usage,
    dtb_user_regist,
    mtb_allowed_tag,
    mtb_authority,
    mtb_authority_note,
    mtb_availability_status,
    mtb_barcode_type,
    mtb_class,
    mtb_constants,
    mtb_contact_status,
    mtb_conveni_message,
    mtb_convenience,
    mtb_corporation_status,
    mtb_crank,
    mtb_crank_corporation,
    mtb_credit,
    mtb_cron_command,
    mtb_csv_column,
    mtb_db,
    mtb_deliv_free_flg,
    mtb_delivery_date,
    mtb_delivery_type,
    mtb_disable_logout,
    mtb_discount_kbn,
    mtb_disp,
    mtb_estimate_status,
    mtb_form_management,
    mtb_gateway_status,
    mtb_image_flg,
    mtb_job,
    mtb_magazine_type,
    mtb_mail_magazine_type,
    mtb_mail_template,
    mtb_mail_tpl_path,
    mtb_mail_type,
    mtb_mobile_domain,
    mtb_order_information,
    mtb_order_status,
    mtb_order_status_color,
    mtb_page_max,
    mtb_page_rows,
    mtb_permission,
    mtb_point_status,
    mtb_pref,
    mtb_product_list_max,
    mtb_product_list_sort,
    mtb_product_splist_max,
    mtb_product_status_color,
    mtb_product_type,
    mtb_quantity_kbn,
    mtb_recommend,
    mtb_reminder,
    mtb_review_deny_url,
    mtb_security_authority,
    mtb_sex,
    mtb_shipping_status,
    mtb_snva_detail,
    mtb_social,
    mtb_social_login,
    mtb_srank,
    mtb_status,
    mtb_status_image,
    mtb_subscribe_type,
    mtb_target,
    mtb_tax_rate,
    mtb_taxrule,
    mtb_usage_rate,
    mtb_wday,
    mtb_work,
    mtb_zip,
    tbl_migration,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
