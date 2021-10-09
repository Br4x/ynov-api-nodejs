'use strict';

var utils = require('../utils/writer.js');
var Chat = require('../service/ChatService');

module.exports.chatGET = function chatGET (req, res, next) {
  var where = req.swagger.params['where'].value;
  var fields = req.swagger.params['fields'].value;
  var order = req.swagger.params['order'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Chat.chatGET(where,fields,order,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.chatIdDELETE = function chatIdDELETE (req, res, next) {
  var id = req.swagger.params['Id'].value;
  Chat.chatIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.chatIdGET = function chatIdGET (req, res, next) {
  var id = req.swagger.params['Id'].value;
  Chat.chatIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.chatPATCH = function chatPATCH (req, res, next) {
  var body = req.swagger.params['body'].value;
  Chat.chatPATCH(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.chatPOST = function chatPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Chat.chatPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
