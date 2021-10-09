'use strict';

var utils = require('../utils/writer.js');
var City = require('../service/CityService');

module.exports.cityGET = function cityGET (req, res, next) {
  var where = req.swagger.params['where'].value;
  var fields = req.swagger.params['fields'].value;
  var order = req.swagger.params['order'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  City.cityGET(where,fields,order,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cityIdDELETE = function cityIdDELETE (req, res, next) {
  var id = req.swagger.params['Id'].value;
  City.cityIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cityIdGET = function cityIdGET (req, res, next) {
  var id = req.swagger.params['Id'].value;
  City.cityIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cityPATCH = function cityPATCH (req, res, next) {
  var body = req.swagger.params['body'].value;
  City.cityPATCH(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cityPOST = function cityPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  City.cityPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
