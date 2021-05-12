const connection = require("../../database/db");

// CREATE Address
module.exports.addNewAddress = (payload, callback) => {
  try {
    let sql =
      "INSERT INTO address (userId, locationType, buildingNo, streetAddress, streetAddress2, city, state, country, zipcode, lat, lng, isPrimary) VALUES (?,?,?,?,?,?,?,?,?,?,?,?);";
    values = [
      payload.userId,
      payload.locationType,
      payload.buildingNo,
      payload.streetAddress,
      payload.streetAddress2,
      payload.city,
      payload.state,
      payload.country,
      payload.zipcode,
      payload.lat,
      payload.lng,
      payload.isPrimary,
    ];
    connection.query(sql, values, function (err, data) {
      if (err) return callback(err, null);
      callback(null, data);
    });
  } catch (error) {
    return callback(error, null);
  }
};

//READ Address
module.exports.readNewAddress = (callback) => {
  try {
    let sql = "SELECT * FROM address;";
    connection.query(sql, function (err, data) {
      if (err) return callback(err, null);
      callback(null, data);
    });
  } catch (error) {
    return callback(error, null);
  }
};

//UPDATE Address

module.exports.updateNewAddress = (payload, body, callback) => {
  try {
    let sql = "UPDATE address SET userId =?, locationType =?, buildingNo =?, streetAddress =?, streetAddress2 =?, city =?, state =?, country =?, zipcode =?, lat =?, lng =?, isPrimary =? WHERE id =?";
   
      values = [
      body.userId,
      body.locationType,
      body.buildingNo,
      body.streetAddress,
      body.streetAddress2,
      body.city,
      body.state,
      body.country,
      body.zipcode,
      body.lat,
      body.lng,
      body.isPrimary,
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

// DELETE Address

module.exports.deleteNewAddress = (payload, callback) => {
  try {
    let sql = "DELETE FROM address WHERE id =?";
    values = [payload.id];
    connection.query(sql, values, function (err, data) {
      if (err) return callback(err, null);
      callback(null, data);
    });
  } catch (error) {
    return callback(error, null);
  }
};
