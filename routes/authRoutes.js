const express = require('express');

const authController = require('../controller/authController');
const complaintsController = require('../controller/complaintsController');
const voulunteerController = require('../controller/volunteerController');



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


// router
//     .route('/add_complaints')
//     .post(authController.add_complaints);

    router
    .route('/add_complaints')
    .post(complaintsController.add_complaints);

    router
    .route('/get_complaints')
    .post(complaintsController.get_complaints);

    router
    .route('/tech_err')
    .post(complaintsController.tech_err);

    router
    .route('/get_volunteer')
    .post(voulunteerController.get_volunteer);



module.exports = router;