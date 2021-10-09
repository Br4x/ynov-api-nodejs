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
    return db.list(table, where, fields, order, offset, limit);
};

/**
 * Destroy a chat-comment by ID
 * delete a chat-comment by ID
 *
 * id Long ID of chat-comment to delete
 * returns ApiResponse
 **/
exports.chat_commentIdDELETE = function (id) {
    return db.deletebyId(table, id);
};

/**
 * get a chat-comment by ID
 * get a chat-comment by ID
 *
 * id Long ID of chat-comment to return
 * returns ChatComment
 **/
exports.chat_commentIdGET = function (id) {
  return db.getById(table, id)
};

/**
 * update chat-comment
 * update chat-comment
 *
 * body ChatComment create chat-comment
 * returns ApiResponse
 **/
exports.chat_commentPATCH = function (body) {
    return db.update(table, body);
};

/**
 * create chat-comment
 * create chat-comment
 *
 * body ChatComment create chat-comment
 * returns ApiResponse
 **/
exports.chat_commentPOST = function (body) {
 return db.create(table, body);
};
