'use strict';

var utils = require('../utils/writer.js');
var RealEstatePropal = require('../service/RealEstatePropalService');

module.exports.real_estate_propalGET = function real_estate_propalGET (req, res, next) {
  var where = req.swagger.params['where'].value;
  var fields = req.swagger.params['fields'].value;
  var order = req.swagger.params['order'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  RealEstatePropal.real_estate_propalGET(where,fields,order,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.real_estate_propalIdDELETE = function real_estate_propalIdDELETE (req, res, next) {
  var id = req.swagger.params['Id'].value;
  RealEstatePropal.real_estate_propalIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.real_estate_propalIdGET = function real_estate_propalIdGET (req, res, next) {
  var id = req.swagger.params['Id'].value;
  RealEstatePropal.real_estate_propalIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.real_estate_propalPATCH = function real_estate_propalPATCH (req, res, next) {
  var body = req.swagger.params['body'].value;
  RealEstatePropal.real_estate_propalPATCH(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.real_estate_propalPOST = function real_estate_propalPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  RealEstatePropal.real_estate_propalPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
