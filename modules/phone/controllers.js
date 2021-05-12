
const {addNewPhone, readNewPhone, updateNewPhone, deleteNewPhone} = require('../phone/service')


//CREATE Phone
module.exports.addPhone = (req, res) => {
    addNewPhone(req.body, (error, response) => {
        if(error)
        return res.status(400).send({msg : 'Something went wrong !'})
        res.status(200).send({
            msg: 'Data inserted Successfully',
            PhoneId: response.insertId  
        })
    })
}

//READ Phone

module.exports.readPhone = (req, res) => {
    readNewPhone((error, response) => {
        if(error) return res.status(400).send({ msg: 'Something Went wrong'})
        res.status(200).send({
            msg: 'The requested Data',
            data: response
        });
    });
}

// UPDATE Phone

module.exports.updatePhone = (req, res) => {
    updateNewPhone(req.params, req.body, (error,response) => {
        if(error) return res.status(400).send({msg: ' Something Went wrong! ', data: error})
        res.status(200).send({
            msg: ' The fields are successfully updated',
            data: response
        });
    });
}

// DELETE Phone

module.exports.deletePhone = (req, res) => {
    deleteNewPhone(req.params, (error, response) => {
        if(error) return res.status(400).send({msg: ' Something went wrong ', data: error})
        res.status(200).send({
            msg: ' THe Field item is deleted successfully',
            data: response
        });
    });
}

//Pagination
