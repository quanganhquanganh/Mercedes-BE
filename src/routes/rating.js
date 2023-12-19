const router = require('express').Router();
import asyncMiddleware from '../middlewares/async';
import ratingController from '../controllers/rating';

/* eslint-disable prettier/prettier */
// router.get('/ratings/:ratingId', asyncMiddleware(ratingController.findRating));
// router.post('/ratings/:ratingId/update', asyncMiddleware(ratingController.findRating));
router.delete('/ratings/:ratingId/delete', asyncMiddleware(ratingController.deleteRating));
router.post('/ratings/staff/:staffId', asyncMiddleware(ratingController.storeRating));

/* eslint-enable prettier/prettier */
module.exports = router;
