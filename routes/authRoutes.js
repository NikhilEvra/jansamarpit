const express = require('express');

const authController = require('../controller/authController');
const complaintsController = require('../controller/complaintsController');
const voulunteerController = require('../controller/volunteerController');
const pollsController = require('../controller/pollsController');


const router = express.Router();

router
    .route('/signup')
    .post(authController.signup);

router
    .route('/login')
    .post(authController.login);

    router
          .route('/sendotp')
          .post(authController.sendotp)

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

    router.route('/get_complaint_by_id')
    .post(complaintsController.get_complaint_by_id)

    router.route('/post_volunteer_by_id')
    .post(voulunteerController.post_volunteer_by_id)
     
    router.route('/get_volunteer_by_id')
    .post(voulunteerController.get_volunteer_by_id)

    router.route('/get_question')
    .get(pollsController.get_question)

    router.route('/get_question_vs')
    .get(pollsController.get_question_vs)

    router.route('/get_question_yes_no')
    .get(pollsController.get_question_yes_no);

    router.route('/get_dash_data')
    .post(authController.get_dash_data)

    router.route('/get_dash_data2')
    .post(authController.get_dash_data2)

    router.route('/get_volunteer_by_v_id')
    .post(voulunteerController.get_volunteer_by_v_id)

    router.route('/post_poll_answer')
    .post(pollsController.post_poll_answer)

    // router.route('/get_answer_by_u_id')
    // .post(pollsController.get_answer_by_u_id)

    router.route('/get_question2')
    .post(pollsController.get_question2)

    router.route('/get_polls_answer')
    .post(pollsController.get_polls_answer)

    router.route('/get_polls_answer_vs')
    .post(pollsController.get_polls_answer_vs);

    router.route('/get_polls_answer_yesno')
    .post(pollsController.get_polls_answer_yesno);

    router.route('/get_graph_data')
    .get(pollsController.get_graph_data);

    router.route('/get_polls_answer_by_question')
    .post(pollsController.get_polls_answer_by_question)

   module.exports = router;