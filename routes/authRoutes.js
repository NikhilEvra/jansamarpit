const express = require('express');

const authController = require('../controller/authController');

const router = express.Router();


router
    .route('/signup')
    .post(authController.signup);

router
    .route('/login')
    .post(authController.login);

router
    .route('/otp-verification')
    .post(authController.otpVerification);

// router
//     .route('/')
//     .post(uploadFileController.uploadSingleVideo, uploadFileController.resizeVideo);
    
// router
//     .route('/testapi')
//     .get(uploadFileController.testApi);

module.exports = router;