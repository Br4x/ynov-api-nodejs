"use strict";
var db= require('../utils/query');

const table = "real_estate_feedbacks";
/**
 * get all real-estate-feedback by pagination
 *
 *
 * where List column:value will use sql LIKE for search eg:id:67 will where id >67 eg2: name:eric => where name LIKE '%eric%' (optional)
 * fields String {$tableColumn},{$tableColumn}...  (optional)
 * order String eg: id desc, name desc (optional)
 * offset Integer sql offset eg: 10 (optional)
 * limit Integer limit returning object count (optional)
 * returns List
 **/
exports.real_estate_feedbackGET = function (
  where,
  fields,
  order,
  offset,
  limit
) {
  return new Promise(function (resolve, reject) {
    const response = db.list(table, where, fields, order, offset, limit);
    resolve(response);
  });
};

/**
 * Destroy a real-estate-feedback by ID
 * delete a real-estate-feedback by ID
 *
 * id Long ID of real-estate-feedback to delete
 * returns ApiResponse
 **/
exports.real_estate_feedbackIdDELETE = function (id) {
  return new Promise(function (resolve, reject) {
    const response = db.deletebyId(table, id);
    resolve(response);
  });
};

/**
 * get a real-estate-feedback by ID
 * get a real-estate-feedback by ID
 *
 * id Long ID of real-estate-feedback to return
 * returns RealEstateFeedback
 **/
exports.real_estate_feedbackIdGET = function (id) {
  return new Promise(function (resolve, reject) {
    const response = db.getById(table, id);
    resolve(response);
  });
};

/**
 * update real-estate-feedback
 * update real-estate-feedback
 *
 * body RealEstateFeedback create real-estate-feedback
 * returns ApiResponse
 **/
exports.real_estate_feedbackPATCH = function (body) {
  return new Promise(function (resolve, reject) {
    const response = db.update(table, body);
    resolve(response);
  });
};

/**
 * create real-estate-feedback
 * create real-estate-feedback
 *
 * body RealEstateFeedback create real-estate-feedback
 * returns ApiResponse
 **/
exports.real_estate_feedbackPOST = function (body) {
  return new Promise(function (resolve, reject) {
    const response = db.create(table, body);
    resolve(response);
  });
};
