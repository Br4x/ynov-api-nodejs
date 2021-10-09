"use strict";
var db= require('../utils/query');
const table = "real_estate_images";

/**
 * get all real-estate-image by pagination
 *
 *
 * where List column:value will use sql LIKE for search eg:id:67 will where id >67 eg2: name:eric => where name LIKE '%eric%' (optional)
 * fields String {$tableColumn},{$tableColumn}...  (optional)
 * order String eg: id desc, name desc (optional)
 * offset Integer sql offset eg: 10 (optional)
 * limit Integer limit returning object count (optional)
 * returns List
 **/
exports.real_estate_imageGET = function (where, fields, order, offset, limit) {
    return db.list(table, where, fields, order, offset, limit);
};

/**
 * Destroy a real-estate-image by ID
 * delete a real-estate-image by ID
 *
 * id Long ID of real-estate-image to delete
 * returns ApiResponse
 **/
exports.real_estate_imageIdDELETE = function (id) {
    return db.deletebyId(table, id);
};

/**
 * get a real-estate-image by ID
 * get a real-estate-image by ID
 *
 * id Long ID of real-estate-image to return
 * returns RealEstateImage
 **/
exports.real_estate_imageIdGET = function (id) {
  return db.getById(table, id)
};

/**
 * update real-estate-image
 * update real-estate-image
 *
 * body RealEstateImage create real-estate-image
 * returns ApiResponse
 **/
exports.real_estate_imagePATCH = function (body) {
    return db.update(table, body);
};

/**
 * create real-estate-image
 * create real-estate-image
 *
 * body RealEstateImage create real-estate-image
 * returns ApiResponse
 **/
exports.real_estate_imagePOST = function (body) {
 return db.create(table, body);
};
