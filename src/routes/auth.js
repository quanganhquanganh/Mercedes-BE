const router = require('express').Router();
import asyncMiddleware from '../middlewares/async';
// const { auth } = require('../middlewares/auth');
import { auth } from '../middlewares/auth';
// const { loginValidate, registerValidate } = require('../validations/auth');
import { loginValidate, registerValidate } from '../validations/auth';
// const authController = require('../controllers/auth');
import authController from '../controllers/auth';
// const homeController = require('../controllers/home');
import homeController from '../controllers/home';

router.get('/home', asyncMiddleware(homeController.home));

/* eslint-disable prettier/prettier */
router.post(
    '/auths/register',
    registerValidate,
    asyncMiddleware(authController.register),
);
router.post(
    '/auths/login',
    loginValidate,
    asyncMiddleware(authController.login),
);
router.get(
    '/auths/verify',
    auth,
    asyncMiddleware(authController.verifyAccessToken),
);

/* eslint-enable prettier/prettier */
module.exports = router;
