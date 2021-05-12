const connection = require("../../database/db");

// CREATE UserInfo
module.exports.addNewUserInfo = (payload, callback) => {
  try {
  let sql =
"INSERT INTO userinfo (firstName, lastName, email, password, dob, joinedon, leftOn, salary, profile, fathersName, isoline, profilePic, role, hoursFrom, hoursTo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
values = [
payload.firstName,
payload.lastName,
payload.email,
payload.password,
payload.dob,
payload.joinedon,
payload.leftOn,
payload.salary,
payload.profile,
payload.fathersName,
payload.isoline,
payload.profilePic,
payload.role,
payload.hoursFrom,
payload.hoursTo,
];

    connection.query(sql, values, function (err, data) {
      if (err) return callback(err, null);
      callback(null, data);
    });
  } catch (error) {
    return callback(error, null);
  }
};

//READ UserInfo
module.exports.readNewUserInfo = (callback) => {
  try {
    let sql = "SELECT * FROM userinfo;";
    connection.query(sql, function (err, data) {
      if (err) return callback(err, null);
      callback(null, data);
    });
  } catch (error) {
    return callback(error, null);
  }
};

//UPDATE UserInfo

module.exports.updateNewUserInfo = (payload, body, callback) => {
  try {
    let sql = 'UPDATE userinfo SET firstName=?, lastName=?, email=?, password=?, dob=?, joinedon=?, leftOn=?, salary=?, profile =?, fathersName =?, isoline=?, profilePic=? ,role=? ,hoursFrom=? ,hoursTo=? WHERE id =?';
   
      values = [
        body.firstName,
        body.lastName,
        body.email,
        body.password,
        body.dob,
        body.joinedon,
        body.leftOn,
        body.salary,
        body.profile,
        body.fathersName,
        body.isoline,
        body.profilePic,
        body.role,
        body.hoursFrom,
        body.hoursTo,
        payload.id,
    ];
    console.log(values);
    connection.query(sql, values, function (err, data) {
      if (err) return callback(err, null);
      callback(null, data);
    });
  } catch (error) {
    return callback(error, null);
  }
};

// DELETE UserInfo

module.exports.deleteNewUserInfo = (payload, callback) => {
  try {
    let sql = "DELETE FROM userinfo WHERE id =?";
    values = [payload.id];
    connection.query(sql, values, function (err, data) {
      if (err) return callback(err, null);
      callback(null, data);
    });
  } catch (error) {
    return callback(error, null);
  }
};
