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
 return db.create(table, body);
};
