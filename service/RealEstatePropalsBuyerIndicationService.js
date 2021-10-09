"use strict";
var db= require('../utils/query');

const table = "real_estate_propals_buyer_indication";
/**
 * get all real-estate-propals-buyer-indication by pagination
 *
 *
 * where List column:value will use sql LIKE for search eg:id:67 will where id >67 eg2: name:eric => where name LIKE '%eric%' (optional)
 * fields String {$tableColumn},{$tableColumn}...  (optional)
 * order String eg: id desc, name desc (optional)
 * offset Integer sql offset eg: 10 (optional)
 * limit Integer limit returning object count (optional)
 * returns List
 **/
exports.real_estate_propals_buyer_indicationGET = function (
  where,
  fields,
  order,
  offset,
  limit
) {
    return db.list(table, where, fields, order, offset, limit);
};

/**
 * Destroy a real-estate-propals-buyer-indication by ID
 * delete a real-estate-propals-buyer-indication by ID
 *
 * id Long ID of real-estate-propals-buyer-indication to delete
 * returns ApiResponse
 **/
exports.real_estate_propals_buyer_indicationIdDELETE = function (id) {
    return db.deletebyId(table, id);
};

/**
 * get a real-estate-propals-buyer-indication by ID
 * get a real-estate-propals-buyer-indication by ID
 *
 * id Long ID of real-estate-propals-buyer-indication to return
 * returns RealEstatePropalsBuyerIndication
 **/
exports.real_estate_propals_buyer_indicationIdGET = function (id) {
  return db.getById(table, id)
};

/**
 * update real-estate-propals-buyer-indication
 * update real-estate-propals-buyer-indication
 *
 * body RealEstatePropalsBuyerIndication create real-estate-propals-buyer-indication
 * returns ApiResponse
 **/
exports.real_estate_propals_buyer_indicationPATCH = function (body) {
    return db.update(table, body);
};

/**
 * create real-estate-propals-buyer-indication
 * create real-estate-propals-buyer-indication
 *
 * body RealEstatePropalsBuyerIndication create real-estate-propals-buyer-indication
 * returns ApiResponse
 **/
exports.real_estate_propals_buyer_indicationPOST = function (body) {
 return db.create(table, body);
};
