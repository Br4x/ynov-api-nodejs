'use strict';

var utils = require('../utils/writer.js');
var RealEstateAvailability = require('../service/RealEstateAvailabilityService');

module.exports.real_estate_availabilityGET = function real_estate_availabilityGET (req, res, next) {
  var where = req.swagger.params['where'].value;
  var fields = req.swagger.params['fields'].value;
  var order = req.swagger.params['order'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  RealEstateAvailability.real_estate_availabilityGET(where,fields,order,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.real_estate_availabilityIdDELETE = function real_estate_availabilityIdDELETE (req, res, next) {
  var id = req.swagger.params['Id'].value;
  RealEstateAvailability.real_estate_availabilityIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.real_estate_availabilityIdGET = function real_estate_availabilityIdGET (req, res, next) {
  var id = req.swagger.params['Id'].value;
  RealEstateAvailability.real_estate_availabilityIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.real_estate_availabilityPATCH = function real_estate_availabilityPATCH (req, res, next) {
  var body = req.swagger.params['body'].value;
  RealEstateAvailability.real_estate_availabilityPATCH(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.real_estate_availabilityPOST = function real_estate_availabilityPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  RealEstateAvailability.real_estate_availabilityPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
