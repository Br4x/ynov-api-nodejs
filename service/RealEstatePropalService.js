"use strict";
var db= require('../utils/query');

const table = "real_estate_propals";
/**
 * get all real-estate-propal by pagination
 *
 *
 * where List column:value will use sql LIKE for search eg:id:67 will where id >67 eg2: name:eric => where name LIKE '%eric%' (optional)
 * fields String {$tableColumn},{$tableColumn}...  (optional)
 * order String eg: id desc, name desc (optional)
 * offset Integer sql offset eg: 10 (optional)
 * limit Integer limit returning object count (optional)
 * returns List
 **/
exports.real_estate_propalGET = function (where, fields, order, offset, limit) {
    return db.list(table, where, fields, order, offset, limit);
};

/**
 * Destroy a real-estate-propal by ID
 * delete a real-estate-propal by ID
 *
 * id Long ID of real-estate-propal to delete
 * returns ApiResponse
 **/
exports.real_estate_propalIdDELETE = function (id) {
    return db.deletebyId(table, id);
};

/**
 * get a real-estate-propal by ID
 * get a real-estate-propal by ID
 *
 * id Long ID of real-estate-propal to return
 * returns RealEstatePropal
 **/
exports.real_estate_propalIdGET = function (id) {
  return db.getById(table, id)
};

/**
 * update real-estate-propal
 * update real-estate-propal
 *
 * body RealEstatePropal create real-estate-propal
 * returns ApiResponse
 **/
exports.real_estate_propalPATCH = function (body) {
    return db.update(table, body);
};

/**
 * create real-estate-propal
 * create real-estate-propal
 *
 * body RealEstatePropal create real-estate-propal
 * returns ApiResponse
 **/
exports.real_estate_propalPOST = function (body) {
 return db.create(table, body);
};
