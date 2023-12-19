const CustomError = require('../errors/CustomError');
const errorCodes = require('../errors/code');

import staffDao from '../daos/staff';

const home = async () => {
    const staffs = await staffDao.allStaff();
    return { staffs, text: 'hello work!' };
};

module.exports = { home };
