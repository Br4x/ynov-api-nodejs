"use strict";
var db= require('../utils/query');
const table = "chat_comments";

/**
 * get all chat-comment by pagination
 *
 *
 * where List column:value will use sql LIKE for search eg:id:67 will where id >67 eg2: name:eric => where name LIKE '%eric%' (optional)
 * fields String {$tableColumn},{$tableColumn}...  (optional)
 * order String eg: id desc, name desc (optional)
 * offset Integer sql offset eg: 10 (optional)
 * limit Integer limit returning object count (optional)
 * returns List
 **/
exports.chat_commentGET = function (where, fields, order, offset, limit) {
  return new Promise(function (resolve, reject) {
    const response = db.list(table, where, fields, order, offset, limit);
    resolve(response);
  });
};

/**
 * Destroy a chat-comment by ID
 * delete a chat-comment by ID
 *
 * id Long ID of chat-comment to delete
 * returns ApiResponse
 **/
exports.chat_commentIdDELETE = function (id) {
  return new Promise(function (resolve, reject) {
    const response = db.deletebyId(table, id);
    resolve(response);
  });
};

/**
 * get a chat-comment by ID
 * get a chat-comment by ID
 *
 * id Long ID of chat-comment to return
 * returns ChatComment
 **/
exports.chat_commentIdGET = function (id) {
  return new Promise(function (resolve, reject) {
    const response = db.getById(table, id);
    resolve(response);
  });
};

/**
 * update chat-comment
 * update chat-comment
 *
 * body ChatComment create chat-comment
 * returns ApiResponse
 **/
exports.chat_commentPATCH = function (body) {
  return new Promise(function (resolve, reject) {
    const response = db.update(table, body);
    resolve(response);
  });
};

/**
 * create chat-comment
 * create chat-comment
 *
 * body ChatComment create chat-comment
 * returns ApiResponse
 **/
exports.chat_commentPOST = function (body) {
  return new Promise(function (resolve, reject) {
    const response = db.create(table, body);
    resolve(response);
  });
};
