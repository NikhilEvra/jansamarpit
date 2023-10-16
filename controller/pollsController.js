const con = require('../utilities/db');
const AppError = require('../utilities/appError');
const catchAsync = require('../utilities/catchAsync');
                   
    
exports. get_question = catchAsync(async(req, res,next) => {



    const sql = `SELECT * FROM poll_question WHERE type='MCQ' AND status = 'Active' ORDER BY id `;
    
    con.query(sql, (err, result) => {
         
                        res.send(result);
                    
                });
           
    });

    exports. get_question2 = catchAsync(async(req, res,next) => {
    const u_id = req.body.u_id;
  
 

        const sql = ` SELECT * FROM poll_question WHERE type='MCQ' AND status = 'Active' ORDER BY id
        LEFT JOIN poll_user_answer ON table_nameA.column_name = table_nameB.column_name
         `;
        
        con.query(sql, (err, result) => {
             
                            res.send(result);
                        
                    });
               
        });
    
        
exports. get_question_vs = catchAsync(async(req, res,next) => {

    

    const sql = `SELECT * FROM poll_question WHERE type='v/s' AND status = 'Active' ORDER BY id `;
    
    con.query(sql, (err, result) => {
         
                        res.send(result);
                    
                });
           
    });
    
    exports. get_question_yes_no = catchAsync(async(req, res,next) => {



        const sql = `SELECT * FROM poll_question WHERE type='yes no' AND status = 'Active' ORDER BY id `;
        
        con.query(sql, (err, result) => {
             
                            res.send(result);
                        
                    });
               
        });

        

exports.post_poll_answer = catchAsync(async(req, res,next) => {

const u_id = req.body.u_id;
const ans = req.body.answer;
const que = req.body.question;

const sql2 = `SELECT COUNT(*) AS count FROM poll_user_answer WHERE u_id='${u_id}' AND question='${que}' `;  

con.query(sql2, (err, result2) => {
    
result2.forEach(total => { 

if(total.count >= 1){
    console.log(total.count)
const sql3 = `UPDATE poll_user_answer SET answer=? WHERE question='${que}' AND u_id='${u_id}' `;
con.query(sql3, ans, (err, result2) => {



res.status(200).json({
status: 'success',
message: 'Re submitte dthe answer!'
})
})
}
else{
const sql = "INSERT INTO poll_user_answer(u_id,question,answer) VALUES(?)";
const val = [u_id,que,ans];

con.query(sql, [val], (err, result3) => {                                               

// console.log(result3);
// console.log(err);

res.status(200).json({
status: 'success',
message: 'Answerd Submitted!',                
    
})

})
}


}) 
})

});      



// exports.post_poll_answer = catchAsync(async(req, res,next) => {

//     const u_id = req.body.u_id;
//     const ans = req.body.answer;
//     const que = req.body.question;
    
    
//     const sql = `SELECT COUNT(*) AS count FROM poll_user_answer WHERE u_id='${u_id}' AND question='${que}' `;  
        
//     con.query(sql, (err, result) => {
         
//         result.forEach(el => { 

//             console.log(el.count)

//         })
                    
//                 });
   
//     });      
    

  exports.get_polls_answer = catchAsync(async(req, res,next) => {

       const u_id = req.body.u_id;
    // const ans = req.body.answer;
    // const que = req.body.question; 
    
     const sql = `SELECT * FROM poll_question LEFT JOIN poll_user_answer ON poll_user_answer.question = poll_question.question where poll_user_answer.u_id = '${u_id}' AND poll_question.type='MCQ' ` ;  

    // const sql = `SELECT poll_question.question, poll_question.type FROM poll_question UNION SELECT poll_user_answer.answer, poll_user_answer.question FROM poll_user_answer`;
        
    con.query(sql, (err, result) => {
          
           res.send(result);
                    
                });
   
    });   
    
    exports.get_polls_answer_vs = catchAsync(async(req, res,next) => {

        const u_id = req.body.u_id;
     // const ans = req.body.answer;
     // const que = req.body.question; 
     
      const sql = `SELECT * FROM poll_question LEFT JOIN poll_user_answer ON poll_user_answer.question = poll_question.question where poll_user_answer.u_id = '${u_id}' AND poll_question.type='v/s' ` ;  
 
     // const sql = `SELECT poll_question.question, poll_question.type FROM poll_question UNION SELECT poll_user_answer.answer, poll_user_answer.question FROM poll_user_answer`;
         
     con.query(sql, (err, result) => {
           
            res.send(result);
                     
                 });
    
     });   


     exports.get_polls_answer_yesno = catchAsync(async(req, res,next) => {

        const u_id = req.body.u_id;
     // const ans = req.body.answer;
     // const que = req.body.question; 
     
      const sql = `SELECT * FROM poll_question LEFT JOIN poll_user_answer ON poll_user_answer.question = poll_question.question where poll_user_answer.u_id = '${u_id}' AND poll_question.type='yes no' ` ;  
 
     // const sql = `SELECT poll_question.question, poll_question.type FROM poll_question UNION SELECT poll_user_answer.answer, poll_user_answer.question FROM poll_user_answer`;
         
     con.query(sql, (err, result) => {
           
            res.send(result);
                     
                 });
    
     });    
    

     exports.get_graph_data = catchAsync(async(req, res,next) => {
     
        const q_id = req.body.q_id;
        
     
      const sql = `SELECT * FROM graph where q_id='${q_id}' ` ;  
 
         
     con.query(sql, (err, result) => {
           
            res.send(result);
                     
                 });
    
     });    
    

   
     

exports.get_polls_count = catchAsync(async(req, res, next) => {
   
    

    const sql =  `SELECT COUNT(*) AS count FROM poll_question WHERE status = 'Active' `;  
    con.query(sql, (err, result) => {

        // if(result.length == 0) return next(new AppError('Internal server Error!', 400));
       
        res.status(200).json({
            status: 'success',
            message: result
       
        })
        
    })
}); 


     exports.get_polls_answer_by_question = catchAsync(async(req, res,next) => {

        const u_id = req.body.u_id;
        const ans = req.body.answer;
        const que = req.body.question; 
     
      const sql = `SELECT * FROM poll_question LEFT JOIN poll_user_answer ON poll_user_answer.question = poll_question.question where poll_user_answer.u_id = '${u_id}' AND poll_question.question='${que}' ` ;  
 
     // const sql = `SELECT poll_question.question, poll_question.type FROM poll_question UNION SELECT poll_user_answer.answer, poll_user_answer.question FROM poll_user_answer`;
         
     con.query(sql, (err, result) => {
           
            res.send(result);
                     
                 });
    
     });   
     