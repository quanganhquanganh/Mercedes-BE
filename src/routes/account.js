const router = require('express').Router();
import asyncMiddleware from '../middlewares/async';
import accoutnController from '../controllers/account';

/* eslint-disable prettier/prettier */
router.get('/accounts/:accountId', asyncMiddleware(accoutnController.findAccount));
router.post('/accounts/:accountId/update', asyncMiddleware(accoutnController.updateAccount));
/* eslint-enable prettier/prettier */

/* eslint-enable prettier/prettier */
module.exports = router;
