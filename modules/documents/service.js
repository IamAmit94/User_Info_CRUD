const connection = require("../../database/db");

// CREATE Documents
module.exports.addNewDocuments = (payload, callback) => {
  try {
    let sql =
      "INSERT INTO documents (userId, documentType, number, validFrom, validTill, frontImg, backImg) VALUES (?, ?, ?, ?, ?, ?, ?)";
    values = [
      payload.userId,
      payload.documentType,
      payload.number,
      payload.validFrom,
      payload.validTill,
      payload.frontImg,
      payload.backImg,
    ];
    connection.query(sql, values, function (err, data) {
      if (err) return callback(err, null);
      callback(null, data);
    });
  } catch (error) {
    return callback(error, null);
  }
};

//READ Documents
module.exports.readNewDocuments = (callback) => {
  try {
    let sql = "SELECT * FROM Documents;";
    connection.query(sql, function (err, data) {
      if (err) return callback(err, null);
      callback(null, data);
    });
  } catch (error) {
    return callback(error, null);
  }
};

//UPDATE Documents

module.exports.updateNewDocuments = (payload, body, callback) => {
  try {
    let sql = "UPDATE documents SET documentType=?, number=?, validFrom=?, validTill=?, frontImg=?, backImg=? WHERE id=?";

    values = [
      body.documentType,
      body.number,  
      body.validFrom,
      body.validTill,
      body.frontImg,
      body.backImg,
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

// DELETE Documents

module.exports.deleteNewDocuments = (payload, callback) => {
  try {
    let sql = "DELETE FROM Documents WHERE id =?";
    values = [payload.id];
    connection.query(sql, values, function (err, data) {
      if (err) return callback(err, null);
      callback(null, data);
    });
  } catch (error) {
    return callback(error, null);
  }
};
