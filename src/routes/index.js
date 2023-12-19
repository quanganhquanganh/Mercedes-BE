const authRoute = require('./auth');
const accountRoute = require('./account');
const staffRoute = require('./staff');
const ratingRoute = require('./rating');
const bookingRoute = require('./booking');
const searchRoute = require('./search');

module.exports = async (app) => {
  const routes = [
    authRoute,
    accountRoute,
    staffRoute,
    ratingRoute,
    bookingRoute,
    searchRoute,
  ];

  for (const route of routes) {
    app.use('/v1', route);
  }
};
