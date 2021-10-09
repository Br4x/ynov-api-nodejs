'use strict';

var utils = require('../utils/writer.js');
var RealEstateVisit = require('../service/RealEstateVisitService');

module.exports.real_estate_visitGET = function real_estate_visitGET (req, res, next) {
  var where = req.swagger.params['where'].value;
  var fields = req.swagger.params['fields'].value;
  var order = req.swagger.params['order'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  RealEstateVisit.real_estate_visitGET(where,fields,order,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.real_estate_visitIdDELETE = function real_estate_visitIdDELETE (req, res, next) {
  var id = req.swagger.params['Id'].value;
  RealEstateVisit.real_estate_visitIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.real_estate_visitIdGET = function real_estate_visitIdGET (req, res, next) {
  var id = req.swagger.params['Id'].value;
  RealEstateVisit.real_estate_visitIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.real_estate_visitPATCH = function real_estate_visitPATCH (req, res, next) {
  var body = req.swagger.params['body'].value;
  RealEstateVisit.real_estate_visitPATCH(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.real_estate_visitPOST = function real_estate_visitPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  RealEstateVisit.real_estate_visitPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
