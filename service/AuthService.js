"use strict";
var db = require("../utils/query");
const table = "auth";
/**
 * login by user
 * login by user
 *
 * body User create user
 * returns UserAuth
 **/
exports.loginPOST = function (body) {
  return new Promise(function (resolve, reject) {
    const response = db.create(table, body);
    resolve(response);
  });
};
