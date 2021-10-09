'use strict';

var utils = require('../utils/writer.js');
var RealEstate = require('../service/RealEstateService');

module.exports.real_estateGET = function real_estateGET (req, res, next) {
  var where = req.swagger.params['where'].value;
  var fields = req.swagger.params['fields'].value;
  var order = req.swagger.params['order'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  RealEstate.real_estateGET(where,fields,order,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.real_estateIdDELETE = function real_estateIdDELETE (req, res, next) {
  var id = req.swagger.params['Id'].value;
  RealEstate.real_estateIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.real_estateIdGET = function real_estateIdGET (req, res, next) {
  var id = req.swagger.params['Id'].value;
  RealEstate.real_estateIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.real_estatePATCH = function real_estatePATCH (req, res, next) {
  var body = req.swagger.params['body'].value;
  RealEstate.real_estatePATCH(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.real_estatePOST = function real_estatePOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  RealEstate.real_estatePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
