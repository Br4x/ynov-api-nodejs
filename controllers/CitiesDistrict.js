'use strict';

var utils = require('../utils/writer.js');
var CitiesDistrict = require('../service/CitiesDistrictService');

module.exports.cities_districtGET = function cities_districtGET (req, res, next) {
  var where = req.swagger.params['where'].value;
  var fields = req.swagger.params['fields'].value;
  var order = req.swagger.params['order'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  CitiesDistrict.cities_districtGET(where,fields,order,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cities_districtIdDELETE = function cities_districtIdDELETE (req, res, next) {
  var id = req.swagger.params['Id'].value;
  CitiesDistrict.cities_districtIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cities_districtIdGET = function cities_districtIdGET (req, res, next) {
  var id = req.swagger.params['Id'].value;
  CitiesDistrict.cities_districtIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cities_districtPATCH = function cities_districtPATCH (req, res, next) {
  var body = req.swagger.params['body'].value;
  CitiesDistrict.cities_districtPATCH(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cities_districtPOST = function cities_districtPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  CitiesDistrict.cities_districtPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
