const router = require('express').Router();
import matchingController from '../controllers/matching';

router.post('/search/matching', matchingController.matching);
router.get('/getdata', matchingController.getData);
router.get('/search/allStaff', matchingController.allStaff);

module.exports = router;
