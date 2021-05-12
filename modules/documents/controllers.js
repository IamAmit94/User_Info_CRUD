const {addNewDocuments, readNewDocuments, updateNewDocuments, deleteNewDocuments} = require('../Documents/service')

// CREATE Documents
module.exports.addDocuments = (req, res) => {
    addNewDocuments(req.body, (error, response) => {
        if(error)
        return res.status(400).send({msg : 'Something went wrong !', data:error})
        res.status(200).send({
            msg: 'Data inserted Successfully',
            data: response.insertId  
        })
    })
}

 
 //READ Documents

module.exports.readDocuments = (req, res) => {
    readNewDocuments((error, response) => {
        if(error) return res.status(400).send({ msg: 'Something Went wrong'})
        res.status(200).send({
            msg: 'The requested Data',
            data: response
        });
    });
}

// UPDATE Documents

module.exports.updateDocuments = (req, res) => {
    updateNewDocuments(req.params, req.body, (error,response) => {
        if(error) return res.status(400).send({msg: ' Something Went wrong! ', data: error })
        res.status(200).send({
            msg: ' The fields are successfully updated',
            data: response
        });
    });
}

// DELETE Documents

module.exports.deleteDocuments = (req, res) => {
    deleteNewDocuments(req.params, (error, response) => {
        if(error) return res.status(400).send({msg: ' Something went wrong ', data: error})
        res.status(200).send({
            msg: ' THe Field item is deleted successfully',
            data: response
        });
    });
}
 
  
  