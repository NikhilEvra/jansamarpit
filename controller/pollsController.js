const con = require('../utilities/db');
const AppError = require('../utilities/appError');
const catchAsync = require('../utilities/catchAsync');
                   
    
exports. get_question = catchAsync(async(req, res,next) => {



    const sql = `SELECT * FROM poll_question `;
    
    con.query(sql, (err, result) => {
         
                        res.send(result);
                    
                });
           
    });

    
           
  