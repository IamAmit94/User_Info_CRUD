const router = require('express').Router();

// const {addPhone, readPhone, updatePhone, deletePhone} = require('../phone/controllers');
const {addPhone, readPhone, updatePhone, deletePhone} = require('../phone/controllers')
router.post("/phone", addPhone);
router.get('/phone/all',readPhone);
router.put('/phone/:id', updatePhone);
router.delete('/phone/:id', deletePhone); 


module.exports = router;