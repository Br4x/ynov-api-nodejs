"use strict";
var db= require('../utils/query');
const table = "chat";
/**
 * get all chat by pagination
 *
 *
 * where List column:value will use sql LIKE for search eg:id:67 will where id >67 eg2: name:eric => where name LIKE '%eric%' (optional)
 * fields String {$tableColumn},{$tableColumn}...  (optional)
 * order String eg: id desc, name desc (optional)
 * offset Integer sql offset eg: 10 (optional)
 * limit Integer limit returning object count (optional)
 * returns List
 **/
exports.chatGET = function (where, fields, order, offset, limit) {
  return new Promise(function (resolve, reject) {
    const response = db.list(table, where, fields, order, offset, limit);
    resolve(response);
  });
};

/**
 * Destroy a chat by ID
 * delete a chat by ID
 *
 * id Long ID of chat to delete
 * returns ApiResponse
 **/
exports.chatIdDELETE = function (id) {
  return new Promise(function (resolve, reject) {
    const response = db.deletebyId(table, id);
    resolve(response);
  });
};

/**
 * get a chat by ID
 * get a chat by ID
 *
 * id Long ID of chat to return
 * returns Chat
 **/
exports.chatIdGET = function (id) {
  return new Promise(function (resolve, reject) {
    const response = db.getById(table, id);
    resolve(response);
  });
};

/**
 * update chat
 * update chat
 *
 * body Chat create chat
 * returns ApiResponse
 **/
exports.chatPATCH = function (body) {
  return new Promise(function (resolve, reject) {
    const response = db.update(table, body);
    resolve(response);
  });
};

/**
 * create chat
 * create chat
 *
 * body Chat create chat
 * returns ApiResponse
 **/
exports.chatPOST = function (body) {
  return new Promise(function (resolve, reject) {
    const response = db.create(table, body);
    resolve(response);
  });
};