const con = require('../utilities/db');
const AppError = require('../utilities/appError');
const catchAsync = require('../utilities/catchAsync');


exports.get_volunteer = catchAsync(async(req, res,next) => {

    const state = req.body.state;
    const city = req.body.city;
    // const sql = "SELECT * FROM complaint_master ORDER BY id DESC LIMIT 1";
    const sql = `SELECT * FROM volunteer WHERE state='${state}' AND city='${city}' `;
    
    con.query(sql, (err, result) => {
         
                        //   result.status(200).json({
                        //     status: 'success',
                        //     message: 'OTP Sent Successfully!'
                        // })
    
                        res.send(result);
                    
                }) 
           
    });

    
exports.post_volunteer_by_id = catchAsync(async(req, res,next) => {
 
    const u_id = req.body.u_id;
    const volunteer = req.body.volunteer;
  
    const sql = `UPDATE user_master SET volunteer=? WHERE u_id='${u_id}'`;
    con.query(sql, volunteer, (err, result2) => {
  
        res.status(200).json({
          status: 'success',
          message: 'volunteer Selected'
      })
                        })
    
  
  });
  
                   
    
exports. get_volunteer_by_id = catchAsync(async(req, res,next) => {

    const u_id = req.body.u_id;

    // const sql = "SELECT * FROM complaint_master ORDER BY id DESC LIMIT 1";
    const sql = `SELECT volunteer FROM user_master WHERE u_id='${u_id}' `;
    
    con.query(sql, (err, result) => {
         
                        res.send(result);
                    
                }) 
           
    });

    
           
  