"use strict";
var db= require('../utils/query');

const table = "cities";
/**
 * get all city by pagination
 *
 *
 * where List column:value will use sql LIKE for search eg:id:67 will where id >67 eg2: name:eric => where name LIKE '%eric%' (optional)
 * fields String {$tableColumn},{$tableColumn}...  (optional)
 * order String eg: id desc, name desc (optional)
 * offset Integer sql offset eg: 10 (optional)
 * limit Integer limit returning object count (optional)
 * returns List
 **/
exports.cityGET = function (where, fields, order, offset, limit) {
  return new Promise(function (resolve, reject) {
    const response = db.list(table, where, fields, order, offset, limit);
    resolve(response);
  });
};

/**
 * Destroy a city by ID
 * delete a city by ID
 *
 * id Long ID of city to delete
 * returns ApiResponse
 **/
exports.cityIdDELETE = function (id) {
  return new Promise(function (resolve, reject) {
    const response = db.deletebyId(table, id);
    resolve(response);
  });
};

/**
 * get a city by ID
 * get a city by ID
 *
 * id Long ID of city to return
 * returns City
 **/
exports.cityIdGET = function (id) {
  return new Promise(function (resolve, reject) {
    const response = db.getById(table, id);
    resolve(response);
  });
};

/**
 * update city
 * update city
 *
 * body City create city
 * returns ApiResponse
 **/
exports.cityPATCH = function (body) {
  return new Promise(function (resolve, reject) {
    const response = db.update(table, body);
    resolve(response);
  });
};

/**
 * create city
 * create city
 *
 * body City create city
 * returns ApiResponse
 **/
exports.cityPOST = function (body) {
  return new Promise(function (resolve, reject) {
    const response = db.create(table, body);
    resolve(response);
  });
};
