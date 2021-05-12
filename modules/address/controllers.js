const {addNewAddress, readNewAddress, updateNewAddress, deleteNewAddress} = require('../address/service')

// CREATE Address
module.exports.addAddress = (req, res) => {
    addNewAddress(req.body, (error, response) => {
        if(error)
        return res.status(400).send({msg : 'Something went wrong !', data:error})
        res.status(200).send({
            msg: 'Data inserted Successfully',
            data: response.insertId  
        })
    })
}

 
 //READ Address

module.exports.readAddress = (req, res) => {
    readNewAddress((error, response) => {
        if(error) return res.status(400).send({ msg: 'Something Went wrong'})
        res.status(200).send({
            msg: 'The requested Data',
            data: response
        });
    });
}

// UPDATE Address

module.exports.updateAddress = (req, res) => {
    updateNewAddress(req.params, req.body, (error,response) => {
        if(error) return res.status(400).send({msg: ' Something Went wrong! ', data: error})
        res.status(200).send({
            msg: ' The fields are successfully updated',
            data: response
        });
    });
}

// DELETE Address

module.exports.deleteAddress = (req, res) => {
    deleteNewAddress(req.params, (error, response) => {
        if(error) return res.status(400).send({msg: ' Something went wrong ', data: error})
        res.status(200).send({
            msg: ' THe Field item is deleted successfully',
            data: response
        });
    });
}
 
  
  