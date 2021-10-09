"use strict";
var db= require('../utils/query');
const table = "real_estate_visits";
/**
 * get all real-estate-visit by pagination
 *
 *
 * where List column:value will use sql LIKE for search eg:id:67 will where id >67 eg2: name:eric => where name LIKE '%eric%' (optional)
 * fields String {$tableColumn},{$tableColumn}...  (optional)
 * order String eg: id desc, name desc (optional)
 * offset Integer sql offset eg: 10 (optional)
 * limit Integer limit returning object count (optional)
 * returns List
 **/
exports.real_estate_visitGET = function (where, fields, order, offset, limit) {
    return db.list(table, where, fields, order, offset, limit);
};

/**
 * Destroy a real-estate-visit by ID
 * delete a real-estate-visit by ID
 *
 * id Long ID of real-estate-visit to delete
 * returns ApiResponse
 **/
exports.real_estate_visitIdDELETE = function (id) {
    return db.deletebyId(table, id);
};

/**
 * get a real-estate-visit by ID
 * get a real-estate-visit by ID
 *
 * id Long ID of real-estate-visit to return
 * returns RealEstateVisit
 **/
exports.real_estate_visitIdGET = function (id) {
  return db.getById(table, id)
};

/**
 * update real-estate-visit
 * update real-estate-visit
 *
 * body RealEstateVisit create real-estate-visit
 * returns ApiResponse
 **/
exports.real_estate_visitPATCH = function (body) {
    return db.update(table, body);
};

/**
 * create real-estate-visit
 * create real-estate-visit
 *
 * body RealEstateVisit create real-estate-visit
 * returns ApiResponse
 **/
exports.real_estate_visitPOST = function (body) {
 return db.create(table, body);
};
