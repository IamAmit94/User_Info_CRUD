const router = require('express').Router();

const{addAddress, readAddress, updateAddress, deleteAddress} = require('../address/controllers')



router.post('/address/', addAddress);
router.get('/address/all', readAddress);
router.put('/address/:id', updateAddress);
router.delete('/address/:id', deleteAddress); 

module.exports = router;