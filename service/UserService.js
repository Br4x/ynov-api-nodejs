"use strict";
var db = require("../utils/query");
const table = "users";

/**
 * get all user by pagination
 *
 *
 * where List column:value will use sql LIKE for search eg:id:67 will where id >67 eg2: name:eric => where name LIKE '%eric%' (optional)
 * fields String {$tableColumn},{$tableColumn}...  (optional)
 * order String eg: id desc, name desc (optional)
 * offset Integer sql offset eg: 10 (optional)
 * limit Integer limit returning object count (optional)
 * returns List
 **/
exports.userGET = function (where, fields, order, offset, limit) {
  return db.list(table, where, fields, order, offset, limit);
};

/**
 * Destroy a user by ID
 * delete a user by ID
 *
 * id Long ID of user to delete
 * returns ApiResponse
 **/
exports.userIdDELETE = function (id) {
  return db.deletebyId(table, id);
};

/**
 * get a user by ID
 * get a user by ID
 *
 * id Long ID of user to return
 * returns User
 **/
exports.userIdGET = function (id) {
  return db.getById(table, id);
};

/**
 * update user
 * update user
 *
 * body User create user
 * returns ApiResponse
 **/
exports.userPATCH = function (body) {
  return db.update(table, body);
};

/**
 * create user
 * create user
 *
 * body User create user
 * returns ApiResponse
 **/
exports.userPOST = function (body) {
  return db.create(table, body);
};
