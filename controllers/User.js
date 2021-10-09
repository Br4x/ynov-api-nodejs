'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.userGET = function userGET (req, res, next) {
  var where = req.swagger.params['where'].value;
  var fields = req.swagger.params['fields'].value;
  var order = req.swagger.params['order'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  User.userGET(where,fields,order,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userIdDELETE = function userIdDELETE (req, res, next) {
  var id = req.swagger.params['Id'].value;
  User.userIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userIdGET = function userIdGET (req, res, next) {
  var id = req.swagger.params['Id'].value;
  User.userIdGET(id)
    .then(function (response) {
      console.log(response)
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userPATCH = function userPATCH (req, res, next) {
  var body = req.swagger.params['body'].value;
  User.userPATCH(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userPOST = function userPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  User.userPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
