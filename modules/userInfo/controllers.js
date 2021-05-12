const {addNewUserInfo, readNewUserInfo, updateNewUserInfo, deleteNewUserInfo} = require('../UserInfo/service')

// CREATE UserInfo
module.exports.addUserInfo = (req, res) => {
    addNewUserInfo(req.body, (error, response) => {
        if(error)
        return res.status(400).send({msg : 'Something went wrong !', data:error})
        res.status(200).send({
            msg: 'Data inserted Successfully',
            data: response.insertId  
        })
    })
}

 
 //READ UserInfo

module.exports.readUserInfo = (req, res) => {
    readNewUserInfo((error, response) => {
        if(error) return res.status(400).send({ msg: 'Something Went wrong'})
        res.status(200).send({
            msg: 'The requested Data',
            data: response
        });
    });
}

// UPDATE UserInfo

module.exports.updateUserInfo = (req, res) => {
    updateNewUserInfo(req.params, req.body, (error,response) => {
        if(error) return res.status(400).send({msg: ' Something Went wrong! ', data: error})
        res.status(200).send({
            msg: ' The fields are successfully updated',
            data: response
        });
    });
}

// DELETE UserInfo

module.exports.deleteUserInfo = (req, res) => {
    deleteNewUserInfo(req.params, (error, response) => {
        if(error) return res.status(400).send({msg: ' Something went wrong ', data: error})
        res.status(200).send({
            msg: ' THe Field item is deleted successfully',
            data: response
        });
    });
}
 
  
  