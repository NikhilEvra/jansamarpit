const con = require('../utilities/db');
const AppError = require('../utilities/appError');
const catchAsync = require('../utilities/catchAsync');
                   
    
exports. get_question = catchAsync(async(req, res,next) => {



    const sql = `SELECT * FROM poll_question WHERE type='MCQ' ORDER BY id `;
    
    con.query(sql, (err, result) => {
         
                        res.send(result);
                    
                });
           
    });

        
exports. get_question_vs = catchAsync(async(req, res,next) => {



    const sql = `SELECT * FROM poll_question WHERE type='v/s' ORDER BY id `;
    
    con.query(sql, (err, result) => {
         
                        res.send(result);
                    
                });
           
    });
    
    exports. get_question_yes_no = catchAsync(async(req, res,next) => {



        const sql = `SELECT * FROM poll_question WHERE type='yes no' ORDER BY id `;
        
        con.query(sql, (err, result) => {
             
                            res.send(result);
                        
                    });
               
        });
    
           
  