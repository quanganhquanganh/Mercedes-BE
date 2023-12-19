const router = require('express').Router();
import asyncMiddleware from '../middlewares/async';
import staffController from '../controllers/staff';

/* eslint-disable prettier/prettier */
router.get('/staffs/:staffId', asyncMiddleware(staffController.findStaff));
/* eslint-enable prettier/prettier */
module.exports = router;
