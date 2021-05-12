
const connection = require('../../database/db');

// CREATE 
module.exports.addNewPhone = (payload, callback)  => {
    try {
    let sql = "INSERT INTO phone (userId, countryCode, phone, isPrimary, isEmergency, contactName, relation) VALUES (?, ?, ?, ?, ?, ?, ?)";
    console.log(payload)
   let values = [
      payload.userId,
      payload.countryCode,
      payload.phone,
      payload.isPrimary,
      payload.isEmergency,
      payload.contactName,
      payload.relation,
    ];
        connection.query(sql, values, function (err, data) {
            if(err) return callback(err, null);
            callback(null, data)
        });
    } catch (error) {
        return callback(error, null)
    }
};

//READ

module.exports.readNewPhone = (callback) => {
    try {
        let sql = 'SELECT * FROM phone';
        connection.query(sql, function(err, data) {
            if(err) return callback(err, null);
            callback(null, data);
        });
    } catch (error) {
        return callback(error, null)
    }
}

//UPDATE Phone

module.exports.updateNewPhone = (payload, body, callback) => {
  try {
    let sql =
      "UPDATE phone SET userId =?, countryCode =?, phone =?, isPrimary =?, isEmergency =?, contactName =?, relation =? WHERE id =?";
    values = [
      body.userId,
      body.countryCode,
      body.phone,
      body.isPrimary,
      body.isEmergency,
      body.relation,
      body.contactName,
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

  // DELETE Phone

  module.exports.deleteNewPhone = (payload, callback)  => {
    try {
        let sql = 'DELETE FROM phone WHERE id =?';
        values = [payload.id];
        connection.query(sql, values, function(err, data) {
            if(err) return callback(err, null)
            callback(null, data);
        });
        
    } catch (error) {
                return callback(error, null)
    }
  };



