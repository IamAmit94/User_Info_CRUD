const router = require('express').Router();

const{addDocuments, readDocuments, updateDocuments, deleteDocuments} = require('../documents/controllers')



router.post('/documents', addDocuments);
router.get('/documents', readDocuments);
router.put('/documents/:id', updateDocuments);
router.delete('/documents/:id', deleteDocuments); 

module.exports = router;