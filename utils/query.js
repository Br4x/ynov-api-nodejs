const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ynov_immo",
  port: '3308'
});

exports.list = function (table, where, fields, order, offset, limit) {
  console.log("list", table, where, fields, order, offset, limit);
};

exports.deletebyId = function (table, id) {
  console.log("delete", table, id);
};

exports.getById = function (table, id) {
  console.log("getById", table, id);
};

exports.create = async (table, body) => {
  const response = await connection.query(`INSERT INTO ${table} SET ?`, body, (err, res) => {
    if (err) {
      console.log("error: ", err);
      return { data: { error: err }, code: 400 };
    }

    console.log(`created ${table}: `, { id: res.insertId, ...body });
    return { data: { id: res.insertId, ...body }, code: 200 };
  });
  return response
};

exports.update = function (table, body) {
  console.log("update", table, body);
};
