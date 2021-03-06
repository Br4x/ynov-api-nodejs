"use strict";
var db= require('../utils/query');

const table = "real_estate_availability";
/**
 * get all real-estate-availability by pagination
 *
 *
 * where List column:value will use sql LIKE for search eg:id:67 will where id >67 eg2: name:eric => where name LIKE '%eric%' (optional)
 * fields String {$tableColumn},{$tableColumn}...  (optional)
 * order String eg: id desc, name desc (optional)
 * offset Integer sql offset eg: 10 (optional)
 * limit Integer limit returning object count (optional)
 * returns List
 **/
exports.real_estate_availabilityGET = function (
  where,
  fields,
  order,
  offset,
  limit
) {
    return db.list(table, where, fields, order, offset, limit);
};

/**
 * Destroy a real-estate-availability by ID
 * delete a real-estate-availability by ID
 *
 * id Long ID of real-estate-availability to delete
 * returns ApiResponse
 **/
exports.real_estate_availabilityIdDELETE = function (id) {
    return db.deletebyId(table, id);
};

/**
 * get a real-estate-availability by ID
 * get a real-estate-availability by ID
 *
 * id Long ID of real-estate-availability to return
 * returns RealEstateAvailability
 **/
exports.real_estate_availabilityIdGET = function (id) {
  return db.getById(table, id)
};

/**
 * update real-estate-availability
 * update real-estate-availability
 *
 * body RealEstateAvailability create real-estate-availability
 * returns ApiResponse
 **/
exports.real_estate_availabilityPATCH = function (body) {
    return db.update(table, body);
};

/**
 * create real-estate-availability
 * create real-estate-availability
 *
 * body RealEstateAvailability create real-estate-availability
 * returns ApiResponse
 **/
exports.real_estate_availabilityPOST = function (body) {
 return db.create(table, body);
};
