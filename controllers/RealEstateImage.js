'use strict';

var utils = require('../utils/writer.js');
var RealEstateImage = require('../service/RealEstateImageService');

module.exports.real_estate_imageGET = function real_estate_imageGET (req, res, next) {
  var where = req.swagger.params['where'].value;
  var fields = req.swagger.params['fields'].value;
  var order = req.swagger.params['order'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  RealEstateImage.real_estate_imageGET(where,fields,order,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.real_estate_imageIdDELETE = function real_estate_imageIdDELETE (req, res, next) {
  var id = req.swagger.params['Id'].value;
  RealEstateImage.real_estate_imageIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.real_estate_imageIdGET = function real_estate_imageIdGET (req, res, next) {
  var id = req.swagger.params['Id'].value;
  RealEstateImage.real_estate_imageIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.real_estate_imagePATCH = function real_estate_imagePATCH (req, res, next) {
  var body = req.swagger.params['body'].value;
  RealEstateImage.real_estate_imagePATCH(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.real_estate_imagePOST = function real_estate_imagePOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  RealEstateImage.real_estate_imagePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
