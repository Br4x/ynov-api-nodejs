"use strict";
var db= require('../utils/query');

const table = "cities_districts";
/**
 * get all cities-district by pagination
 *
 *
 * where List column:value will use sql LIKE for search eg:id:67 will where id >67 eg2: name:eric => where name LIKE '%eric%' (optional)
 * fields String {$tableColumn},{$tableColumn}...  (optional)
 * order String eg: id desc, name desc (optional)
 * offset Integer sql offset eg: 10 (optional)
 * limit Integer limit returning object count (optional)
 * returns List
 **/
exports.cities_districtGET = function (where, fields, order, offset, limit) {
    return db.list(table, where, fields, order, offset, limit);
};

/**
 * Destroy a cities-district by ID
 * delete a cities-district by ID
 *
 * id Long ID of cities-district to delete
 * returns ApiResponse
 **/
exports.cities_districtIdDELETE = function (id) {
    return db.deletebyId(table, id);
};

/**
 * get a cities-district by ID
 * get a cities-district by ID
 *
 * id Long ID of cities-district to return
 * returns CitiesDistrict
 **/
exports.cities_districtIdGET = function (id) {
  return db.getById(table, id)
};

/**
 * update cities-district
 * update cities-district
 *
 * body CitiesDistrict create cities-district
 * returns ApiResponse
 **/
exports.cities_districtPATCH = function (body) {
    return db.update(table, body);
};

/**
 * create cities-district
 * create cities-district
 *
 * body CitiesDistrict create cities-district
 * returns ApiResponse
 **/
exports.cities_districtPOST = function (body) {
 return db.create(table, body);
};
