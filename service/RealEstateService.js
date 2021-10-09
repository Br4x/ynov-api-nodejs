"use strict";
var db= require('../utils/query');

const table = "real_estate";
/**
 * get all real-estate by pagination
 *
 *
 * where List column:value will use sql LIKE for search eg:id:67 will where id >67 eg2: name:eric => where name LIKE '%eric%' (optional)
 * fields String {$tableColumn},{$tableColumn}...  (optional)
 * order String eg: id desc, name desc (optional)
 * offset Integer sql offset eg: 10 (optional)
 * limit Integer limit returning object count (optional)
 * returns List
 **/
exports.real_estateGET = function (where, fields, order, offset, limit) {
    return db.list(table, where, fields, order, offset, limit);
};

/**
 * Destroy a real-estate by ID
 * delete a real-estate by ID
 *
 * id Long ID of real-estate to delete
 * returns ApiResponse
 **/
exports.real_estateIdDELETE = function (id) {
    return db.deletebyId(table, id);
};

/**
 * get a real-estate by ID
 * get a real-estate by ID
 *
 * id Long ID of real-estate to return
 * returns RealEstate
 **/
exports.real_estateIdGET = function (id) {
  return db.getById(table, id)
};

/**
 * update real-estate
 * update real-estate
 *
 * body RealEstate create real-estate
 * returns ApiResponse
 **/
exports.real_estatePATCH = function (body) {
    return db.update(table, body);
};

/**
 * create real-estate
 * create real-estate
 *
 * body RealEstate create real-estate
 * returns ApiResponse
 **/
exports.real_estatePOST = function (body) {
 return db.create(table, body);
};
