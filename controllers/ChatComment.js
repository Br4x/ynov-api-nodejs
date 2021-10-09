'use strict';

var utils = require('../utils/writer.js');
var ChatComment = require('../service/ChatCommentService');

module.exports.chat_commentGET = function chat_commentGET (req, res, next) {
  var where = req.swagger.params['where'].value;
  var fields = req.swagger.params['fields'].value;
  var order = req.swagger.params['order'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  ChatComment.chat_commentGET(where,fields,order,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.chat_commentIdDELETE = function chat_commentIdDELETE (req, res, next) {
  var id = req.swagger.params['Id'].value;
  ChatComment.chat_commentIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.chat_commentIdGET = function chat_commentIdGET (req, res, next) {
  var id = req.swagger.params['Id'].value;
  ChatComment.chat_commentIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.chat_commentPATCH = function chat_commentPATCH (req, res, next) {
  var body = req.swagger.params['body'].value;
  ChatComment.chat_commentPATCH(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.chat_commentPOST = function chat_commentPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  ChatComment.chat_commentPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
