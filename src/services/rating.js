const CustomError = require('../errors/CustomError');
const errorCodes = require('../errors/code');

import ratingDao from '../daos/rating';
import staffDao from '../daos/staff';
import accountDao from '../daos/account';
import BookingStatusEnum from '../constants/BookingStatusEnum';

const storeRating = async (userId, staffId, data) => {
    const staff = await staffDao.findStaff(staffId);
    if (!staff) throw new CustomError(errorCodes.NOT_FOUND, 'Staff not found!');
    // if(staff.rating.find(rate => rate.userId == userId)) throw new CustomError(errorCodes.CONFLICT, 'Rating has exited!');
    const account = await accountDao.findAccount(userId);
    if (!account)
        throw new CustomError(errorCodes.NOT_FOUND, 'Account not found!');
    if (
      account.booking.find(
        (booking) =>
          booking.staffId == (staff._id.toString())
      )
    ) {
    const rating = await ratingDao.storeRating(userId, staffId, data);
    return rating;
    } else {
      throw new CustomError(
          errorCodes.FORBIDDEN,
          'The user has not hired this staff yet!',
      );
    }


};

const deleteRating = async (ratingId) => {
    const rating = await ratingDao.deleteRating(ratingId);
    return rating;
};

module.exports = { storeRating, deleteRating };
