const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ynov_immo",
  port: "3306",
});

exports.list = function (table, where, fields, order, offset, limit) {
  let sql = "";
  if (fields) {
    sql = `SELECT ${fields} FROM ${table} `;
  } else {
    sql = `SELECT * FROM ${table} `;
  }

  if (where) {
    sql += "WHERE ";
    where.forEach((element, index) => {
      sql += element;
      if (index < where.length - 1) {
        sql += " AND ";
      }
    });
  }
  if (order) {
    sql += ` ORDER BY ${order}`;
  }

  if (offset && limit) {
    sql += ` LIMIT ${offset}, ${limit}`;
  }

  if (!offset && limit) {
    sql += ` LIMIT 0, ${limit}`;
  }

  return new Promise((resolve, reject) => {
    connection.query(sql, (err, res) => {
      if (err) {
        console.log("error: ", err);
        return resolve({ data: { error: err }, code: 400 });
      }

      return resolve({ data: { ...res }, code: 200 });
    });
  });
};

exports.deletebyId = function (table, id) {
  return new Promise((resolve, reject) => {
    connection.query(`DELETE FROM ${table} WHERE id = ?`, id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        return resolve({ data: { error: err }, code: 400 });
      }

      return resolve({ data: {}, code: 200 });
    });
  });
};

exports.getById = async (table, id) => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table} WHERE id = ?`, id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        return resolve({ data: { error: err }, code: 400 });
      }
      if (res[0].password) {
        delete res[0].password;
      }

      return resolve({ data: { ...res[0] }, code: 200 });
    });
  });
};

exports.create = async (table, body) => {
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO ${table} SET ?`, body, (err, res) => {
      if (err) {
        console.log("error: ", err);
        return resolve({ data: { error: err }, code: 400 });
      }

      return resolve({ data: { ...body, id: res.insertId }, code: 200 });
    });
  });
};

exports.update = function (table, body) {
  return new Promise((resolve, reject) => {
    connection.query(
      `UPDATE ${table} SET ? WHERE id = ${body.id}`,
      body,
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          return resolve({ data: { error: err }, code: 400 });
        }

        return resolve({ data: { ...body, id: res.insertId }, code: 200 });
      }
    );
  });
};
