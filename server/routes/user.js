const router = require('express').Router();
const controller = require('./../controller');

router.get('/info', controller.getUserInfo)
router.patch('/info', controller.modifyInfo)        // 추가
router.delete('/info', controller.deleteInfo)       // 추가


module.exports = router;