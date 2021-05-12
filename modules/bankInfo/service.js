const connection = require('../../database/db')

// CREATE BankInfo
module.exports.addNewBankInfo = (payload, callback)  => {
    try {
    let sql = "INSERT INTO bankinfo (userId, accountNumber, ifsc, recieptNumber, isPrimary) VALUES (?,?,?,?,?)";
    console.log(payload)
   let values = [
      payload.userId,
      payload.accountNumber,
      payload.ifsc,
      payload.recieptNumber,
      payload.isPrimary
    ];
        connection.query(sql, values, function (err, data) {
            if(err) return callback(err, null);
            callback(null, data)
        });
    } catch (error) {
        return callback(error, null)
    }
};


//READ BankInfo
module.exports.readNewBankInfo = (callback) => {
    try {
        let sql = 'SELECT * FROM bankinfo;';
        connection.query(sql, function(err, data) {
            if(err) return callback(err, null);
            callback(null, data);
        });
    } catch (error) {
        return callback(error, null)
    }
}


//UPDATE BankInfo

module.exports.updateNewBankInfo = (payload, body, callback) => {

    try {
        let sql = 'UPDATE bankinfo SET userId =?, accountNumber =?, ifsc =?, recieptNumber =?, isPrimary =? WHERE id =?';
        values = [body.userId, body.accountNumber, body.ifsc, body.recieptNumber, body.isPrimary, payload.id];
        console.log(values)
        connection.query(sql, values, function(err, data) {
            if(err) return callback(err, null)
            callback(null, data);
        });
    } catch (error) {
        return callback(error, null)
    }
  };

  // DELETE BankInfo

  module.exports.deleteNewBankInfo = (payload, callback)  => {
    try {
        let sql = 'DELETE FROM bankinfo WHERE id =?';
        values = [payload.id];
        connection.query(sql, values, function(err, data) {
            if(err) return callback(err, null)
            callback(null, data);
        });
        
    } catch (error) {
                return callback(error, null)
    }
  };
  