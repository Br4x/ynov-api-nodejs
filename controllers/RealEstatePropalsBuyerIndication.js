'use strict';

var utils = require('../utils/writer.js');
var RealEstatePropalsBuyerIndication = require('../service/RealEstatePropalsBuyerIndicationService');

module.exports.real_estate_propals_buyer_indicationGET = function real_estate_propals_buyer_indicationGET (req, res, next) {
  var where = req.swagger.params['where'].value;
  var fields = req.swagger.params['fields'].value;
  var order = req.swagger.params['order'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  RealEstatePropalsBuyerIndication.real_estate_propals_buyer_indicationGET(where,fields,order,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.real_estate_propals_buyer_indicationIdDELETE = function real_estate_propals_buyer_indicationIdDELETE (req, res, next) {
  var id = req.swagger.params['Id'].value;
  RealEstatePropalsBuyerIndication.real_estate_propals_buyer_indicationIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.real_estate_propals_buyer_indicationIdGET = function real_estate_propals_buyer_indicationIdGET (req, res, next) {
  var id = req.swagger.params['Id'].value;
  RealEstatePropalsBuyerIndication.real_estate_propals_buyer_indicationIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.real_estate_propals_buyer_indicationPATCH = function real_estate_propals_buyer_indicationPATCH (req, res, next) {
  var body = req.swagger.params['body'].value;
  RealEstatePropalsBuyerIndication.real_estate_propals_buyer_indicationPATCH(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.real_estate_propals_buyer_indicationPOST = function real_estate_propals_buyer_indicationPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  RealEstatePropalsBuyerIndication.real_estate_propals_buyer_indicationPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
