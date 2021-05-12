const router = require('express').Router();

const {addBankInfo, readBankInfo, updateBankInfo, deleteBankInfo } = require('../bankInfo/controllers');

router.post("/bankinfo", addBankInfo);
router.get('/bankinfo/all', readBankInfo);
router.put('/bankinfo/:id', updateBankInfo);
router.delete('/bankinfo/:id', deleteBankInfo); 


module.exports = router;
  