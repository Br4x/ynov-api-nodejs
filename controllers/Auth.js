'use strict';

var utils = require('../utils/writer.js');
var Auth = require('../service/AuthService');

module.exports.loginPOST = function loginPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Auth.loginPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
