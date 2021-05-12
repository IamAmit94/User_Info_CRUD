const router = require('express').Router();

const{addUserInfo, readUserInfo, updateUserInfo, deleteUserInfo} = require('../UserInfo/controllers')



router.post('/UserInfo', addUserInfo);
router.get('/UserInfo/all', readUserInfo);
router.put('/UserInfo/:id', updateUserInfo);
router.delete('/UserInfo/:id', deleteUserInfo); 

module.exports = router;