'use strict';

var utils = require('../utils/writer.js');
var RealEstateFeedback = require('../service/RealEstateFeedbackService');

module.exports.real_estate_feedbackGET = function real_estate_feedbackGET (req, res, next) {
  var where = req.swagger.params['where'].value;
  var fields = req.swagger.params['fields'].value;
  var order = req.swagger.params['order'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  RealEstateFeedback.real_estate_feedbackGET(where,fields,order,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.real_estate_feedbackIdDELETE = function real_estate_feedbackIdDELETE (req, res, next) {
  var id = req.swagger.params['Id'].value;
  RealEstateFeedback.real_estate_feedbackIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.real_estate_feedbackIdGET = function real_estate_feedbackIdGET (req, res, next) {
  var id = req.swagger.params['Id'].value;
  RealEstateFeedback.real_estate_feedbackIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.real_estate_feedbackPATCH = function real_estate_feedbackPATCH (req, res, next) {
  var body = req.swagger.params['body'].value;
  RealEstateFeedback.real_estate_feedbackPATCH(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.real_estate_feedbackPOST = function real_estate_feedbackPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  RealEstateFeedback.real_estate_feedbackPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
