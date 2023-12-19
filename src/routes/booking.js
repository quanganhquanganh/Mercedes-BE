const router = require('express').Router();
import asyncMiddleware from '../middlewares/async';
import bookingController from '../controllers/booking';

/* eslint-disable prettier/prettier */
router.get('/bookings', asyncMiddleware(bookingController.allBooking));
router.get('/bookings/:bookingId', asyncMiddleware(bookingController.findBooking));
router.post('/bookings/store', asyncMiddleware(bookingController.storeBooking));
router.post('/bookings/:bookingId/update', asyncMiddleware(bookingController.updateBooking));
router.delete('/bookings/:bookingId/delete', asyncMiddleware(bookingController.deleteBooking));

/* eslint-enable prettier/prettier */
module.exports = router;
