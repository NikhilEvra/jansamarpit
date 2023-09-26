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
                   
    
    
           
  