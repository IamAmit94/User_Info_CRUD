const {addNewBankInfo, readNewBankInfo, updateNewBankInfo, deleteNewBankInfo} = require('../bankInfo/service')


// CREATE BankInfo
module.exports.addBankInfo = (req, res) => {
    addNewBankInfo(req.body, (error, response) => {
        if(error)
        return res.status(400).send({msg : 'Something went wrong !'})
        res.status(200).send({
            msg: 'Data inserted Successfully',
            data: response.insertId  
        })
    })
}


 //READ BankInfo

module.exports.readBankInfo = (req, res) => {
    readNewBankInfo((error, response) => {
        if(error) return res.status(400).send({ msg: 'Something Went wrong'})
        res.status(200).send({
            msg: 'The requested Data',
            data: response
        });
    });
}

// UPDATE BankInfo

module.exports.updateBankInfo = (req, res) => {
    updateNewBankInfo(req.params, req.body, (error,response) => {
        if(error) return res.status(400).send({msg: ' Something Went wrong! ', data: error})
        res.status(200).send({
            msg: ' The fields are successfully updated',
            data: response
        });
    });
}

// DELETE BankInfo

module.exports.deleteBankInfo = (req, res) => {
    deleteNewBankInfo(req.params, (error, response) => {
        if(error) return res.status(400).send({msg: ' Something went wrong ', data: error})
        res.status(200).send({
            msg: ' THe Field item is deleted successfully',
            data: response
        });
    });
}
 